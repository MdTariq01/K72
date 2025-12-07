# K72 — Portfolio / Agency Site

## Project

- **Description:** React + Vite single-page portfolio/agency site that uses GSAP animations and Tailwind for styling. Serves images, fonts and a hero video used across the Home/Agence/Projects pages.
- **Status:** Active development (dev server via `npm run dev`, production build via `npm run build`).

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Animation:** GSAP
- **Bundler / Dev Server:** Vite
- **Hosting (recommended):** Vercel, Netlify, or any static host that serves `dist`/`build`.

## Repository Structure (key files)
- **`index.html`**: App entry / HTML template.
- **`src/main.jsx`**: React entry.
- **`src/pages/`**: Page components (`Home.jsx`, `Agence.jsx`, `Projects.jsx`, `Contact.jsx`).
- **`src/components/`**: Reusable components (video, navigation, footer, project cards).
- **`src/assets/`**: Images, fonts and `video.mp4` (all imported from source).
- **`src/index.css`**: Tailwind import and `@font-face` rules (loads fonts from `src/assets/Fonts`).

## Important notes about assets

- Files inside `src/assets` are imported in JS/CSS so Vite will bundle and fingerprint them at build-time. Example:
  - Import images in components/pages:
    - `import thumbnail1 from '../assets/Images/thumbnail1.jpg'`
  - Import video:
    - `import videoSrc from '../../assets/video.mp4'`
  - In CSS `@font-face` from `src/index.css`:
    - `src: url('./assets/Fonts/Lausanne-300.woff2');`
- If you prefer using `public/` for static assets, reference them via absolute URLs (root) like `/assets/...`. Note: files in `public` are served as-is and are NOT fingerprinted.

## Local development
- **Install dependencies:**
```powershell
npm install
```
- **Run dev server (hot reload):**
```powershell
npm run dev
```
- **Build for production:**
```powershell
npm run build
```
- **Serve production build locally (test before deploying):**
```powershell
npx serve dist
# or
npx http-server dist -p 5000
```

## Commit / deploy example
- Commit changes:
```powershell
git add .
git commit -m "Use src/assets imports for images, fonts and video; fix paths"
git push origin main
```
- Deploy to Vercel (connect repo or push to branch linked to Vercel).

## Developer tips
- Prefer importing static assets from `src` when you want Vite to hash/optimize them.
- Use `playsInline` and `muted` on autoplay videos for mobile compatibility:
  - `<video muted playsInline autoPlay loop>`.
- Use `preload="auto"` only when necessary to prioritize bandwidth.

## Contributing
- **Bug reports:** Open an issue with reproduction steps and browser console/network screenshots.
- **Pull requests:** Keep changes focused and update `src/assets` imports if you add/move files.

---
Happy Coding 😊