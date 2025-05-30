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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  // education states

  // profesional
  const [jobData, setJobData] = useState({
    job: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [employment, setEmployment] = useState([]);

  // state lifting
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
    country: "",
  });

  const [educations, setEducations] = useState([]);

  return (
    <div className="container">
      <div className="main-container">
        <Download />
        {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
        <GeneralInformation
          setName={setName}
          setEmail={setEmail}
          setContact={setContact}
          setLocation={setLocation}
        />

        <EducationalInformation
          setEducations={setEducations}
          educations={educations}
          setFormData={setFormData}
          formData={formData}
        />
        <ProfessionalInformation
          jobData={jobData}
          setJobData={setJobData}
          employment={employment}
          setEmployment={setEmployment}
        />
      </div>
      <div className="preview-container">
        <Resume
          educations={educations}
          formData={formData}
          jobData={jobData}
          employment={employment}
          name={name}
          email={email}
          contact={contact}
          location={location}
        />
      </div>
    </div>
  );
}

export default App;
