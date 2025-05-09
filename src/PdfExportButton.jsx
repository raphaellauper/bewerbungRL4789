import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function PdfExportButton() {
  const [generiert, setGeneriert] = useState(false);

  async function exportiereDossier() {
    const dossier = document.getElementById('dossier');

    if (!dossier) {
      alert('Dossier-Inhalt nicht gefunden.');
      return;
    }

    setGeneriert(true);

    try {
      const opt = {
        margin: 0.6,
        filename: 'bewerbung_dossier.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      const pdfBlob = await window.html2pdf().set(opt).from(dossier).outputPdf('blob');

      const zip = new JSZip();
      zip.file('bewerbung_dossier.pdf', pdfBlob);

      // Versuche Anhang zu laden
      let anhangLadbar = false;
      try {
        const res = await fetch('/diplome/Diplome_RL.pdf');
        if (res.ok) {
          const blob = await res.blob();
          zip.file('Diplome_RL.pdf', blob);
          anhangLadbar = true;
        }
      } catch {
        // Ignorieren, wenn nicht verfügbar
      }

      const finalZip = await zip.generateAsync({ type: 'blob' });
      saveAs(finalZip, 'bewerbung_raphael_lauper.zip');

      if (!anhangLadbar) {
        alert('Hinweis: Anhang (Diplome) konnte nicht geladen werden.');
      }
    } catch (err) {
      console.error(err);
      alert('Fehler beim Erstellen des Dossiers.');
    } finally {
      setTimeout(() => setGeneriert(false), 2000);
    }
  }

  return (false);
    /*
    <button
      onClick={exportiereDossier}
      className={`no-print fixed bottom-6 right-6 z-50 bg-accent text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-highlight transition-all ${
        generiert ? 'opacity-60 pointer-events-none' : ''
      }`}
    >
      {generiert ? 'Wird erstellt...' : 'Dossier speichern'}
    </button>
  );*/
}
