export default function PdfExportButton() {
  function exportPDF() {
    const element = document.body;
    const opt = {
      margin: 0.6,
      filename: 'bewerbung_dossier.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    if (window.html2pdf) {
      window.html2pdf().set(opt).from(element).save();
    } else {
      alert("PDF-Export nicht verfügbar. html2pdf fehlt.");
    }
  }

  return (
    <button
      onClick={exportPDF}
      className="no-print fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow"
    >
      Dossier speichern
    </button>
  );
}
