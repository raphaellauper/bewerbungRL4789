export default function PdfExportButton() {
  function exportPDF() {
    const opt = {
      margin: 0.5,
      filename: 'bewerbung_dossier.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    window.html2pdf().set(opt).from(document.body).save();
  }

  return (
    <button onClick={exportPDF} className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow">
      Dossier speichern
    </button>
  );
}
