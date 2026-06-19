# CET138 Full Stack Development — Assignment 1: ePortfolio

## Overview

The portfolio demonstrates knowledge and practical skills across five core areas as required by the assessment brief.

**Live Portfolio URL:** [https://snehaproject09.netlify.app/](https://snehaproject09.netlify.app/)

---

## Folder Structure

```
cet138_site/
│
├── index.html                  ← Home page (entry point)
│
├── pages/                      ← All inner pages
│   ├── fullstack.html          ← Section 2: What is Full Stack Development?
│   ├── html.html               ← Section 3: HTML
│   ├── css-page.html           ← Section 4: CSS
│   ├── bootstrap.html          ← Section 5: Bootstrap Framework
│   ├── javascript.html         ← Section 6: JavaScript (with live demos)
│   ├── contact.html            ← Contact & Location (with map + form)
│   ├── references.html         ← All 18 Harvard references
│   └── about.html              ← Portfolio overview & assessment details
│
├── css/
│   └── style.css               ← Complete design system & all styles
│
├── js/
│   └── main.js                 ← Navigation, demos, scroll reveal, counter
│
└── assets/
    ├── icons/
    │   └── favicon.svg         ← Site favicon
    └── images/
        └── (add your own images here)
```

---

## How to Open

View the hosted portfolio online:

[https://snehaproject09.netlify.app/](https://snehaproject09.netlify.app/)

Or open the project locally:

Simply open `index.html` in any modern web browser. No server required — this is a fully static website.

```bash
# Option 1: Open directly
open index.html

# Option 2: Run a local server (optional, for best experience)
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

---

## Features

- **Fully responsive** — works on mobile, tablet, and desktop
- **Fixed sticky navbar** with mobile hamburger menu
- **Scroll reveal animations** — elements animate in as you scroll
- **Animated stats counter** on the home page
- **4 live interactive demos:**
  - DOM manipulation colour box (JavaScript)
  - Interactive counter with state management (JavaScript)
  - To-do list with dynamic DOM (JavaScript)
  - CSS keyframe animations (no JS — pure CSS)
- **Live property search filter** on the JavaScript page
- **Contact form** with validation (demo)
- **Campus location** with Google Maps link
- **Back to top** button
- **18 Harvard-formatted references** on the references page
- **Syntax-highlighted code blocks** across all sections
- **Breadcrumb navigation** on inner pages
- **Grading rubric table** on home page

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero, section overview, live demos, stats |
| Full Stack Dev | `pages/fullstack.html` | Section 2 — definition, 3 layers, request cycle, code examples |
| HTML | `pages/html.html` | Section 3 — semantic HTML5, forms, complete page example |
| CSS | `pages/css-page.html` | Section 4 — selectors, box model, Flexbox, Grid, CSS variables |
| Bootstrap | `pages/bootstrap.html` | Section 5 — grid, components, utility classes |
| JavaScript | `pages/javascript.html` | Section 6 — DOM, events, async/await, live search demo |
| Contact | `pages/contact.html` | Contact form, location map, campus details |
| References | `pages/references.html` | 18 Harvard-style references |
| About | `pages/about.html` | Portfolio details and assessment information |

---

## Technologies Used

- **HTML5** — Semantic markup, accessibility (ARIA), forms, metadata
- **CSS3** — Custom properties, Flexbox, Grid, animations, media queries
- **Bootstrap 5** — (CDN) used on home page for rubric table and demonstration
- **JavaScript ES6+** — DOM manipulation, events, async/await, array methods, IntersectionObserver
- **No frameworks** — all interactive demos built with vanilla JavaScript

---

## Student Information

| Field | Value |
|-------|-------|
| Name | Sneha Shah |
| Student ID | 250912522 |
| Module | CET138 – Full Stack Development |
| Assessment | Assignment 1 – ePortfolio |
| Weight | 30% of overall module mark |
| Institution | ISMT College Australia |
| Live URL | https://snehaproject09.netlify.app/ |

---

## Submission Checklist

- [x] Home page with navigation
- [x] Section 1: Introduction
- [x] Section 2: What is Full Stack Development? (with code examples)
- [x] Section 3: HTML (with semantic HTML5, forms)
- [x] Section 4: CSS (with Flexbox, Grid, variables, animations)
- [x] Section 5: Bootstrap Framework (with grid and utility classes)
- [x] Section 6: JavaScript (with live interactive demos)
- [x] Contact page with location
- [x] 18 Harvard-formatted references
- [x] Fully responsive design
- [x] Accessible markup (ARIA labels, semantic HTML)
- [x] Replace all name and student ID placeholders
- [x] Add submission date
- [x] Upload to public hosting (Netlify)

---

*© 2026 Sneha Shah — CET138 Full Stack Development ePortfolio*

