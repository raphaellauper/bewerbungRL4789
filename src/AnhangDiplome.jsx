import config from '../config.json';

export default function AnhangDiplome() {
  if (!config.includeDiplome) return null;

  const dateien = [
    {
      titel: 'Bachelor FHNW',
      pfad: '/diplome/bachelor_fhnw.pdf'
    },
    {
      titel: 'PH Bern (Zwischenbescheinigung)',
      pfad: '/diplome/zwischenbescheinigung_phbern.pdf'
    },
    {
      titel: 'Arbeitszeugnisse',
      pfad: '/diplome/arbeitszeugnis_isa.pdf'
    }
  ];

  return (
    <section className="max-w-prose mx-auto px-6 py-12 bg-white/90 rounded shadow mt-12 leading-relaxed">
      <h2 className="text-xl font-bold text-primary mb-4">Angehängte Nachweise</h2>
      <ul className="list-disc list-inside space-y-2 text-blue-700 underline">
        {dateien.map((d, i) => (
          <li key={i}>
            <a href={d.pfad} target="_blank" rel="noopener noreferrer">{d.titel}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
