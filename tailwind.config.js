module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: '#1f1f22',       // Seitenhintergrund
        surface: '#2f333a',    // Karten, Content-Flächen
        border: '#3b3f46',     // Linien, Ränder
        text: '#e5e5e5',       // Fließtext
        muted: '#a1a1aa',      // Labels, Hinweise
        accent: '#16a34a',     // Aktionen (z. B. Button)
        highlight: '#4ade80',  // Sekundäraktion
        error: '#ef4444'       // Validierung, Warnungen
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        prose: '65ch'
      }
    },
  },
  plugins: [],
};
