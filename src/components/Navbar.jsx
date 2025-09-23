import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div>
      <nav className="bg-gray-900 shadow-md text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <p className="text-white">
            <Link
              to="/"
              className="text-decoration-none text-blue-500 underline hover:text-blue-300"
            >
              Home
            </Link>
          </p>
          <p className="text-white">
            <Link
              to="/ide"
              className="text-decoration-none text-blue-500 underline hover:text-blue-300"
            >
              IDE
            </Link>
          </p>
          <p className="text-white">
            <Link
              to="/challenges"
              className="text-decoration-none text-blue-500 underline hover:text-blue-300"
            >
              Challenge
            </Link>
          </p>
          <p className="text-white">
            <Link
              to="/course"
              className="text-decoration-none text-blue-500 underline hover:text-blue-300"
            >
              Course
            </Link>
          </p>
        </div>
      </nav>
    </div>
  );
}
