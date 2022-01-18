import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Showcase from "./components/showcase/Showcase";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <About/>
        <Showcase/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
