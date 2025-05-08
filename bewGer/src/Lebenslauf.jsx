
export default function Lebenslauf() {
  return (
    <section className="p-8 max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
      <h1 className="text-3xl font-bold mb-6">Lebenslauf</h1>
      <h2 className="text-xl font-semibold">Persönliche Angaben</h2>
      <p>Raphael Lauper<br />Geboren am 4. Juli 1989<br />Region Bern</p>
      <h2 className="text-xl font-semibold">Ausbildung</h2>
      <ul className="list-disc ml-6">
        <li>Produktdesign FHNW, HyperWerk</li>
        <li>Mikrotechnikstudium ETH-nah</li>
        <li>PH Bern Sek I (unvollständig)</li>
      </ul>
      <h2 className="text-xl font-semibold">Erfahrung</h2>
      <ul className="list-disc ml-6">
        <li>Kurierdienste, technische Projekte (SBB, PostFinance, ISA AG)</li>
        <li>Unterricht Sek I & Integrationsklassen</li>
      </ul>
    </section>
  );
}
