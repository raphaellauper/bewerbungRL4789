import { useState } from 'react';

export default function PdfExportButton() {
  const [generiert, setGeneriert] = useState(false);

  const exportieren = () => {
    if (window.exportBewerbungAsPdf) {
      setGeneriert(true);
      setTimeout(() => {
        window.exportBewerbungAsPdf('body');
        setTimeout(() => setGeneriert(false), 3000);
      }, 500);
    } else {
      alert('PDF-Exportfunktion nicht verfügbar.');
    }
  };

  return (
    <button
      onClick={exportieren}
      className={`no-print fixed bottom-6 right-6 z-50 bg-accent text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-highlight transition-all ${
        generiert ? 'opacity-60 pointer-events-none' : ''
      }`}
    >
      {generiert ? 'Wird erstellt...' : 'Dossier speichern'}
    </button>
  );
}
