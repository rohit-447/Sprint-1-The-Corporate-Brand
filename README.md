# Sprint-1-The-Corporate-Brand-
A modern, responsive corporate landing page built with React, Tailwind CSS, and JavaScript, featuring glassmorphism navigation, light/dark theme switching, responsive layouts, interactive service cards, and performance-focused UI design.

## Live Demo

🌐 **[View Live Website](https://sprint-1-the-corporate-brand.vercel.app/)**

## Tech Stack

- **React 19** — Component-based UI development
- **JavaScript (ES6+)** — Application logic and interactions
- **Tailwind CSS** — Responsive styling and UI design
- **Vite** — Development server and production build tooling
- **React Icons** — Interface icons
- **Vercel** — Deployment and hosting

## Features

- Fully responsive desktop, tablet, and mobile layouts
- Sticky navigation bar
- Glassmorphism navbar using `backdrop-filter`
- Responsive mobile hamburger menu
- Light/Dark theme switcher
- Automatic system theme detection
- Persistent theme preference using `localStorage`
- Responsive hero section with CTA buttons
- Interactive service cards with hover elevation
- About section with company statistics
- Contact call-to-action section
- Responsive footer with social links
- Smooth section navigation
- Keyboard-accessible interactive controls
- Reduced-motion support
- SEO-friendly page metadata
- Performance-focused DOM structure

## Sections

### Hero
Introduces Prodesk IT with a high-impact headline, supporting description, and primary calls to action.

### Services
Highlights the three core services:

- Search / SEO
- Web Development
- Marketing

Service cards include hover elevation and interactive visual feedback.

### About
Communicates the company's positioning, approach, and key business statistics.

### Contact
Provides a prominent call-to-action section for starting a conversation.

### Footer
Contains company branding, social links, and copyright information.

## Theme System

The application supports both **Light** and **Dark** themes.

The initial theme follows the user's system preference. A manually selected theme is stored using `localStorage`, allowing the preference to persist between visits.

## Glassmorphism Navigation

The sticky navbar uses a frosted-glass effect with:

```css
backdrop-filter: blur(...);
-webkit-backdrop-filter: blur(...);
```

A semi-transparent background, border, blur, and subtle shadow create the glassmorphism effect while maintaining readability.

## Project Structure

```text
The-Corporate-Brand/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Card/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── Heading/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

```bash
git clone https://github.com/rohit-447/The-Corporate-Brand.git
cd The-Corporate-Brand
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The application is hosted on **Vercel**.

**Production URL:**  
https://sprint-1-the-corporate-brand.vercel.app/

## Performance & Accessibility

The project is structured with Lighthouse optimization in mind, including:

- Semantic HTML
- Accessible navigation controls
- Keyboard focus states
- Descriptive image `alt` attributes
- Responsive layouts
- Reduced-motion support
- Minimal unnecessary dependencies
- Efficient React component structure
- Optimized production builds

The project targets excellent **Performance, Accessibility, Best Practices, and SEO** Lighthouse scores.