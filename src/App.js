import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Application from "./Application";
import Investi from "./components/investissement/Investi";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section_5/Section";
import { Contact } from "./SectionContact/Contact";

import SectionFond from "./SectionFond/SectionFond";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Application />}></Route>
          <Route exact path="/fonds" element={<SectionFond />} />{" "}
          {/*   */}
          <Route exact path="/Respsocial" element={<Section />}></Route>
          <Route exact path="/Realisation" element={<Investi />}></Route>
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
