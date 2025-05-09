import React from 'react';
import BegriffPopover from './BegriffPopover';

const projekte = [
  {
    titel: "Aarulon.1 – Vertrauenswürdige KI",
    typ: "Eigenentwicklung",
    beschreibung: "Ein vollständig lokaler, modularer KI-Assistent mit Sprachausgabe, Offlinebetrieb und ethischer Signaturlogik (4789). Erkennt Kontexte, speichert lokal und agiert als digitaler Begleiter.",
    begriff: "Signatur 4789",
    erlaeuterung: "Ein ethisches Steuerprinzip für Assistenzsysteme: 4 = Korrektheit, 7 = Selbstreflexion, 8 = Lernfähigkeit, 9 = Verantwortung.",
    bild: "/img/file_000000006ed861fdb772c9c5d3a8f838.png",
    farbe: "primary",
    vertraulich: false
  },
  {
    titel: "Fischerei-App 2.0",
    typ: "Eigenentwicklung / Zusammenarbeit",
    beschreibung: "Kontextsensitive App zur waidmännischen Fischerei. Sensorik, Schonzeitdaten, Airgap-Modus und ethisch begründete Entscheidungshilfen.",
    begriff: "Airgap-Modus",
    erlaeuterung: "Ein Betriebszustand ohne Netzwerkverbindung – maximale Sicherheit für sensible Daten.",
    bild: "/img/file_00000000e06861fdbd2f687f1d896f0c.png",
    farbe: "accent",
    vertraulich: true
  },
  {
    titel: "ISA AG – Sicherheitsinterface",
    typ: "Kundennah / vertraulich",
    beschreibung: "Gestaltung eines sicherheitskritischen Interface-Systems. Darstellung abstrahiert. Fokus: visuelle Klarheit, Fehlertoleranz, Systemverständnis.",
    bild: "/img/file_000000002a2c61f7803bcc27477e1ca6.png",
    farbe: "grau",
    vertraulich: true
  },
  {
    titel: "Cellwar GmbH – Technisches Industriedesign",
    typ: "Praktikum (2015)",
    beschreibung: "Konzeption und Umsetzung produktnaher Designlösungen. CAD, Materialwahl, Präsentations- und Entwicklungsarbeit.",
    bild: "/img/file_000000002a2c61f7803bcc27477e1ca6.png",
    farbe: "accent",
    vertraulich: false
  },
  {
    titel: "Wettstein Kältetechnik",
    typ: "Praktikum (2013)",
    beschreibung: "Mikrotechnische Entwicklung. Zeichnungen, Materialauswahl und Prozessbegleitung im technischen Umfeld.",
    bild: "/img/wettstein.jpg",
    farbe: "primary",
    vertraulich: false
  },
  {
    titel: "Schmutz Architekten",
    typ: "Praktikum (2010)",
    beschreibung: "CAD-Zeichnungen, 3D-Visualisierungen, Mitarbeit an architektonischen Entwurfskonzepten.",
    bild: "/img/schmutz.jpg",
    farbe: "grau",
    vertraulich: false
  },
  {
    titel: "Freie Projekte & Workshops",
    typ: "Eigeninitiative",
    beschreibung: "Upcycling-Objekte (z. B. Waschmaschinensoundsystem), Holzuhren, Logos, Dosenradio-Workshops, PoS-Prototypen.",
    bild: "/img/file_00000000334c61f79716ef5ab365cff1.png",
    farbe: "accent",
    vertraulich: false
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
