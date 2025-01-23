import React from "react";

import { demoTeam } from "../../../testdata/demoteam";

export const TeamContext = React.createContext();

export function TeamProvider({ children }) {

  const [members, setMembers] = React.useState(demoTeam.Members);
  const [dates, setDates] = React.useState(demoTeam.Dates);

  const chosen = React.useCallback((data) => {
    const newDates = [...dates];
    const teamMember = newDates.find(log => log.Date === data.viewDate.toDateString());
    if (teamMember) {
      teamMember.Chosen = demoTeam.Members[chosen].Email;
    } else {
      newDates.push({Date: data.viewDate.toDateString(), Chosen: demoTeam.Members[data.chosen].Email});
    }
    setDates(newDates);
  }, []);


  return (
    <TeamContext value={{members, dates, chosen}}>
      {children}
    </TeamContext>
  );
}
