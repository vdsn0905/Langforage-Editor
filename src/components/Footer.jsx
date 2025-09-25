import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showTeam, setShowTeam] = useState(false);

  const teamMembers = [
    {
      profilePic:
        "https://tse3.mm.bing.net/th/id/OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs?pid=Api&P=0&h=180",
      name: "Vivek Pawar",
      role: "Team Leader",
      github: "add github url of your account",
      linkedin: "add linkedin url of your account",
    },
    {
      profilePic:
        "https://tse3.mm.bing.net/th/id/OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs?pid=Api&P=0&h=180",
      name: "Dhananjay Suradkar",
      role: "Frontend Developer",
      github: "add github url of your account",
      linkedin: "add linkedin url of your account",
    },
    {
      profilePic:
        "https://tse3.mm.bing.net/th/id/OIP.WkuGv4-iR5uPKZFcs7UjvAHaHs?pid=Api&P=0&h=180",
      name: "Narendra Patil",
      role: "Developer",
      github: "add github url of your account",
      linkedin: "add linkedin url of your account",
    },
    {
      profilePic:
        "sanketPic.png",
      name: "Sanket Patil",
      role: "Developer",
      github: "https://github.com/Sanket5749",
      linkedin:
        "https://www.linkedin.com/in/sanket-patil-32142232a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <div className="bg-gray-900 shadow-md text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={() => setShowTeam(!showTeam)}
            className="text-xl hover:text-blue-500 transition-colors"
          >
            {showTeam ? "Hide Team" : "Developed By"}
          </button>

          {showTeam && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 place-content-center"
                >
                  <img
                    src={member.profilePic}
                    alt=""
                    className="place-self-center"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-400 mb-4">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none hover:text-blue-400 transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none hover:text-blue-400 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-sm text-gray-400 mt-6">
            © {new Date().getFullYear()} LangForage Editor. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

