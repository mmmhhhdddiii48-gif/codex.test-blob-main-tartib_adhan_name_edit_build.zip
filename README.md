# Tarteeb Android (Capacitor)

This repository is configured to package the original Tarteeb web app into Android using Capacitor while keeping the original file layout in the project root.

## Expected original web files

The Android wrapper is designed around these source files/directories in the project root:

- `index.html`
- `app.js`
- `styles.css`
- `data-quran.js`
- `data-mafatih.js`
- `assets/`

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Verify required source files exist:
   ```bash
   npm run check:webfiles
   ```
3. Add Android platform (first time only):
   ```bash
   npx cap add android
   ```
4. Sync after any web/app changes:
   ```bash
   npm run cap:sync
   ```
5. Open in Android Studio:
   ```bash
   npm run cap:open
   ```

## Notes

- `webDir` is set to project root (`.`) so the original Tarteeb files are used directly.
- No framework conversion or UI replacement is required.
