# Tarteeb Android (Capacitor)

This repository is configured to package the **original Tarteeb web app** into Android using Capacitor while keeping the original file layout in the project root.

## Required original app content

The Android build is intentionally blocked unless these original sources exist in the repository root:

- `index.html`
- `app.js`
- `styles.css`
- `data-quran.js`
- `data-mafatih.js`
- `assets/` (non-empty directory with original app assets such as audio/images/branding)

## Important status

At the moment, this repository snapshot does **not** contain the required original Tarteeb source files above.
Because of that, the full app behavior cannot be validated yet and Android sync/open is intentionally prevented.

## Setup steps (after original files are added)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Verify original Tarteeb files are present:
   ```bash
   npm run check:webfiles
   ```
3. Add Android platform (first time only):
   ```bash
   npx cap add android
   ```
4. Sync updates to Android:
   ```bash
   npm run cap:sync
   ```
5. Open Android Studio project:
   ```bash
   npm run cap:open
   ```

## Why `webDir` is `.`

Capacitor is configured to load web assets directly from the project root so the app runs from the same original files without redesigning or replacing the Tarteeb UI/content.
