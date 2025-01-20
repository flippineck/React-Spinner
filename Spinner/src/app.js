import React from "react";
import Modal from "./utils/modal";
import useToggle from './utils/use-toggle';

import { demoTeam } from "../testdata/demoteam";
import { MeetTheTeam } from "./components/MeetTheTeam";



function App() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  return (
    <>
      <MeetTheTeam theTeam={demoTeam} />
      {isModalOpen && (
        <Modal
          title="Hello world"
          handleDismiss={toggleIsModalOpen}
        >
          This is an example modal! It includes <a href="">several</a> <a href="">different</a> <a href="">links</a>.
        </Modal>
      )}
      <button onClick={toggleIsModalOpen}>
        Toggle modal
      </button>
    </>
  );
}

export default App;