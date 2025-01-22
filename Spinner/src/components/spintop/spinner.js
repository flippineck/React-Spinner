import { GravatarURL } from "../../utils/gravatarUrl";
import { color, motion } from "motion/react"
import React,{ useState, useEffect,useRef } from "react";
import Gravatar from "../../utils/gravatar";

function Spinner({teamMembers,randomIndex}) {
  // pick a random from the array of team members
  
  
  const [isSpinning, setIsSpinning] = useState(true);
  
  var rotationsLeft = (teamMembers.length*2) + randomIndex;
  const imgRef = useRef(null);

  console.log(`rotations left: ${rotationsLeft}`);
  useEffect(() => {
    const interval = setInterval(() => {
         rotationsLeft = rotationsLeft - 1;
           
           console.log(`interval rotations left: ${rotationsLeft}`);
           if (rotationsLeft === 0) {
             setIsSpinning(false);
             clearInterval(interval);}
             
             imgRef.current.src = GravatarURL({ teamMember: teamMembers[rotationsLeft % teamMembers.length] });
             imgRef.current.style.transform = `rotateY(${rotationsLeft % 2 ? 89:269}deg)`;
             imgRef.current.style.transition = `transform 0.7s ease-in-out`;

  
    }, 700); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {isSpinning ? <img ref={imgRef} className="self-center w-32 rounded-full" /> : <Gravatar teamMember={teamMembers[randomIndex]} />}
      
      <button onClick={() => {pickedMemberSet(teamMember);}}>Pick Me!</button>
    </>
  );
}
export default React.memo(Spinner);