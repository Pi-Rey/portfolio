// Fichero src/components/App.jsx
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "../styles/App.scss";
import Landing from "./Landing";
import Info from "./Info";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  const changeLanguage = () =>{
    if (!isEnglish){
        setIsEnglish(true)
    } else {
        setIsEnglish(false)
    }
  }
  return (
    <>

      <Routes>
        <Route path="/" element={<Landing isEnglish={ isEnglish } setIsEnglish={ setIsEnglish } changeLanguage={changeLanguage} />} />
        <Route
          path="/info"
          element={<Info />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
