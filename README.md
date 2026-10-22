# MedCap AI — Frontend

React + Vite frontend for MedCap, an AI tool that reads medical reports and returns a plain-language
summary plus a diet, lifestyle and precaution plan.

## Stack

- React 18, React Router 6, Vite 5
- Tailwind CSS 3 with a small design system in `tailwind.config.js` and `src/index.css`
- Self-hosted fonts via Fontsource: Fraunces (display), Figtree (body), JetBrains Mono (labels)
- Icons from `lucide-react`; HTTP via `axios`

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

The backend URL lives in `src/components/server_url.jsx` (defaults to `http://localhost:5555`).

## Structure

```
src/
  pages/             Homepage, Login, Signup, Report (form), HealthcareReport (plan), UserDashboard
  components/
    home/            Hero and homepage sections
    ui/              Shared primitives: PageShell, AuthLayout, Logo, Avatar, EcgLine, RichValue
    Header, Footer, Modal, LoadingPopup, AnalysisHistory, EditProfileForm, UserDetails, ErrorBoundary
  lib/session.js     Reads/clears the localStorage session (accessToken, user, loggedIn)
  utils/             Date formatting and value helpers
```

## Design notes

- Palette: warm paper background, deep ink text, MedCap magenta as the single accent. Tokens are
  Tailwind colours (`paper`, `ink`, `line`, `brand`, `sage`, `amber`, `rose`, `violet`).
- Reusable classes in `index.css`: `btn-primary`, `btn-brand`, `btn-ghost`, `btn-danger`, `card`,
  `input`, `label`, `eyebrow`, `chart-grid`, `grain`.
- The ECG trace (`components/ui/EcgLine.jsx`) is the recurring visual motif.
- Animations respect `prefers-reduced-motion`.
