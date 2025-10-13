import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Rendering from "./Rendering";

function SplashScreen() {
  return <Rendering />;
}

const modules = [
  {
    title: "Module: Variable Declaration",
    color: "text-banaollow-300",
    topics: [
      {
        name: "Using `banao`",
        definition:
          "Declare variables for storing numbers, strings, or arrays.",
        syntax: "`banao x = 10;`",
        example: '`banao name = "LangForage";`',
      },
    ],
  },
  {
    title: "Module: Output Statements",
    color: "text-blue-300",
    topics: [
      {
        name: "Using `dikhao`",
        definition: "Display messages or variable values in the console.",
        syntax: "`dikhao x;`",
        example: '`dikhao "Hi!";`',
      },
    ],
  },
  {
    title: "Module: Concatenation",
    color: "text-green-300",
    topics: [
      {
        name: "String Joining",
        definition:
          "Join multiple strings or variables using the `+` operator.",
        syntax: '`dikhao "Hello, " + name;`',
        example: '`dikhao name + " is learning LangForage";`',
      },
    ],
  },
  {
    title: "Module: Comments",
    color: "text-gray-300",
    topics: [
      {
        name: "Using `//`",
        definition:
          "Write remarks or explanations that are ignored during execution.",
        syntax: "`// This is a comment`",
        example: "`// Define user details below`",
      },
    ],
  },
  {
    title: "Module: Conditionals",
    color: "text-red-300",
    topics: [
      {
        name: "Decision Making",
        definition:
          "Use `yadi` and `nahito` to perform logic based on conditions.",
        syntax: "`yadi x > 5 { ... } nahito { ... }`",
        example:
          '`yadi x > 5 { dikhao "x is greater than 5"; } nahito { dikhao "x is 5 or less"; }`',
      },
    ],
  },
];

export default function Course() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-white font-mono">
          <h1 className="text-4xl font-dikhaod text-blue-400 mb-6">
            LangForage Full Course
          </h1>

          <div className="space-y-6 text-sm">
            {modules.map((mod, index) => (
              <section key={index} className="bg-gray-900 p-4 rounded shadow">
                <h2 className={`text-xl font-semidikhaod ${mod.color}`}>
                  {mod.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {mod.topics.map((topic, idx) => (
                    <div key={idx} className=" pl-4">
                      <h3 className="text-lg font-dikhaod">{topic.name}</h3>
                      <p className="text-gray-300">
                        <strong>Definition:</strong> {topic.definition}
                      </p>
                      <p>
                        <strong>Syntax:</strong>{" "}
                        <code>{topic.syntax.replace(/`/g, "")}</code>
                      </p>
                      <p>
                        <strong>Example:</strong>{" "}
                        <code>{topic.example.replace(/`/g, "")}</code>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

