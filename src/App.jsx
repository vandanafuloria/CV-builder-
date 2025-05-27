import { useState } from "react";

import "./App.css";
import Download from "./Download";
import Button from "./Button";
import Heading from "./Heading";
import Form from "./form";
import Information from "./Information";
import GeneralInformation from "./components/GeneralInformation";
import Resume from "./components/Resume";

function App() {
  const generalInfo = [
    {
      label: "Full Name",
      placeholder: "Enter your name",
    },
    {
      label: "Email Address",
      placeholder: "Enter your email",
    },
    {
      label: "Phone Number",
      placeholder: "Enter your phone number",
    },
    {
      label: "City and Province",
      placeholder: "City",
    },
  ];

  const educationInfo = [
    {
      label: "Degree",
      placeholder: "Degree",
    },
    {
      label: "School",
      placeholder: "Enter School/ University",
    },
    {
      label: "City",
      placeholder: "City",
    },
    {
      label: "Country",
      placeholder: "Country",
    },
  ];

  return (
    <div className="main-container">
      <div className="information-section">
        <Download />
        <GeneralInformation />
        <Heading
          heading={"General Information"}
          icon={<i className="fa-solid fa-user"></i>}
        />
        <Form generalInfo={generalInfo} />

        <Heading
          heading={"Education Experience"}
          icon={<i className="fa-solid fa-user-graduate"></i>}
        />
        <Form generalInfo={educationInfo} />
        <Heading
          heading={"Professional Experience"}
          icon={<i className="fa-solid fa-briefcase"></i>}
        />
      </div>
      <div
        className="preview-section"
        style={{ backgroundColor: "black", flexBasis: "52%" }}
      >
        <Resume />
        <div
          style={
            {
              // backgroundColor: "white",
              // height: "100px",
              // maxWidth: "900px",
              // width: "100%",
            }
          }
        ></div>
      </div>
    </div>
  );
}

export default App;
