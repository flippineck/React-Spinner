import React from 'react';
import { useState } from 'react';
import Spinner from './spinner';
import { HelpCircle as Start} from 'react-feather';
import { Chosen } from '../data/TeamProvider';

import Modal from "../../utils/modal";
import useToggle from '../../utils/use-toggle';

export function Spintop({ date,teamMembers }) {
  
  const [Member, setMember] = React.useState('');
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const [randomIndex,setRandomIndex] = useState(Math.floor(Math.random() * teamMembers.length));
  
  var handleDismiss = () => {
    toggleIsModalOpen();
  };

  var handleSpun = () => {
    handleDismiss();
    if (date)
    {
      Chosen({chosen:randomIndex,viewDate:date});
    }
  };

  return (
    <>
      <button onClick={() => {setRandomIndex(Math.floor(Math.random() * teamMembers.length)); toggleIsModalOpen()}}>
        <Start />
      </button>

      {isModalOpen && (     
        <Modal handleDismiss={handleDismiss}>
          <Spinner date={date} teamMembers={teamMembers} randomIndex={randomIndex} handleSpun={() => {handleSpun()}}/>
        </Modal>
      )}
    </>
  );
}
