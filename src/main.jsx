import Footer from './Footer.jsx';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Projekte from './Projekte.jsx';
import Motivation from './Motivation.jsx';
import Lebenslauf from './Lebenslauf.jsx';
import Glossar from './Glossar.jsx';
import PdfExportButton from './PdfExportButton.jsx';

function App() {
  const [seite, setSeite] = useState('motivation');

  return (
    <div className="min-h-screen bg-base text-text font-sans">
      <PdfExportButton />

      <header className="bg-surface text-text border-b border-border sticky top-0 z-50 shadow-sm px-6 py-4">
        <nav className="flex justify-center gap-6 text-sm font-medium">
          <button
            onClick={() => setSeite('motivation')}
            className={seite === 'motivation' ? 'underline underline-offset-4' : ''}
          >
            Motivation
          </button>
          <button
            onClick={() => setSeite('projekte')}
            className={seite === 'projekte' ? 'underline underline-offset-4' : ''}
          >
            Projekte
          </button>
          <button
            onClick={() => setSeite('cv')}
            className={seite === 'cv' ? 'underline underline-offset-4' : ''}
          >
            Lebenslauf
          </button>
        </nav>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-8 py-6">
        <Footer />
        <div className="md:col-start-2 md:col-span-10">
          {seite === 'motivation' && <Motivation />}
          {seite === 'projekte' && <Projekte />}
          {seite === 'cv' && <Lebenslauf />}
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
