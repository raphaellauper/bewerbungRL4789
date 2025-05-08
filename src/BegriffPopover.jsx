import React, { useState } from 'react';

export default function BegriffPopover({ begriff, erklaerung }) {
  const [sichtbar, setSichtbar] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setSichtbar(!sichtbar)}
        className="underline decoration-dotted cursor-help text-primary"
      >
        {begriff}
      </button>
      {sichtbar && (
        <div className="absolute z-50 mt-2 p-3 bg-white text-sm text-gray-800 border border-gray-300 rounded shadow max-w-sm w-64">
          <div className="flex justify-between mb-2">
            <strong>{begriff}</strong>
            <button onClick={() => setSichtbar(false)} className="text-gray-400 text-xs">×</button>
          </div>
          <p className="leading-snug">{erklaerung}</p>
        </div>
      )}
    </span>
  );
}
