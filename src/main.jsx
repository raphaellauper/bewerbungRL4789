import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import PdfExportButton from './PdfExportButton.jsx';
import Motivation from './Motivation.jsx';
import Lebenslauf from './Lebenslauf.jsx';
import Projekte from './projekte.js';

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
      {seite === 'motivation' && <Motivation />}
      {seite === 'projekte' && <Projekte />}
      {seite === 'cv' && <Lebenslauf />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
