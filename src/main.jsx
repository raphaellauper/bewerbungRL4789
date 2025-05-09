import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Projekte from './Projekte.jsx';
import Motivation from './Motivation.jsx';
import Lebenslauf from './Lebenslauf.jsx';
import PdfExportButton from './PdfExportButton.jsx';

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
