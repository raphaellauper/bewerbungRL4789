export default function Lebenslauf() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-base text-text bg-surface rounded-xl shadow leading-relaxed space-y-10">
      <h1 className="text-3xl font-bold text-primary">Lebenslauf</h1>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Persönliches</h2>
        <p>Raphael Lauper<br />Geboren am 4. Juli 1989<br />Region Bern, Schweiz</p>
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

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Ausbildung</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>2011–2014: HGK-FHNW Basel, Bachelor in Produktdesign</li>
          <li>2014–2018: BFH-TI, Mikrotechnik (weiterführende Kurse)</li>
          <li>2020–2021: PH Bern – Sekundarstufe I (Zwischenlösung während Corona)</li>
          <li>2009–2010: Vorkurs Gestaltung – SfGBB Bern</li>
          </ul>
          <li>2008-2009: Rekrutenschule als Füsilier, Chamblon/Bure</li>
          <li>2004-2008: Gymnasium Hofwil, Münchenbuchsee</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Berufliche Stationen & Praktika</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>2008–2022: Verschiedene Kurierdienste (MeierExpress, face ag, selbstständig)</li>
          <li>2015: Praktikum Cellwar GmbH – Technisches Industriedesign</li>
          <li>2013: Praktikum Wettstein Kältetechnik – Ingenieurshilfe Mikrotechnik</li>
          <li>2010: Praktikum Schmutz Architekten – CAD & Visualisierung</li>
          <li>2015–2020: Projektarbeiten u.a. für SBB, PostFinance, Kuhn Rikon und geheimhaltungspflichtige Organisationen</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Technische & gestalterische Kompetenzen</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>3D/CAD: Rhino, Fusion 360, AutoCAD, Inventor</li>
          <li>Web & Code: React, Tailwind, Git, Markdown, JSON</li>
          <li>Hardware & Sensorik: Arduino, Raspberry Pi, diverse 3D-Drucker (ab MakerBot)</li>
          <li>Designverständnis: Systemgestaltung, Visualisierung, Prototyping</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Sprachen</h2>
        <ul className="list-disc list-inside">
          <li>Deutsch – Muttersprache</li>
          <li>Französisch – bilingual aufgewachsen</li>
          <li>Englisch – fliessend</li>
          <li>Japanisch – C1</li>
          <li>Schwedisch lernend seit Sommer 2024</li>
        </ul>
      </div>
    </section>
  );
}
