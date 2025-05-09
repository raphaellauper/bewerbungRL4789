import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function PdfExportButton() {
  const [generiert, setGeneriert] = useState(false);

  async function exportDossier() {
    setGeneriert(true);

    const dossierElement = document.getElementById('dossier');

    const opt = {
      margin: 0.6,
      filename: 'bewerbung_dossier.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    try {
      const pdfBlob = await window.html2pdf().set(opt).from(dossierElement).outputPdf('blob');

      const zip = new JSZip();
      zip.file('bewerbung_dossier.pdf', pdfBlob);

      const response = await fetch('/diplome/Diplome_RL.pdf');
      const diplomaBlob = await response.blob();
      zip.file('Diplome_RL.pdf', diplomaBlob);

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, 'bewerbung_raphael_lauper.zip');
    } catch (error) {
      alert('Fehler beim Erstellen des Dossiers.');
      console.error(error);
    } finally {
      setTimeout(() => setGeneriert(false), 2500);
    }
  }

  return (
    <button
      onClick={exportDossier}
      className={`no-print fixed bottom-6 right-6 z-50 bg-accent text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-highlight transition-all ${
        generiert ? 'opacity-60 pointer-events-none' : ''
      }`}
    >
      {generiert ? 'Wird erstellt...' : 'Dossier speichern'}
    </button>
  );
}
