import React, { useRef, useEffect } from "react";

/**
 * @param {{code: string, setCode: (s:string)=>void, className?:string}} props
 */
export default function CodeEditor({ code, setCode, className = "" }) {
  const taRef = useRef(null);

  useEffect(() => {
    // keep textarea height controlled by CSS; ensure ref exists
    if (!taRef.current) return;
  }, []);

  const handleKeyDown = /** @param {React.KeyboardEvent<HTMLTextAreaElement>} e */ (e) => {
  const ta = /** @type {HTMLTextAreaElement|null} */ (taRef.current);
  if (!ta) return;

    // Insert tab character when Tab is pressed
    if (e.key === "Tab") {
      e.preventDefault();
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const value = ta.value;
      const tab = "\t";
      const newValue = value.substring(0, start) + tab + value.substring(end);
      setCode(newValue);

      // move caret
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + tab.length;
      });
    }
  };

  const lines = code.split("\n").length;

  return (
    <div className={`relative flex rounded-md border border-gray-700 overflow-hidden ${className}`}>
      <div className="bg-gray-800 text-gray-400 text-sm py-2 px-2 select-none" style={{ width: 48 }}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="leading-6 text-right px-1">{i + 1}</div>
        ))}
      </div>
      <textarea
        ref={taRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 p-4 h-64 resize-none bg-gray-900 text-white font-mono outline-none"
      />
    </div>
  );
}
