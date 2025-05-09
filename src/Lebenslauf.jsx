import config from './config.js';

export default function Lebenslauf() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-base text-text bg-surface rounded-xl shadow leading-relaxed space-y-10">

      <div className="flex justify-between items-start print:hidden">
        <h1 className="text-3xl font-bold text-primary">Lebenslauf</h1>
        <div className="relative">
          <img
            src="/img/file_000000003af0620ab5e1b93ef8535e67~2.png"
            alt="Symbolisches Bewerbungsfoto"
            title="Generiertes Bild – mehr im Gespräch"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-md cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              alert(
                'Hinweis: Dieses Bild wurde generiert. Persönliche Begegnung ersetzt kein Pixel. Mehr gerne im Gespräch.'
              )
            }
          />
          <span className="absolute top-0 right-0 text-xs text-muted pr-1 pt-1 pointer-events-none">[i]</span>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Persönliches</h2>
        <p>
    Raphael Lauper<br />
    Geboren am 4. Juli 1989<br />
    {config.adresse}<br />
    Telefon: 079 235 68 89<br />
    Mail: laurel.paraphe@gmail.com
  </p>
</div>
      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Ausbildung</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>2011–2014: FHNW Basel, HyperWerk – Bachelor in Produktdesign</li>
          <li>2014–2015: BFH Technik & Informatik – Mikrotechnik (ohne Abschluss)</li>
          <li>2020–2021: PH Bern – Sekundarstufe I (Zwischenlösung während Corona)</li>
          <li>2009–2010: Vorkurs Gestaltung – SfGBB Bern</li>
          <li>2008–2009: Rekrutenschule als Füsilier, Chamblon/Bure</li>
          <li>2004–2008: Gymnasium Hofwil, Münchenbuchsee</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Berufliche Stationen & Praktika</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>2008–2022: Kurierdienste (MeierExpress, face ag, selbstständig)</li>
          <li>2015: Praktikum Cellwar GmbH – Technisches Industriedesign</li>
          <li>2013: Praktikum Wettstein Kältetechnik – Mikrotechnische Entwicklung</li>
          <li>2010: Praktikum Schmutz Architekten – CAD & Visualisierung</li>
          <li>2017–2020: Projektarbeit für SBB, PostFinance, ISA AG</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Technische & gestalterische Kompetenzen</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>3D/CAD: Rhino, Fusion 360, AutoCAD, Inventor</li>
          <li>Web & Code: React, Tailwind, Git, Markdown, JSON</li>
          <li>Hardware: Arduino, Raspberry Pi, Sensorik, Prototyping</li>
          <li>Design: Systemdenken, Interface-Logik, gestalterische Verantwortung</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Sprachen</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Deutsch – Muttersprache</li>
          <li>Französisch – bilingual</li>
          <li>Englisch – fliessend</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Interessen & Aktivitäten</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Gestaltung & freie Projekte</li>
          <li>Wandern & Skateboard fahren</li>
          <li>Musik machen & hören</li>
          <li>Zeichnen, Skizzieren, Coden</li>
          <li>Zeit mit Freund:innen & Gespräche</li>
        </ul>
      </div>

    </section>
  );
}
