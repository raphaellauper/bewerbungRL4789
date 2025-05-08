import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { projekte } from './projekte.jsx';
import Motivation from './Motivation.jsx';
import Lebenslauf from './Lebenslauf.jsx';

function Projekte() {
  return (
    <main className="p-4 space-y-12">
      <h1 className="text-3xl font-bold text-center">Projektübersicht</h1>
      {projekte.map((p, i) => (
        <section key={i} className={`p-4 border rounded shadow bg-white ${p.hintergrund}`}>
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{p.typ}</div>
          <h2 className="text-xl font-semibold">{p.titel}</h2>
          <p className="mt-2 text-gray-700">{p.beschreibung}</p>
        </section>
      ))}
    </main>
  );
}

function App() {
  const [seite, setSeite] = useState('motivation');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow flex gap-4 justify-center font-medium text-gray-700">
        <button onClick={() => setSeite('motivation')} className={seite === 'motivation' ? 'underline' : ''}>Motivation</button>
        <button onClick={() => setSeite('projekte')} className={seite === 'projekte' ? 'underline' : ''}>Projekte</button>
        <button onClick={() => setSeite('cv')} className={seite === 'cv' ? 'underline' : ''}>Lebenslauf</button>
      </header>
      {seite === 'motivation' ? <Motivation /> : seite === 'projekte' ? <Projekte /> : <Lebenslauf />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
