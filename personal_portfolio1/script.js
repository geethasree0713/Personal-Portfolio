// ===========================================================
// Manyam Geetha Sree — Portfolio shared behaviour
// ===========================================================

/* ---------- Theme (dark default, persisted) ---------- */
(function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.innerHTML = theme === 'dark'
    ? '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.72 0l-.7.7M6.34 17.66l-.7.7M12 8a4 4 0 100 8 4 4 0 000-8z"/>' // sun
    : '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'; // moon
}

document.addEventListener('DOMContentLoaded', () => {
  updateThemeIcon(document.documentElement.getAttribute('data-theme'));

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

  /* ---------- Active nav link ---------- */
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll('.dock a[data-nav]').forEach((link) => {
    if (link.getAttribute('data-nav') === page) link.classList.add('active');
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Skill bar fill on view ---------- */
  const bars = document.querySelectorAll('.skill-bar-fill[data-level]');
  if (bars.length && 'IntersectionObserver' in window) {
    const barIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.width = el.getAttribute('data-level') + '%';
            barIo.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => barIo.observe(b));
  } else {
    bars.forEach((b) => (b.style.width = b.getAttribute('data-level') + '%'));
  }

  /* ---------- Terminal typing effect (home page) ---------- */
  const terminalLines = document.querySelectorAll('.terminal-body [data-typed]');
  terminalLines.forEach((line, i) => {
    line.style.animationDelay = `${i * 0.55 + 0.2}s`;
  });

  /* ---------- Project filter (projects page) ---------- */
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.project-card');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.getAttribute('data-filter');
      cards.forEach((card) => {
        const tags = card.getAttribute('data-tags') || '';
        const show = filter === 'all' || tags.includes(filter);
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- Contact form (Formspree) ---------- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const btn = document.getElementById('form-submit');
      const endpoint = form.getAttribute('action');

      if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
        status.textContent = 'Connect a Formspree endpoint in contact-form action to activate this form.';
        status.className = 'text-xs mt-3 font-mono text-amber-400';
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending...';
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (res.ok) {
          status.textContent = 'Message sent — thank you! I\u2019ll reply soon.';
          status.className = 'text-xs mt-3 font-mono text-accent';
          form.reset();
        } else {
          throw new Error('send failed');
        }
      } catch (err) {
        status.textContent = 'Something went wrong. Please email me directly instead.';
        status.className = 'text-xs mt-3 font-mono text-red-400';
      } finally {
        btn.disabled = false;
        btn.textContent = 'Send message';
      }
    });
  }
});
