export default function Lebenslauf() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 text-base text-gray-800 bg-white/80 rounded shadow leading-relaxed space-y-8">
      <h1 className="text-3xl font-bold text-primary">Lebenslauf</h1>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Persönliches</h2>
        <p>Raphael Lauper<br />Geboren am 4. Juli 1989<br />Region Bern, Schweiz</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Ausbildung</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>FHNW Basel, HyperWerk – Bachelor in Produktdesign</li>
          <li>Mikrotechnik-Studium (ETH-nah, nicht abgeschlossen)</li>
          <li>PH Bern – Lehramt Sekundarstufe I (nicht abgeschlossen)</li>
          <li>Vorkurs Gestaltung – SfGBB Bern</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Berufserfahrung</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Kurierdienste (2008–2022) – MeierExpress, face ag</li>
          <li>Projektarbeit: SBB, PostFinance, ISA AG (Design, Kommunikation, Interface)</li>
          <li>Unterricht: Sek I, Integrationsklassen, Coaching</li>
          <li>Freiberufliche Designprojekte (seit 2015)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Technische & gestalterische Kompetenzen</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>3D/CAD: Rhino, Fusion 360, AutoCAD, Inventor</li>
          <li>Code & Web: React, Tailwind, Git, JSON, Markdown</li>
          <li>Hardware: Arduino, Raspberry Pi, Sensorik, Prototyping</li>
          <li>Konzeption: Systems Design, Gestaltungsmethodik, 4789-Denken</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-accent mb-2">Sprachen</h2>
        <ul className="list-disc list-inside">
          <li>Deutsch – Muttersprache</li>
          <li>Französisch – bilingual</li>
          <li>Englisch – fliessend</li>
        </ul>
      </div>
    </section>
  );
}
