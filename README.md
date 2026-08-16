# Kallan — Portfolio

Single-page portfolio with a floating glass navbar, About, Tech stack, Projects,
Location/Now and Contact sections. The contact form sends messages to your inbox
with **nodemailer**.

## Run it

```bash
npm install
cp .env.example .env   # then fill in your credentials (see below)
npm start
```

Open http://localhost:3000

> You can still open `index.html` directly to browse the site — the contact
> form just needs the server running to send mail.

## Email setup (Gmail)

The form uses SMTP with nodemailer. Gmail requires an **App Password** instead
of your normal password:

1. Go to [myaccount.google.com](https://myaccount.google.com) → **Security**
2. Turn on **2-Step Verification** (required for app passwords)
3. **Security** → **App passwords** → create one for "Mail"
4. Copy the 16-character password into `.env`:

```env
SMTP_USER=jojiag2005@gmail.com
SMTP_PASS=your-16-char-app-password
TO_EMAIL=jojiag2005@gmail.com
```

Messages are delivered to `TO_EMAIL`, with the sender's email set as
`Reply-To` so you can reply directly to the client.

For other providers, adjust `SMTP_HOST`, `SMTP_PORT` and `SMTP_SECURE` in `.env`.

## Files

| File             | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| `index.html`     | Page structure (incl. the contact form)        |
| `styles.css`     | Design tokens in `:root` + all styling         |
| `script.js`      | `CONFIG` content object + rendering & form JS  |
| `server.js`      | Static file server + `POST /api/contact` mailer |
| `render.yaml`    | Render blueprint (deploy config)               |
| `.env.example`   | Local env template                             |

## Deploying

The contact form needs the Node server, so deploy the repo to a host that can
run Node. A static-only host (GitHub Pages, Netlify) can show the site, but the
form won't be able to send mail without a backend.

### Option A — Render (recommended, config included)

A `render.yaml` blueprint is included, so deployment is mostly clicking:

1. Push this folder to a GitHub repository.
2. On Render: **New → Blueprint** and connect the repo.
3. Render creates the web service, then prompts for the `SMTP_*` values
   (marked `sync: false`, so secrets are set in the dashboard and never live
   in git).
4. Deploy and open the generated URL.

### Option B — Railway

1. Push the repo to GitHub and import it in Railway (or use the CLI).
2. Nixpacks auto-detects Node and runs `npm start` (→ `node server.js`).
3. Set the variables below in the dashboard or with `railway variables`.
4. Railway assigns `PORT` automatically; the app listens on it.

### Environment variables

| Variable      | Required | Default                | Description                                |
| ------------- | -------- | ---------------------- | ------------------------------------------ |
| `TO_EMAIL`    | no       | `jojiag2005@gmail.com` | Recipient of contact-form messages         |
| `SMTP_HOST`   | no       | `smtp.gmail.com`       | SMTP server host                           |
| `SMTP_PORT`   | no       | `587`                  | SMTP port. On Render free tier use `2525` (SendGrid) |
| `SMTP_SECURE` | no       | `false`                | Use TLS on connect (true for port 465)     |
| `SMTP_USER`   | yes      | —                      | SMTP login (your Gmail address)            |
| `SMTP_PASS`   | yes      | —                      | Gmail **app password** (16 chars, see above) |
| `PORT`        | no       | `3000`                 | Hosts set this automatically               |
| `NODE_ENV`    | no       | —                      | Set to `production` on the host            |

### Production notes

- **Render free tier blocks SMTP** — since Sep 26, 2025, Render's *free*
  web services block all outbound traffic to SMTP ports 25, 465 and 587
  (so Gmail's `587`/`465` time out). Two fixes: use **SendGrid SMTP on port
  `2525`** (free tier, 100 emails/day — just change the env vars below), or
  upgrade to a paid Render plan. The server now fails fast (~15s) instead of
  hanging 2 minutes when the SMTP host is unreachable.
- **Gmail SMTP limits** — free Gmail allows roughly 500 outgoing emails/day
  and may rate-limit bursts. Fine for a portfolio; if you ever need more,
  swap the transporter in `server.js` for a transactional service (Resend,
  Postmark, SendGrid) — the `POST /api/contact` API stays the same.
- **Files served** — the server only serves `index.html`, `styles.css` and
  `script.js`. Requests for `/server.js`, `/.env`, `/package.json`, etc.
  return 404, so source and secrets stay private.
- **Rate limiting** — one message per IP per minute. With `NODE_ENV=production`
  the server trusts the host proxy's `X-Forwarded-For` header, so each real
  visitor is throttled independently.
- **Secrets** — `.env` and `node_modules` are gitignored; never commit
  `SMTP_PASS`. On the host, set secrets as environment variables, not files.
