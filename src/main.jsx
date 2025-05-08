import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { projekte } from './projekte';
import Motivation from './Motivation';
import Lebenslauf from './Lebenslauf';
import PdfExportButton from './PdfExportButton';
import BegriffPopover from './BegriffPopover';

function Projekte() {
  return (
    <main className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-primary">Projektübersicht</h1>
      {projekte.map((p, i) => (
        <section
          key={i}
          className={`border-l-4 pl-4 border-accent bg-white/90 p-4 rounded shadow-sm`}
        >
          <div className="text-sm uppercase text-gray-400 font-semibold mb-1">
            {p.typ}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{p.titel}</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">{p.beschreibung}</p>
          {p.erlaeuterung && (
            <BegriffPopover begriff={p.begriff} erklaerung={p.erlaeuterung} />
          )}
        </section>
      ))}
    </main>
  );
}

function App() {
  const [seite, setSeite] = useState('motivation');

  return (
    <div className="min-h-screen bg-base text-text font-sans">
      <PdfExportButton />
      <header className="bg-white shadow px-6 py-4 flex justify-center gap-6 sticky top-0 z-40">
        <button
          onClick={() => setSeite('motivation')}
          className={seite === 'motivation' ? 'font-bold underline' : ''}
        >
          Motivation
        </button>
        <button
          onClick={() => setSeite('projekte')}
          className={seite === 'projekte' ? 'font-bold underline' : ''}
        >
          Projekte
        </button>
        <button
          onClick={() => setSeite('cv')}
          className={seite === 'cv' ? 'font-bold underline' : ''}
        >
          Lebenslauf
        </button>
      </header>

      <div className="p-6">
        {seite === 'motivation' && <Motivation />}
        {seite === 'projekte' && <Projekte />}
        {seite === 'cv' && <Lebenslauf />}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
