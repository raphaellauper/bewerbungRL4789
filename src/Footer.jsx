import config from './config.js';

export default function Footer() {
  return (
    <footer className="text-muted text-xs text-center py-6 border-t border-border bg-base mt-12 print:pt-12">
      <p className="mb-1">
        © {config.jahr} Raphael Lauper
      </p>
      <p className="mb-1">
        {config.adresse}
      </p>
      <p>
        Mail:{' '}
        <a
          href={`mailto:${config.mail}`}
          className="text-accent hover:underline"
        >
          {config.mail}
        </a>
      </p>
    </footer>
  );
}
