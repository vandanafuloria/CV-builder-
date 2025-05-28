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
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div className="container">
      <div className="main-container">
        <Download />
        <GeneralInformation
          setName={setName}
          setEmail={setEmail}
          setContact={setContact}
          setLocation={setLocation}
        />
        <EducationalInformation
          setDegree={setDegree}
          setSchool={setSchool}
          setCity={setCity}
          setCountry={setCountry}
          setStart={setStart}
          setEnd={setEnd}
        />
        <ProfessionalInformation />
      </div>
      <div className="preview-container">
        <Resume
          name={name}
          email={email}
          contact={contact}
          location={location}
          degree={degree}
          school={school}
          city={city}
          start={start}
          end={end}
          country={country}
        />
      </div>
    </div>
  );
}

export default App;
