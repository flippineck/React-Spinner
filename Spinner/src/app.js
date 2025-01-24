import React from "react";

import TeamProvider from "./components/data/TeamProvider";

import { MeetTheTeam } from "./components/MeetTheTeam";
import { MonthDiary } from "./components/calender/month";


function App() {
  const [viewDate, setViewDate] = React.useState(new Date());


  return (
    <TeamProvider >
      <MeetTheTeam />
      <MonthDiary viewDate={viewDate} setViewDate={setViewDate}/>
    </TeamProvider>
  );
}

export default App;