import { useState } from "react";

import "./App.css";
import Download from "./ui/Download";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

import GeneralInformation from "./components/GeneralInformation";
import Resume from "./components/Resume";
import EducationalInformation from "./components/EducationInforamation";
import ProfessionalInformation from "./components/professionalInformation";

function App() {
  return (
    <div className="container">
      <div className="main-container">
        <Download />
        <GeneralInformation />
        <EducationalInformation />
        <ProfessionalInformation />
      </div>
      <div className="preview-container">
        <Resume />
      </div>
    </div>
  );
}

export default App;
