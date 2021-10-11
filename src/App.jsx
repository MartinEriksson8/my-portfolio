import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Showcase from "./components/showcase/Showcase";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <About/>
        <Showcase/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
