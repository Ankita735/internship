
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Menu.js/Home.js";
import About from "./Menu.js/About.js";
import Contact from "./Menu.js/Contact.js";
import Menu from "./Menu.js/Menu.js";
import Pagenotfound from "./Menu.js/Pagenotfound.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;