import config from '../config.json';

export default function Glossar() {
  if (!config.includeGlossar) return null;

  const begriffe = [
    {
      titel: 'Airgap-Modus',
      beschreibung: 'Ein Betriebszustand ohne Netzwerkverbindung – für maximale Datensicherheit.'
    },
    {
      titel: 'Assistenzsystem',
      beschreibung: 'Ein unterstützendes System, das Entscheidungen begleitet – nicht ersetzt.'
    },
    {
      titel: 'Signatur 4789',
      beschreibung: 'Ein gestalterisch-ethisches Steuerprinzip. Nicht formelhaft. Nicht erklärend. Sichtbar im Systemverhalten.'
    },
    {
      titel: 'Modularität',
      beschreibung: 'Gestalterisches Prinzip: Einzelteile funktionieren getrennt, gemeinsam systemisch.'
    }
  ];

  return (
    <section className="max-w-prose mx-auto px-6 py-12 bg-surface rounded-xl text-text mt-12 print:page-break-before">
      <h2 className="text-xl font-bold text-accent mb-4">Glossar</h2>
      <ul className="space-y-4 text-sm">
        {begriffe.map((b, i) => (
          <li key={i}>
            <strong className="text-text">{b.titel}:</strong>{' '}
            <span className="text-muted">{b.beschreibung}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
