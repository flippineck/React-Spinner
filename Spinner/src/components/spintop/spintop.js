import Gravatar from "../../utils/gravatar";

export function SpinTop({theDate,theTeam}) {
  return (
    <>
    {theTeam.Members.map((teamMember) => (
      <div key={teamMember.Email} className="flex flex-col items-center justify-center p-4 m-4 bg-blue-200 rounded-lg shadow-lg">
          <Gravatar teamMember={teamMember} />
      </div>
    ))}
    </>
  );
}