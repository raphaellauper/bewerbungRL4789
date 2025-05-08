module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",      // Graphitblau für Titel, Hervorhebungen
        accent: "#16a34a",       // Fokusgrün für Icons, Kategorien
        base: "#f9fafb",         // Papierähnlich hell für Hintergrund
        text: "#111827",         // Fließtext fast Schwarz
        grau: "#e5e7eb"          // Flächenhelligkeit
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        prose: '65ch' // optimal für Lesetext
      }
    },
  },
  plugins: [],
};
