import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Motivation from './Motivation.jsx';
import Projekte from './Projekte.jsx';
import Lebenslauf from './Lebenslauf.jsx';
import Glossar from './Glossar.jsx';
import Footer from './Footer.jsx';
import PdfExportButton from './PdfExportButton.jsx';

function App() {
  const [seite, setSeite] = useState('motivation');

  return (
    <div className="min-h-screen flex flex-col bg-base text-text font-sans">
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
            onClick={() => setSeite('cv')}
            className={seite === 'cv' ? 'underline underline-offset-4' : ''}
          >
            Lebenslauf
          </button>
          <button
            onClick={() => setSeite('projekte')}
            className={seite === 'projekte' ? 'underline underline-offset-4' : ''}
          >
            Projekte
          </button>
        </nav>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-8 py-6">
        <div className="md:col-start-2 md:col-span-10 space-y-8">
          {seite === 'projekte' && <Projekte />}
          {seite === 'cv' && (
            <>
              <Lebenslauf />
              <Glossar />
            </>
          )}
          {seite === 'motivation' && <Motivation />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
