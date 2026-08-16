/* ==========================================================================
   PORTFOLIO SCRIPT
   --------------------------------------------------------------------------
   Edit the CONFIG object below to update every piece of personal content —
   name, bio, stack, projects, links. Leave a project's github/demo (or a
   social url) as "" and the page shows a "coming soon" placeholder instead.
   ========================================================================== */

const CONFIG = {
  name: 'Kallan',
  role: 'Full-Stack Developer',

  /* --- Location & what you're doing now --- */
  location: {
    city: 'India',                                // update to your city
    timezone: 'IST · UTC+5:30',
  },
  currently: [
    'Building small tools and side projects to scratch my own itches',
    'Exploring new frameworks and sharpening my craft',
    'Always open to interesting collaborations — say hello!',
  ],

  /* --- Contact --- */
  email: 'jojiag2005@gmail.com',
  socials: {
    github: 'https://github.com/Kallan0',
    instagram: '',     // e.g. 'https://instagram.com/yourname'
    whatsapp: '',      // e.g. 'https://wa.me/91XXXXXXXXXX'
    linkedin: '',      // e.g. 'https://linkedin.com/in/yourname'
  },

  /* --- Tech stack (icon = key into the ICONS library below) --- */
  stack: [
    { icon: 'code',   title: 'Languages',      items: ['JavaScript', 'TypeScript', 'Python', 'HTML & CSS'] },
    { icon: 'layout', title: 'Frontend',       items: ['React', 'Next.js', 'Vue', 'Tailwind CSS'] },
    { icon: 'server', title: 'Backend',        items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
    { icon: 'wrench', title: 'Tools & Cloud',  items: ['Git', 'Docker', 'Vercel', 'Figma'] },
  ],

  /* --- Projects (github / demo empty  =>  "coming soon" placeholder) ---
     Real repos pulled from github.com/Kallan0 */
  projects: [
    {
      icon: 'shoppingBag',
      title: 'Value Village',
      description:
        'A bespoke full-stack e-commerce platform for the thrift and resale market — built on the MERN stack with server-side rendering via React Router v7.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Kallan0/value-village-thrift-resell',
      demo: 'https://value-village-thrift-resell.vercel.app',
    },
    {
      icon: 'graduationCap',
      title: 'SL-LMS',
      description:
        'A sign language learning management system — a responsive TypeScript/React app with JWT-based authentication and MediaPipe vision integration.',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'MediaPipe'],
      github: 'https://github.com/Kallan0/SL-LMS',
      demo: '',
    },
    {
      icon: 'rss',
      title: 'Tech News',
      description:
        'An automated daily tech news board — a Python pipeline fetches and categorizes top Hacker News stories, served through a MERN web interface.',
      tags: ['Python', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Kallan0/Tech-news',
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
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>`,
  instagram: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>`,
  whatsapp: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>`,
  mail: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>`,

  /* --- Generic UI icons (lucide-style strokes) --- */
  sun: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>`,
  mapPin: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>`,
  zap: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>`,
  code: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>
    </svg>`,
  layout: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>`,
  server: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/>
    </svg>`,
  wrench: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>`,
  clipboard: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>
    </svg>`,
  layers: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
    </svg>`,
  rss: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>
    </svg>`,
  folder: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
    </svg>`,
  shoppingBag: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>`,
  graduationCap: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
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

/* ============================== Render: tech stack (orbiting) ============================== */

const ORBIT_FACTORS = [0.42, 0.6, 0.78, 0.96];   // ring radius as a share of the container
const ORBIT_DURATIONS = [18, 24, 30, 36];        // seconds per revolution, staggered
const ORBIT_LABEL_ANGLES = [0, 90, 180, 270];    // bottom, right, top, left

function renderOrbit() {
  const rings = $('#orbitRings');
  if (!rings) return;

  rings.innerHTML = CONFIG.stack
    .map((group, ringIndex) => {
      const count = group.items.length;
      const nodes = group.items
        .map((item, i) => {
          const angle = (360 / count) * i + ringIndex * 22.5; // stagger rings so tiles don't line up
          const direction = ringIndex % 2 === 1 ? 'reverse' : 'normal';
          return `
            <span class="orbit-node" data-tooltip="${item}" aria-label="${item}" style="--angle: ${angle}deg; --radius: var(--r${ringIndex}); --duration: ${ORBIT_DURATIONS[ringIndex]}s; animation-direction: ${direction}">
              ${ICONS[group.icon] || ICONS.code}
            </span>`;
        })
        .join('');

      const label = `
        <span class="orbit-label" style="--angle: ${ORBIT_LABEL_ANGLES[ringIndex]}deg; --radius: var(--r${ringIndex});">
          ${group.title}
        </span>`;

      return nodes + label;
    })
    .join('');

  layoutOrbit();
}

let orbitRadii = [];

function layoutOrbit() {
  const container = $('#orbitContainer');
  if (!container) return;
  const maxRadius = Math.min(container.clientWidth / 2 - 26, 230);
  orbitRadii = ORBIT_FACTORS.map((factor) => Math.round(maxRadius * factor));
  orbitRadii.forEach((radius, i) => {
    container.style.setProperty(`--r${i}`, `${radius}px`);
  });
  // Hug the circle: ring diameter + room for the tile overhang and bottom label
  container.style.height = `${2 * maxRadius + 56}px`;
  renderOrbitPaths();
}

/* Draw the orbital path circles so each ring's line is visible */
function renderOrbitPaths() {
  const svg = $('#orbitPaths');
  if (!svg) return;
  svg.innerHTML = orbitRadii
    .map((radius) => `<circle class="orbit-path" cx="50%" cy="50%" r="${radius}" />`)
    .join('');
}

window.addEventListener('resize', layoutOrbit);

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
            <span class="project-icon">${ICONS[p.icon] || ICONS.folder}</span>
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

function renderContact() {
  $('#mailBtn').href = `mailto:${CONFIG.email}`;
  $('#mailBtn').textContent = CONFIG.email;
  $('#year').textContent = new Date().getFullYear();
}

/* ============================== Connect dock ============================== */

const DOCK_ORDER = ['github', 'instagram', 'whatsapp', 'linkedin'];

const DOCK_LABELS = {
  github: 'GitHub',
  instagram: 'Instagram',
  whatsapp: 'WhatsApp',
  linkedin: 'LinkedIn',
};

function renderDock() {
  const dock = $('#dock');
  if (!dock) return;

  dock.innerHTML = DOCK_ORDER.map((key) => {
    const url = CONFIG.socials[key] || '';
    const label = DOCK_LABELS[key] || key;
    const icon = ICONS[key] || ICONS.external;

    if (url) {
      return `<a class="dock-item" href="${url}" target="_blank" rel="noopener noreferrer" title="${label}" aria-label="${label}">${icon}</a>`;
    }
    return `<span class="dock-item is-soon" title="${label} — coming soon" aria-disabled="true">${icon}</span>`;
  }).join('');
}

/* macOS-style magnify: the hovered icon grows and its neighbors swell slightly */
function initDock() {
  const dock = $('#dock');
  if (!dock) return;

  const items = $$('.dock-item:not(.is-soon)', dock);
  if (!items.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const SCALES = [1.42, 1.16, 1.05]; // hovered, ±1, ±2

  dock.addEventListener('mousemove', (event) => {
    const dockRect = dock.getBoundingClientRect();
    const x = event.clientX - dockRect.left;

    let active = -1;
    for (let i = 0; i < items.length; i++) {
      const r = items[i].getBoundingClientRect();
      if (x >= r.left - dockRect.left && x <= r.right - dockRect.left) {
        active = i;
        break;
      }
    }

    items.forEach((item, i) => {
      const dist = active < 0 ? 99 : Math.abs(i - active);
      const scale = dist <= 2 ? SCALES[dist] : 1;
      item.style.transform = scale === 1 ? '' : `scale(${scale})`;
    });
  });

  dock.addEventListener('mouseleave', () => {
    items.forEach((item) => {
      item.style.transform = '';
    });
  });
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
renderOrbit();
renderProjects();
renderContact();
renderDock();
initDock();
initNav();
initReveal();
initContactForm();
