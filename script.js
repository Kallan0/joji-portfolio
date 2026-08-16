/* ==========================================================================
   PORTFOLIO SCRIPT
   --------------------------------------------------------------------------
   Edit the CONFIG object below to update every piece of personal content —
   name, bio, stack, projects, links. Leave a project's github/demo (or a
   social url) as "" and the page shows a "coming soon" placeholder instead.
   ========================================================================== */

const CONFIG = {
  name: 'Joji',
  role: 'Full-Stack Developer',

  /* --- Location & what you're doing now --- */
  location: {
    city: 'Your City, Country',
    timezone: 'Your timezone (e.g. IST · UTC+5:30)',
  },
  currently: [
    'Building small tools and side projects to scratch my own itches',
    'Exploring new frameworks and sharpening my craft',
    'Always open to interesting collaborations — say hello!',
  ],

  /* --- Contact --- */
  email: 'you@example.com',
  socials: {
    github: '',        // e.g. 'https://github.com/yourname'
    linkedin: '',      // e.g. 'https://linkedin.com/in/yourname'
    portfolio: '',     // e.g. 'https://yourname.dev'
  },

  /* --- Tech stack (grouped into cards) --- */
  stack: [
    { icon: '🗣️', title: 'Languages',  items: ['JavaScript', 'TypeScript', 'Python', 'HTML & CSS'] },
    { icon: '🎨', title: 'Frontend',   items: ['React', 'Next.js', 'Vue', 'Tailwind CSS'] },
    { icon: '⚙️', title: 'Backend',    items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
    { icon: '🛠️', title: 'Tools & Cloud', items: ['Git', 'Docker', 'Vercel', 'Figma'] },
  ],

  /* --- Projects (github / demo empty  =>  "coming soon" placeholder) --- */
  projects: [
    {
      emoji: '📋',
      title: 'TaskFlow',
      description:
        'A collaborative task manager with realtime sync, drag-and-drop boards and smart reminders.',
      tags: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
      github: '',
      demo: '',
    },
    {
      emoji: '🎨',
      title: 'Aurora UI',
      description:
        'A lightweight, accessible component library with dark mode, design tokens and zero runtime styles.',
      tags: ['TypeScript', 'CSS', 'Storybook'],
      github: '',
      demo: '',
    },
    {
      emoji: '📡',
      title: 'DevFeed',
      description:
        'A fast, filterable feed of developer news and releases, aggregated from 40+ sources.',
      tags: ['Next.js', 'PostgreSQL', 'RSS'],
      github: '',
      demo: '',
    },
  ],
};

/* ============================== Tiny helpers ============================== */

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

/* ============================== Icons ============================== */

const ICONS = {
  github: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>`,
  external: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M7 17 17 7"/><path d="M8 7h9v9"/>
    </svg>`,
  linkedin: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A6 6 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>`,
  mail: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>`,
};

/* ============================== Render: location & now ============================== */

function renderNow() {
  $('#locationCity').textContent = CONFIG.location.city;
  $('#locationTz').textContent = CONFIG.location.timezone;

  $('#currentlyList').innerHTML = CONFIG.currently
    .map((item) => `<li><span class="dot">●</span><span>${item}</span></li>`)
    .join('');
}

/* ============================== Render: tech stack ============================== */

function renderStack() {
  $('#stackGrid').innerHTML = CONFIG.stack
    .map(
      (group) => `
        <article class="stack-card reveal">
          <span class="icon">${group.icon}</span>
          <h3>${group.title}</h3>
          <div class="chips">
            ${group.items.map((item) => `<span class="chip">${item}</span>`).join('')}
          </div>
        </article>`
    )
    .join('');
}

/* ============================== Render: projects ============================== */

function linkOrPlaceholder(url, label, icon) {
  if (url) {
    return `<a class="chip-link" href="${url}" target="_blank" rel="noopener noreferrer">${icon}${label}</a>`;
  }
  return `<span class="chip-link is-soon" aria-disabled="true">${icon}${label} — coming soon</span>`;
}

function renderProjects() {
  $('#projectGrid').innerHTML = CONFIG.projects
    .map(
      (p, i) => `
        <article class="project-card reveal">
          <div class="project-top">
            <span class="project-emoji">${p.emoji}</span>
            <span class="project-num">${String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-tags chips">
            ${p.tags.map((tag) => `<span class="chip">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            ${linkOrPlaceholder(p.github, 'Repository', ICONS.github)}
            ${linkOrPlaceholder(p.demo, 'Live preview', ICONS.external)}
          </div>
        </article>`
    )
    .join('');
}

/* ============================== Render: contact ============================== */

const SOCIAL_LABELS = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  portfolio: 'Portfolio',
};

function renderContact() {
  $('#mailBtn').href = `mailto:${CONFIG.email}`;
  $('#mailBtn').textContent = CONFIG.email;

  $('#socials').innerHTML = Object.entries(CONFIG.socials)
    .map(([key, url]) => {
      const icon = ICONS[key] || ICONS.external;
      const label = SOCIAL_LABELS[key] || key;
      if (url) {
        return `<a class="social" href="${url}" target="_blank" rel="noopener noreferrer">${icon}${label}</a>`;
      }
      return `<span class="social is-soon" aria-disabled="true">${icon}${label} — coming soon</span>`;
    })
    .join('');

  $('#year').textContent = new Date().getFullYear();
}

/* ============================== Contact form ============================== */

function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const status = $('#formStatus');
  const submitBtn = $('#formSubmit');
  const defaultLabel = submitBtn.textContent;

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = `form-status${kind ? ` ${kind}` : ''}`;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = {
      name: $('#cf-name').value.trim(),
      email: $('#cf-email').value.trim(),
      subject: $('#cf-subject').value.trim(),
      message: $('#cf-message').value.trim(),
      website: $('#cf-website').value.trim(), // honeypot — bots fill this
    };

    // Native HTML validation handles most cases; this is a final guard.
    if (!payload.name || !payload.email || !payload.message) {
      setStatus('Please fill in your name, email and message.', 'err');
      return;
    }

    setStatus('', '');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        form.reset();
        setStatus("Thanks — your message is on its way. I'll get back to you soon!", 'ok');
      } else {
        setStatus(json.error || 'Something went wrong. Please try again.', 'err');
      }
    } catch {
      setStatus("Couldn't reach the server — please email me directly instead.", 'err');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = defaultLabel;
    }
  });
}

/* ============================== Navbar behavior ============================== */

function initNav() {
  const navbar = $('#navbar');
  const toggle = $('#navToggle');

  // Close menu on link click
  $$('.nav-link', navbar).forEach((link) =>
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );

  toggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Solidify the glass slightly after scrolling
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Scroll-spy: highlight the section currently in view
  const navLinks = $$('.nav-link');
  const sections = navLinks
    .map((link) => $(link.getAttribute('href')))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) =>
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            )
          );
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => spy.observe(section));
}

/* ============================== Subtle scroll reveal ============================== */

function initReveal() {
  const revealEls = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ============================== Boot ============================== */

renderNow();
renderStack();
renderProjects();
renderContact();
initNav();
initReveal();
initContactForm();
