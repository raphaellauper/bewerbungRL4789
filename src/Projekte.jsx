import React from 'react';
import BegriffPopover from './BegriffPopover';

const projekte = [
  {
    titel: "Aarulon.1 – Vertrauenswürdige KI",
    typ: "Eigenentwicklung",
    beschreibung: "Ein vollständig lokaler, modularer KI-Assistent mit Sprachausgabe, Offlinebetrieb und ethischer Signaturlogik (4789). Erkennt Kontexte, speichert lokal und agiert als digitaler Begleiter.",
    begriff: "Signatur 4789",
    erlaeuterung: "Ein ethisches Steuerprinzip für Assistenzsysteme: 4 = Korrektheit, 7 = Selbstreflexion, 8 = Lernfähigkeit, 9 = Verantwortung.",
    bild: "/img/aarulon.jpg",
    farbe: "primary",
    vertraulich: false
  },
  {
    titel: "Fischerei-App 2.0",
    typ: "Eigenentwicklung",
    beschreibung: "Kontextsensitive App zur waidmännischen Fischerei. Sensorik, Schonzeitdaten, Airgap-Modus und ethisch begründete Entscheidungshilfen.",
    begriff: "Airgap-Modus",
    erlaeuterung: "Ein Betriebszustand ohne Netzwerkverbindung – maximale Sicherheit für sensible Daten.",
    bild: "/img/fischerei.jpg",
    farbe: "accent",
    vertraulich: false
  },
  {
    titel: "ISA AG – Sicherheitsinterface",
    typ: "Kundennah / vertraulich",
    beschreibung: "Gestaltung eines sicherheitskritischen Interface-Systems. Darstellung abstrahiert. Fokus: visuelle Klarheit, Fehlertoleranz, Systemverständnis.",
    bild: "/img/isa_placeholder.jpg",
    farbe: "grau",
    vertraulich: true
  }
];

export default function Projekte() {
  return (
    <section className="px-6 py-12 space-y-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-8">Projekte</h1>

      {projekte.map((p, i) => (
        <div
          key={i}
          className={`bg-white/90 rounded-xl shadow-md overflow-hidden border-l-4 border-${p.farbe}`}
        >
          {p.bild && !p.vertraulich && (
            <img src={p.bild} alt={p.titel} className="w-full h-auto object-cover max-h-64" />
          )}

          {p.vertraulich && (
            <div className="w-full bg-gray-200 text-gray-600 italic text-sm px-6 py-3">
              Dieses Projekt unterliegt einer Vertraulichkeitspflicht. Darstellung abstrahiert.
            </div>
          )}

          <div className="p-6 space-y-2">
            <div className="text-xs uppercase text-gray-500 tracking-widest font-medium">{p.typ}</div>
            <h2 className="text-xl font-semibold text-gray-800">{p.titel}</h2>
            <p className="text-gray-700 leading-relaxed">{p.beschreibung}</p>
            {p.begriff && (
              <BegriffPopover begriff={p.begriff} erklaerung={p.erlaeuterung} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
