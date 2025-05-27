import { useState } from "react";

import "./App.css";
import Download from "./Download";
import Button from "./Button";
import Heading from "./Heading";

function App() {
  return (
    <div className="main-container">
      <div>
        <Download />
        <Heading
          heading={"General Information"}
          icon={<i className="fa-solid fa-user"></i>}
        />
        <Heading
          heading={"Education Experience"}
          icon={<i className="fa-solid fa-user-graduate"></i>}
        />
        <Heading
          heading={"Professional Experience"}
          icon={<i className="fa-solid fa-briefcase"></i>}
        />
      </div>
      <div></div>
    </div>
  );
}

export default App;
