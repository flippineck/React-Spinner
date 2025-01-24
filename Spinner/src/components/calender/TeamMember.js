import React from 'react';
import { TeamContext } from '../data/TeamProvider';
import { GravatarURL } from '../../utils/gravatarUrl';
import { Spintop } from '../spintop/spintop';
import { isSpinnable } from '../../utils/isSpinnable';

export function TeamMember({viewDate}){
  const {members,dates} = React.useContext(TeamContext);
  const teamMember = dates.find(log => log.Date === viewDate.toDateString());

  return (
    <>
      {teamMember ? (
        <img className="self-center w-8 rounded-full" src={GravatarURL({Email : teamMember.Chosen})} />
      ) : (
        isSpinnable(viewDate) && <Spintop date={viewDate} teamMembers={members}/> 
      ) }
    </>
  );
}