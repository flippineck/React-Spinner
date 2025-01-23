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