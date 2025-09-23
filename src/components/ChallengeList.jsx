import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { challenges } from "./challenges";
import Rendering from "./Rendering";

function SplashScreen() {
  return <Rendering />;
}

export default function ChallengeList() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 font-mono">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            LangForage Challenges
          </h2>
          <div className="grid gap-4">
            {challenges.map((ch) => (
              <div key={ch.level} className="bg-gray-900 p-4 rounded shadow">
                <h2 className="text-xl text-yellow-300 font-semibold mb-1">
                  Level {ch.level}: {ch.title}
                </h2>
                <p className="text-gray-200">{ch.task}</p>
                <Link
                  to={`/challenge/${ch.level}`}
                  className="mt-2 inline-block text-blue-500 hover:text-blue-300 underline"
                >
                  Solve Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
