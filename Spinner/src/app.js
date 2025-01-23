import React from "react";


import { demoTeam } from "../testdata/demoteam";
import { MeetTheTeam } from "./components/MeetTheTeam";
import { Spintop } from "./components/spintop/spintop";



function App() {
  
  return (
    <>
      <MeetTheTeam theTeam={demoTeam} />
      <Spintop teamMembers={demoTeam.Members}/>
      
    </>
  );
}

export default App;