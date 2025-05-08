import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import PdfExportButton from './PdfExportButton';

function App() {
  const [seite, setSeite] = useState('motivation');

  return (
    <div className="p-6 max-w-3xl mx-auto leading-relaxed">
      <PdfExportButton />
      <header className="mb-6 space-x-4 text-center">
        <button onClick={() => setSeite('motivation')} className={seite === 'motivation' ? 'font-bold underline' : ''}>Motivation</button>
        <button onClick={() => setSeite('projekte')} className={seite === 'projekte' ? 'font-bold underline' : ''}>Projekte</button>
        <button onClick={() => setSeite('cv')} className={seite === 'cv' ? 'font-bold underline' : ''}>Lebenslauf</button>
      </header>
      {seite === 'motivation' && <section><h1 className="text-2xl font-bold mb-4">Motivationsschreiben</h1><p>Diese Bewerbung ist mehr als ein PDF – sie ist ein System.</p></section>}
      {seite === 'projekte' && <section><h1 className="text-2xl font-bold mb-4">Projekte</h1><p>Modular, lokal, adaptiv – vom Robo-Fisch bis Wastetainment.</p></section>}
      {seite === 'cv' && <section><h1 className="text-2xl font-bold mb-4">Lebenslauf</h1><p>Raphael Lauper, Produktdesigner – systemisch, strukturiert, erfahren.</p></section>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
