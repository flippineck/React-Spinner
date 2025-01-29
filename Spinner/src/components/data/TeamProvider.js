import React, { useEffect,useState,useReducer } from "react";
import { demoTeam } from "../../../testdata/demoTeam";

export const TeamContext = React.createContext();

function dateChosen(state,action)
{
  console.log("state",state);
  console.log("action",action);
  
}

function TeamProvider({children}) {
    //check local storage for team data
    var teamData = localStorage.getItem("teamData");
    //console.log("TeamProvider teamData", teamData);
    if (teamData) {
      loadedDemoTeam = JSON.parse(teamData);
      //console.log("TeamProvider demoTeam", demoTeam);
    } else {
      loadedDemoTeam = demoTeam;
    };
    
    const [members, setMembers] = React.useState(loadedDemoTeam.Members);
    //const [dates, setDates] = React.useState(loadedDemoTeam.Dates);
    const [dates,chosen] = useReducer(dateChosen,loadedDemoTeam.Dates);
    const [teamName, setTeamName] = React.useState(loadedDemoTeam.TeamName);
    
    
    // const chosen = React.useCallback((data) => {
    //   var newDates = [...dates];
    //   const teamMember = newDates.find(log => log.Date === data.viewDate.toDateString());
    //   if (teamMember) {
    //     teamMember.Chosen = members[chosen].Email;
    //   } else {
    //     newDates.push({Date: data.viewDate.toDateString(), Chosen: members[data.chosen].Email});
    //   }
    //   setDates(newDates);
    //   localStorage.setItem("teamData", JSON.stringify({Members: members, Dates: newDates, TeamName: teamName}));
    // }, [members, dates]);

  return (
    <TeamContext value={{teamName,members, dates, chosen}}>
      {children}
    </TeamContext>
  );
}

export default React.memo(TeamProvider);
