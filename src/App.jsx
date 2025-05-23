import Hero from "./pages/Hero";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import NpmZone from "./pages/NpmZone";
import Experience from "./pages/Experience";
import Layout from "./Layout";
import Hackathons from "./pages/Hackathons";
import Certificates from "./pages/Certificates";


const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route element={<Layout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/npmZone" element={<NpmZone />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/hackathons" element={<Hackathons />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
