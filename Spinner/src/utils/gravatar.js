import React from 'react';
import { GravatarURL } from './gravatarUrl';

function Gravatar({ teamMember }) {
  const gravatarUrl = GravatarURL({ teamMember }) 
  return <img className="self-center w-32 rounded-full" key={teamMember.Email} src={gravatarUrl} alt={teamMember.Name} title={teamMember.Name} />;
}

export default React.memo(Gravatar);