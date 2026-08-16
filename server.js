/* ==========================================================================
   PORTFOLIO SERVER
   --------------------------------------------------------------------------
   Serves the static site AND handles the contact form. Emails are sent with
   nodemailer over SMTP.

   Setup:
     1. cp .env.example .env        (or create .env)
     2. Fill in SMTP_PASS with a Gmail app password (see README)
     3. npm start                   -> http://localhost:3000
   ========================================================================== */

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// Behind Render/Railway's proxy, trust X-Forwarded-For so req.ip (and the
// rate limiter) sees the real client instead of the proxy's address.
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

/* ------------------------------ Config ------------------------------ */

const PORT = process.env.PORT || 3000;
const TO_EMAIL = process.env.TO_EMAIL || 'jojiag2005@gmail.com';
const FROM_EMAIL = process.env.SMTP_USER || TO_EMAIL;
const RATE_LIMIT_MS = 60 * 1000; // one message per IP per minute

/* ------------------------------ Middleware ------------------------------ */

app.use(express.json());

// Only the site's own files are served — never .env, server.js,
// package.json, or anything else that might sit in this folder.
const PUBLIC_FILES = new Set(['index.html', 'styles.css', 'script.js']);
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  const name = decodeURIComponent(req.path).split('/').pop();
  if (req.path !== '/' && !PUBLIC_FILES.has(name)) return res.sendStatus(404);
  next();
});
app.use(express.static(__dirname, { index: 'index.html', dotfiles: 'deny' }));

/* ------------------------------ Mailer ------------------------------ */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: (process.env.SMTP_SECURE || 'false') === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Fail fast instead of hanging ~2 min when the SMTP host is unreachable
  // (e.g. Render's free tier blocks outbound ports 25/465/587).
  connectionTimeout: 15 * 1000,
  greetingTimeout: 15 * 1000,
  socketTimeout: 20 * 1000,
});

/* ------------------------------ Helpers ------------------------------ */

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Minimal per-IP throttle to keep the form spam-friendly
const recentSends = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const last = recentSends.get(ip) || 0;
  if (now - last < RATE_LIMIT_MS) return true;
  recentSends.set(ip, now);
  return false;
}

/* ------------------------------ Contact API ------------------------------ */

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};

  // Honeypot: bots fill this hidden field — silently pretend success
  if (website) {
    return res.json({ ok: true });
  }

  // Validation
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = 'Please provide your name.';
  if (!isValidEmail(email || '')) errors.email = 'Please provide a valid email address.';
  if (!message || message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Please check the highlighted fields.', fields: errors });
  }

  if (isRateLimited(req.ip)) {
    return res.status(429).json({ error: 'Too many messages — please wait a minute and try again.' });
  }

  const clean = {
    name: name.trim(),
    email: email.trim(),
    subject: (subject || '').trim(),
    message: message.trim(),
  };

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: clean.email,
      subject: `New portfolio message from ${clean.name}${clean.subject ? ` — ${clean.subject}` : ''}`,
      text: [
        `Name: ${clean.name}`,
        `Email: ${clean.email}`,
        `Subject: ${clean.subject || '—'}`,
        '',
        clean.message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #222;">
          <h2 style="margin-bottom: 4px;">New contact form message</h2>
          <p style="margin-top: 0; color: #666;">from ${escapeHtml(clean.name)} &lt;${escapeHtml(clean.email)}&gt;</p>
          <table style="border-collapse: collapse; width: 100%; margin: 18px 0;">
            <tr>
              <td style="padding: 8px 12px; background: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold; width: 100px;">Name</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(clean.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(clean.email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold;">Subject</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(clean.subject || '—')}</td>
            </tr>
          </table>
          <p style="white-space: pre-wrap;">${escapeHtml(clean.message)}</p>
          <p style="color: #999; font-size: 12px; margin-top: 28px;">Sent from the contact form on the portfolio site.</p>
        </div>`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Mail send failed:', err.message);
    res.status(500).json({
      error:
        'Could not send the message right now. Please try again later, or email me directly at ' + TO_EMAIL + '.',
    });
  }
});

/* ------------------------------ Boot ------------------------------ */

const server = app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});

// Exit cleanly when the host sends SIGTERM (deploys, restarts, scaling)
process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT', () => server.close(() => process.exit(0)));
