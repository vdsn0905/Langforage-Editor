import { useState, useEffect } from "react";
import { compiler, runner } from "../Compiler";
import { Link } from "react-router-dom";
import Rendering from "./Rendering";
import CodeEditor from "./CodeEditor";

function SplashScreen() {
  return <Rendering />;
}

export default function Ide() {
  const [code, setCode] = useState(`// Write your Hinglish code here`);
  const [output, setOutput] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const run = () => {
    try {
      const compiledCode = compiler(code);
      runner(compiledCode, setOutput);
    } catch (err) {
      const message = err && typeof err === "object" && "message" in err ? err.message : String(err);
      setOutput("⚠️ Compilation error: " + message);
    }
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 font-mono text-white">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            LangForage Editor
          </h2>

          <p className="mb-4 text-white">
            New to Platform{" "}
            <Link
              to="/course"
              className="text-blue-500 underline hover:text-blue-300"
            >
              Start Learning
            </Link>
          </p>
          <p className="text-right">
            <button
              onClick={handleCopy}
              className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white transition"
            >
              {copied ? "✅ Copied!" : "Copy"}
            </button>
          </p>
          <CodeEditor
            code={code}
            setCode={setCode}
            className="mt-2 w-full"
          />

          <button
            onClick={run}
            className="mt-3 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Run
          </button>

          <h3 className="text-lg mt-3 font-semibold text-white">Output:</h3>
          <pre className="w-full p-4 mt-3 bg-gray-900 border border-gray-700 text-green-400 rounded shadow-inner whitespace-pre-wrap overflow-auto">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
