import Gravatar from "../utils/gravatar";

export function MeetTheTeam({theTeam}) {
  return (
    <>
      <h1 className="text-center font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-700">{theTeam.TeamName}</h1>
      <div className="flex justify-between">
        {theTeam.Members.map((teamMember) => (
          <div className="flex flex-col flex-wrap items-center justify-center p-1 m-1 bg-orange-200 rounded-lg shadow-lg">
              <Gravatar teamMember={teamMember} />
              <h2 className="text-xs">{teamMember.Name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}