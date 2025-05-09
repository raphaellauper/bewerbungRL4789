export default function Footer() {
  return (
    <footer className="text-muted text-xs text-center py-6 border-t border-border bg-surface mt-12 no-print">
      <p className="mb-1">
        © {new Date().getFullYear()} Raphael Lauper
      </p>
      <p className="mb-2">
        Entwickelt & strukturiert mit Fokus auf Verantwortung, Klarheit & Gestaltung
      </p>
      <p>
        Bahnhofstrasse 56, 3127 Mühlethurnen<br />
        <a
          href="mailto:laurelparaphe@gmail.com"
          className="text-accent hover:underline"
        >
          laurelparaphe@gmail.com
        </a>
      </p>
    </footer>
  );
}
