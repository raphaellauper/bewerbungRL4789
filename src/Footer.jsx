export default function Footer() {
  return (
    <footer className="text-muted text-xs text-center py-6 border-t border-border bg-surface mt-12 no-print">
      <p className="mb-1">
        © {new Date().getFullYear()} Raphael Lauper – Bewerbungssystem 4789
      </p>
      <p>
        entwickelt & strukturiert mit Fokus auf Verantwortung, Klarheit & Gestaltung
      </p>
    </footer>
  );
}
