# CHERENKOV — Pure React + Vite + Tailwind

This version is structured as a real React application instead of one giant
page component.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## React structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── Problem.jsx
│   ├── Architecture.jsx
│   ├── DetectionPipeline.jsx
│   ├── AIEngine.jsx
│   ├── IncidentResponse.jsx
│   ├── Dashboard.jsx
│   ├── FooterCTA.jsx
│   ├── Eyebrow.jsx
│   └── SectionHead.jsx
├── data/
│   └── content.js
└── hooks/
    ├── useTheme.js
    └── useReveal.js
```

All repeated UI is componentized and data-driven.

## Logo

Put your logo here:

```text
public/assets/logo.png
```

Then replace the placeholder `C` in `Header.jsx` with:

```jsx
<img src="/assets/logo.png" alt="CHERENKOV logo" />
```

## Tailwind

This uses Tailwind CSS v4 through `@tailwindcss/vite`.
