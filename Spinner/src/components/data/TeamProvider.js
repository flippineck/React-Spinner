import React from "react";

import { demoTeam } from "../../../testdata/demoteam";

export const TeamContext = React.createContext();

export function TeamProvider({ children }) {
  return (
    <TeamContext value={demoTeam}>
      {children}
    </TeamContext>
  );
}

export function Chosen({chosen,viewDate})
{
   console.log(`chosen = ${viewDate} on day ${viewDate}`)
   const teamMember = demoTeam.Dates.find(log => log.Date === viewDate.toDateString());
   if (teamMember) {
      teamMember.Chosen = demoTeam.Members[chosen].Email;
   } else {
    demoTeam.Dates.push({Date: viewDate.toDateString(), Chosen: demoTeam.Members[chosen].Email});
   }

}