/* ============================================================
   CET138 Full Stack Development ePortfolio
   File   : js/main.js
   Author : [Student Name]
   Purpose: Navigation, scroll reveal, demos, interactions
   ============================================================ */

'use strict';

/* ── NAVBAR SCROLL & MOBILE TOGGLE ──────────────────────────── */
const navbar    = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
  toggleBackToTop();
});

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  const isOpen = navLinks?.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.innerHTML = isOpen ? '✕' : '☰';
});

// Close nav when a link is clicked (mobile)
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.innerHTML = '☰';
  });
});

// Mark active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === currentPage) a.classList.add('active');
});


/* ── SCROLL REVEAL ───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── BACK TO TOP ─────────────────────────────────────────────── */
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
  if (!backToTopBtn) return;
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ── COUNTER DEMO ────────────────────────────────────────────── */
let counterValue = 0;

function updateCounter(delta) {
  counterValue += delta;
  const el = document.getElementById('counterNum');
  if (!el) return;
  el.textContent = counterValue;
  el.style.transform = 'scale(1.25)';
  el.style.color = counterValue > 0 ? '#15803D' : counterValue < 0 ? '#DC2626' : '#2E5FA3';
  setTimeout(() => { el.style.transform = 'scale(1)'; }, 150);
}

function resetCounter() {
  counterValue = 0;
  const el = document.getElementById('counterNum');
  if (!el) return;
  el.textContent = '0';
  el.style.color = '#2E5FA3';
}

// Expose to global scope for inline onclick
window.updateCounter = updateCounter;
window.resetCounter  = resetCounter;


/* ── COLOUR BOX DEMO ─────────────────────────────────────────── */
const colours = [
  '#1F3864','#2E5FA3','#0E7490','#B45309',
  '#7C3AED','#DC2626','#15803D','#475569'
];
let colourIndex = 0;

function changeColour() {
  const box = document.getElementById('colourBox');
  if (!box) return;
  colourIndex = (colourIndex + 1) % colours.length;
  box.style.background = colours[colourIndex];
  box.textContent = colours[colourIndex].toUpperCase();
}

window.changeColour = changeColour;


/* ── TODO LIST DEMO ──────────────────────────────────────────── */
function addTodo() {
  const input = document.getElementById('todoInput');
  const list  = document.getElementById('todoList');
  if (!input || !list) return;
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `<span class="chk">○</span> ${escapeHTML(text)}`;
  li.addEventListener('click', () => toggleTodo(li));
  list.appendChild(li);
  input.value = '';
  input.focus();
}

function toggleTodo(li) {
  li.classList.toggle('done');
  const chk = li.querySelector('.chk');
  chk.textContent = li.classList.contains('done') ? '✓' : '○';
}

function todoKeydown(e) {
  if (e.key === 'Enter') addTodo();
}

window.addTodo   = addTodo;
window.todoKeydown = todoKeydown;


/* ── PROPERTY SEARCH DEMO ────────────────────────────────────── */
const properties = [
  { id:1, title:'12 Harbour View Rd', suburb:'Bondi Beach',    state:'NSW', type:'sale', beds:4, baths:2, price:1850000 },
  { id:2, title:'5/88 Collins St',    suburb:'Melbourne CBD',  state:'VIC', type:'rent', beds:2, baths:1, price:620     },
  { id:3, title:'34 Riverside Dr',    suburb:'South Brisbane', state:'QLD', type:'sale', beds:3, baths:2, price:975000  },
  { id:4, title:'7 King St',          suburb:'Newtown',        state:'NSW', type:'rent', beds:1, baths:1, price:480     },
  { id:5, title:'88 Ocean Parade',    suburb:'Manly',          state:'NSW', type:'sale', beds:5, baths:3, price:3200000 },
  { id:6, title:'2/14 Flinders Lane', suburb:'Melbourne CBD',  state:'VIC', type:'rent', beds:2, baths:1, price:550     },
];

function buildCard(p) {
  const price = p.type === 'rent'
    ? `$${p.price}/wk`
    : `$${p.price.toLocaleString()}`;
  const badge = p.type === 'sale'
    ? `<span style="background:#DCFCE7;color:#15803D;font-size:.70rem;font-weight:700;padding:.18rem .55rem;border-radius:100px;">For Sale</span>`
    : `<span style="background:#DBEAFE;color:#1D4ED8;font-size:.70rem;font-weight:700;padding:.18rem .55rem;border-radius:100px;">For Rent</span>`;
  return `
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:12px;padding:1.25rem;transition:box-shadow .2s;"
         onmouseover="this.style.boxShadow='0 4px 20px rgba(0,0,0,.10)'"
         onmouseout="this.style.boxShadow='none'">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:.5rem;">
        <strong style="color:#1F3864;font-size:.92rem;">${escapeHTML(p.title)}</strong>
        ${badge}
      </div>
      <div style="color:#64748B;font-size:.83rem;margin-bottom:.6rem;">
        📍 ${escapeHTML(p.suburb)}, ${escapeHTML(p.state)}
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <strong style="color:#2E5FA3;font-size:1rem;">${price}</strong>
        <span style="color:#64748B;font-size:.78rem;">🛏 ${p.beds} &nbsp; 🚿 ${p.baths}</span>
      </div>
    </div>`;
}

function filterProperties() {
  const suburbEl = document.getElementById('filterSuburb');
  const typeEl   = document.getElementById('filterType');
  const grid     = document.getElementById('propGrid');
  const count    = document.getElementById('propCount');
  if (!grid) return;

  const suburb = suburbEl?.value.toLowerCase().trim() || '';
  const type   = typeEl?.value || '';

  const filtered = properties.filter(p =>
    (!suburb || p.suburb.toLowerCase().includes(suburb) || p.state.toLowerCase().includes(suburb)) &&
    (!type   || p.type === type)
  );

  grid.innerHTML  = filtered.length
    ? filtered.map(buildCard).join('')
    : `<div style="grid-column:1/-1;text-align:center;color:#64748B;padding:2rem;">No properties found matching your search.</div>`;
  if (count) count.textContent = `${filtered.length} propert${filtered.length === 1 ? 'y' : 'ies'} found`;
}

window.filterProperties = filterProperties;

// Initialise on load if element exists
document.addEventListener('DOMContentLoaded', () => {
  filterProperties();
});


/* ── SMOOTH ANCHOR SCROLLING ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ── STATS COUNTER ANIMATION ─────────────────────────────────── */
function animateCount(el, target, duration = 1200) {
  const start   = performance.now();
  const initial = 0;
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
    el.textContent = Math.round(initial + (target - initial) * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(el => {
        animateCount(el, parseInt(el.dataset.target));
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stats-grid').forEach(el => statsObserver.observe(el));


/* ── UTILS ───────────────────────────────────────────────────── */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}
