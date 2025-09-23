import React from "react";
import { useState, useEffect } from "react";
import Rendering from "./Rendering";

function SplashScreen() {
  return <Rendering />;
}

export default function LandingPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div className="min-h-screen bg-gradient-to-br justify-center from-gray-900 via-gray-800 to-gray-900 flex flex-col">
          <header className="w-full py-8 flex flex-col items-center">
            <h1 className="text-white">LangForage Editor</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 text-center max-w-xl">
              Learn, practice, and master programming in Hinglish with
              interactive challenges and a modern online IDE.
            </p>
          </header>
        </div>
      )}
    </div>
  );
}
