import React from "react";

import { demoTeam } from "../testdata/demoteam";
import { MeetTheTeam } from "./components/MeetTheTeam";

function App() {
  
  return (
    <>
      <MeetTheTeam theTeam={demoTeam} />
    </>
  );
}

export default App;