import React from 'react';
import md5 from "md5";

function Gravatar({ teamMember }) {
  const hash = md5(teamMember.Email);
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=robohash&s=128`;
  return <img className="self-center w-32 rounded-full" key={teamMember.Email} src={gravatarUrl} alt={teamMember.Name} title={teamMember.Name} />;
}

export default React.memo(Gravatar);