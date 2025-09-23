import Ide from "./components/Ide";
import Course from "./components/Course";
import Navbar from "./components/Navbar";
import ChallengeList from "./components/ChallengeList";
import LandingPage from "./components/LandingPage";
import SolveChallenge from "./components/SolveChallenge";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ide" element={<Ide />} />
        <Route path="/challenges" element={<ChallengeList />} />
        <Route path="/challenge/:level" element={<SolveChallenge />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
