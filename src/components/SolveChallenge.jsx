import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { challenges } from "./challenges";
import { compiler, runner } from "../Compiler";
import Rendering from "./Rendering";

function SplashScreen() {
  return <Rendering />;
}

export default function SolveChallenge() {
  const { level } = useParams();
  const challenge = challenges.find((c) => c.level === Number(level));

  const [showSplash, setShowSplash] = useState(true);
  const [code, setCode] = useState("// Write your Hinglish code here");
  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const run = () => {
    try {
      const compiled = compiler(code);
      runner(compiled, (out) => {
        setOutput(out);
        if (
          challenge.expectedOutput &&
          out.trim() === challenge.expectedOutput.trim()
        ) {
          setResult("✅ Correct output!");
          setSolved(true);
        } else {
          setResult("❌ Wrong output, try again.");
        }
      });
    } catch (err) {
      setOutput("⚠️ Error: " + err.message);
      setResult("❌ Compilation failed.");
    }
  };

  if (!challenge) {
    return <div className="p-6 text-white bg-black">Challenge not found.</div>;
  }
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 font-mono">
          <h2 className="text-3xl font-bold text-blue-400 mb-2">
            Level {challenge.level}: {challenge.title}
          </h2>
          <p className="mb-2">{challenge.task}</p>
          <p className="text-gray-400 mb-2">
            Hint: {challenge.hint}
          </p>
          <p className="text-gray-400 mb-2 d-flex">
            Solved:{(solved) ? <span>✅</span> : <span>❌</span>}
          </p>
          <p className="text-gray-400 mb-2">
            Expected Output: {challenge.expectedOutput}
          </p>
          <p className="text-right">
            <button
              onClick={handleCopy}
              className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white transition"
            >
              {copied ? "✅ Copied!" : "Copy"}
            </button>
          </p>
          <textarea
            className="w-full h-64 p-4 bg-gray-900 text-white border border-gray-700 rounded resize-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button
            onClick={run}
            className="mt-3 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Run
          </button>

          <h3 className="mt-3 text-lg">Output:</h3>
          <pre className="w-full p-4 mt-2 bg-gray-900 border border-gray-700 text-green-400 rounded shadow-inner whitespace-pre-wrap">
            {output}
          </pre>

          {result && (
            <div
              className={`mt-3 text-lg ${
                result.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {result}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
