import React from 'react';
import { useState } from 'react';
import Spinner from './spinner';
import { HelpCircle as Start} from 'react-feather';
import { TeamContext } from '../data/TeamProvider';

import Modal from "../../utils/modal";
import useToggle from '../../utils/use-toggle';

export function Spintop({ date }) {
  const {members,chosen} = React.useContext(TeamContext);
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const [randomIndex,setRandomIndex] = useState(Math.floor(Math.random() * members.length));
  
  var handleDismiss = () => {
    toggleIsModalOpen();
  };

  var handleSpun = () => {
    handleDismiss();
    if (date)
    {
      chosen({chosen:randomIndex,viewDate:date});
    }
  };

  return (
    <>
      <button onClick={() => {setRandomIndex(Math.floor(Math.random() * members.length)); toggleIsModalOpen()}}>
        <Start />
      </button>

      {isModalOpen && (     
        <Modal handleDismiss={handleDismiss}>
          <Spinner date={date} teamMembers={members} randomIndex={randomIndex} handleSpun={() => {handleSpun()}}/>
        </Modal>
      )}
    </>
  );
}
