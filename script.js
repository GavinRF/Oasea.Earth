/* =============================================
   OASEA — script.js
   Pre-launch landing page
   ============================================= */

// ──────────────────────────────────────────────
// GOOGLE FORM CONFIG
// Swap these two constants when you have your form:
//   1. Publish your Google Form
//   2. Get the form action URL from "pre-filled link" or network tab
//   3. Get the entry ID from the form's source HTML (entry.XXXXXXXXXX)
// ──────────────────────────────────────────────
const FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdllahGYrCo01yFGv7Qmv5kr3vWvHOB4tkSFvbXg4eZ8vKT_g/formResponse';
const ENTRY_ID = 'entry.54297338';
// ──────────────────────────────────────────────


/* ============================================
   CANVAS BACKGROUND
   Layers (back to front):
   1. Sky gradient (night → dusk orange)
   2. Stars
   3. Horizon glow
   4. Dune silhouettes (3 layers of depth)
   5. Ocean with animated sine waves
   6. Rain particles
   ============================================ */

const canvas  = document.getElementById('bg-canvas');
const ctx     = canvas.getContext('2d');

let W = 0, H = 0;
let t = 0; // time in seconds

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  // W/H always stay in CSS (logical) pixels so all drawing coords are consistent
  W = window.innerWidth;
  H = window.innerHeight;
  // Physical canvas size = logical × DPR for sharp rendering
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  // Assigning canvas.width resets the transform; re-apply the DPR scale
  ctx.scale(dpr, dpr);
}

window.addEventListener('resize', resize);
resize();

// ── Rain particles ───────────────────────────
const RAIN_COUNT = window.innerWidth < 520 ? 45 : 90;
const rain = Array.from({ length: RAIN_COUNT }, () => ({
  x:      Math.random(),
  y:      Math.random(),
  vy:     0.00012 + Math.random() * 0.00016,
  vx:     0.000008 + Math.random() * 0.000012,
  len:    5 + Math.random() * 9,
  alpha:  0.025 + Math.random() * 0.06,
}));

// ── Draw helpers ─────────────────────────────

function drawRain() {
  rain.forEach(drop => {
    drop.y += drop.vy;
    drop.x += drop.vx;
    if (drop.y > 1) { drop.y = -0.02; drop.x = Math.random(); }
    if (drop.x > 1) { drop.x = 0; }

    const x0 = drop.x * W;
    const y0 = drop.y * H;
    const x1 = x0 + drop.vx * 3000;
    const y1 = y0 + drop.len;

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = `rgba(180, 215, 235, ${drop.alpha})`;
    ctx.lineWidth = 0.6;
    ctx.stroke();
  });
}

function frame(timestamp) {
  t = timestamp * 0.001;
  ctx.clearRect(0, 0, W, H);
  drawRain();
  animId = requestAnimationFrame(frame);
}

let animId = requestAnimationFrame(frame);

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animId);
  } else {
    animId = requestAnimationFrame(frame);
  }
});


/* ============================================
   COUNTDOWN TIMER
   Target: April 22, 2026 — Earth Day
   ============================================ */

const LAUNCH = new Date('2026-04-22T00:00:00');

const els = {
  days:    document.getElementById('cd-days'),
  hours:   document.getElementById('cd-hours'),
  minutes: document.getElementById('cd-minutes'),
  seconds: document.getElementById('cd-seconds'),
};

function pad(n) {
  return String(Math.max(0, Math.floor(n))).padStart(2, '0');
}

function tickUnit(el, newVal) {
  if (el.textContent === newVal) return;
  el.classList.add('tick');
  requestAnimationFrame(() => {
    el.textContent = newVal;
    requestAnimationFrame(() => el.classList.remove('tick'));
  });
}

function updateCountdown() {
  const diff = LAUNCH - Date.now();

  if (diff <= 0) {
    ['days', 'hours', 'minutes', 'seconds'].forEach(k => tickUnit(els[k], '00'));
    return;
  }

  const d  = Math.floor(diff / 86400000);
  const h  = Math.floor((diff % 86400000) / 3600000);
  const m  = Math.floor((diff % 3600000)  / 60000);
  const s  = Math.floor((diff % 60000)    / 1000);

  tickUnit(els.days,    pad(d));
  tickUnit(els.hours,   pad(h));
  tickUnit(els.minutes, pad(m));
  tickUnit(els.seconds, pad(s));
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ============================================
   EMAIL FORM — Google Forms silent POST
   ============================================ */

const emailForm  = document.getElementById('email-form');
const formShell  = document.getElementById('form-shell');
const thankYou   = document.getElementById('thank-you');
const submitBtn  = document.getElementById('submit-btn');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(msg) {
  emailError.textContent = msg;
  emailError.classList.add('visible');
}

function hideError() {
  emailError.classList.remove('visible');
}

emailInput.addEventListener('input', hideError);

emailForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    showError('Enter your email to join.');
    emailInput.focus();
    return;
  }

  if (!validateEmail(email)) {
    showError('That doesn\'t look like a valid email.');
    emailInput.focus();
    return;
  }

  hideError();

  // Optimistic UI — disable while submitting
  submitBtn.disabled = true;
  submitBtn.textContent = '···';

  try {
    const body = new URLSearchParams();
    body.set(ENTRY_ID, email);

    // Google Forms requires no-cors — response will be opaque (that's fine)
    await fetch(FORM_ACTION_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    body.toString(),
    });
  } catch (_) {
    // With no-cors, network errors are indistinguishable from success.
    // We show the thank-you either way — form data was sent.
  }

  showThankYou();
});

function showThankYou() {
  // Fade out the form
  formShell.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  formShell.style.opacity    = '0';
  formShell.style.transform  = 'translateY(-8px)';

  setTimeout(() => {
    formShell.style.display = 'none';
    thankYou.classList.add('visible');
  }, 560);
}

// ── Share button ────────────────────────────────
const shareBtn = document.getElementById('share-btn');
const shareData = {
  title: 'Oasea — Every Drop Counts',
  text: 'Sculpt terrain. Guide the rain. Watch life return. Oasea launches Earth Day 2026.',
  url: 'https://oasea.earth/',
};

shareBtn.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (_) {}
  } else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      shareBtn.querySelector('span').textContent = 'Link copied!';
      setTimeout(() => {
        shareBtn.querySelector('span').textContent = 'Tell a friend';
      }, 2000);
    } catch (_) {}
  }
});
