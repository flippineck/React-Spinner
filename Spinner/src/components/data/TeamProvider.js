import React, { useEffect,useState } from "react";
import { demoTeam } from "../../../testdata/demoTeam";

export const TeamContext = React.createContext();

function TeamProvider({children}) {
  
    const [members, setMembers] = React.useState(demoTeam.Members);
    const [dates, setDates] = React.useState(demoTeam.Dates);
    const [teamName, setTeamName] = React.useState(demoTeam.TeamName);
    
    
    // useEffect(() => {
    //   console.log("TeamProvider useEffect");
    //   setMembers(demoTeam.Members);
    //   setDates(demoTeam.Dates);
    // }, []);
  
    const chosen = React.useCallback((data) => {
      var newDates = [...dates];
      const teamMember = newDates.find(log => log.Date === data.viewDate.toDateString());
      if (teamMember) {
        teamMember.Chosen = members[chosen].Email;
      } else {
        newDates.push({Date: data.viewDate.toDateString(), Chosen: members[data.chosen].Email});
      }
      setDates(newDates);
    }, [members, dates]);

  return (
    <TeamContext value={{teamName,members, dates, chosen}}>
      {children}
    </TeamContext>
  );
}

export default React.memo(TeamProvider);
