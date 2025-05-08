export default function PdfExportButton() {
  const exportieren = () => {
    if (window.exportBewerbungAsPdf) {
      window.exportBewerbungAsPdf('body');
    } else {
      alert("PDF-Exportfunktion ist nicht verfügbar. Prüfe html2pdf.custom.js");
    }
  };

  return (
    <button
      onClick={exportieren}
      className="no-print fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow"
    >
      Dossier speichern
    </button>
  );
}
