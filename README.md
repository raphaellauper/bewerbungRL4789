# Bewerbungssystem – Raphael Lauper (Version 4789)

Dieses Projekt ist eine modulare, adaptive und ethisch durchdachte Online-/Offline-Bewerbung.  
Es wurde gestaltet, geschrieben und strukturiert auf Basis des 4789-Prinzips:

- **4** = Korrektheit
- **7** = Selbstreflexion
- **8** = Lernfähigkeit
- **9** = Verantwortung

## Inhalte

- **Motivationsschreiben:** `src/Motivation.jsx`
- **Lebenslauf:** `src/Lebenslauf.jsx`
- **Projekte:** `src/projekte.js`
- **PDF-Export (lokal, offline):** `html2pdf.custom.js` + `PdfExportButton.jsx`
- **Designsteuerung:** `tailwind.config.js` + `index.css`
- **Zentrale Eingabe:** `config.json`

## Verwendung

### Lokale Vorschau starten

```bash
npm install
VITE_FS_WATCHER_POLLING=true npm run dev -- --host
