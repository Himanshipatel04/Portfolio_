import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./pages/Hero";
const About = lazy(() => import("./pages/About"));
import Projects from "./pages/Projects";
import Loading from "./pages/Loading";
const NpmZone = lazy(() => import("./pages/NpmZone"));
const Experience = lazy(() => import("./pages/Experience"));
const Layout = lazy(() => import("./Layout"));
const Hackathons = lazy(() => import("./pages/Hackathons"));
const Certificates = lazy(() => import("./pages/Certificates"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
