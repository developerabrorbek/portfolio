import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <main className="">
        <Aside />
        <div className="main-body min-h-screen md:ml-[300px]">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Services />} path="/services" />
            <Route element={<Portfolio />} path="/portfolio" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
