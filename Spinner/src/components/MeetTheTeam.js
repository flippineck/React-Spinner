import Gravatar from "../utils/gravatar";
import { motion } from "motion/react"
import { useAnimate } from "motion/react"
import { useEffect } from "react";

export function MeetTheTeam({theTeam}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("div",{opacity: 1}, {duration: 2});
    animate("img", { "rotate": "360deg" },  {duration: 1},{ type: "rotate" });
  }, [scope])

  return (
    <>
      <h1 className="text-center font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-700">{theTeam.TeamName}</h1>
      <div ref={scope} className="flex justify-between">
        {theTeam.Members.map((teamMember) => (
          <div key={teamMember.Email} className="opacity-0 flex flex-col flex-wrap items-center justify-center p-1 m-1 bg-orange-200 rounded-lg shadow-lg">
              <Gravatar teamMember={teamMember} />
              <h2 className="text-xs">{teamMember.Name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}