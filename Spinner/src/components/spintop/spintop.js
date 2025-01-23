import React from 'react';
import { useState } from 'react';
import Spinner from './spinner';
import { HelpCircle as Start} from 'react-feather';

import Modal from "../../utils/modal";
import useToggle from '../../utils/use-toggle';

export function Spintop({ date,teamMembers }) {
  
  const [Member, setMember] = React.useState('');
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const [randomIndex,setRandomIndex] = useState(Math.floor(Math.random() * teamMembers.length));
  

  return (
    <>
      <button onClick={() => {setRandomIndex(Math.floor(Math.random() * teamMembers.length)); toggleIsModalOpen()}}>
        <Start />
      </button>

      {isModalOpen && (     
        <Modal title="Meet the Team" handleDismiss={() => {setMember(''); toggleIsModalOpen();}}>
          <Spinner teamMembers={teamMembers} randomIndex={randomIndex}/>
        </Modal>
      )}
    </>
  );
}
