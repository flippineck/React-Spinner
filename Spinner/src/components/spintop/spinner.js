import { GravatarURL } from "../../utils/gravatarUrl";
import { color, motion } from "motion/react"
import React,{ useState, useEffect,useRef } from "react";
import Gravatar from "../../utils/gravatar";

function Spinner({teamMembers,randomIndex}) {
  // pick a random from the array of team members
  
  
  const [isSpinning, setIsSpinning] = useState(true);
  
  var rotationsmax = (teamMembers.length*2) + randomIndex;
  var rotationsCur = 0;
  const imgRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
           console.log(`interval rotations current: ${rotationsCur}`);
           imgRef.current.src = GravatarURL({ teamMember: teamMembers[rotationsCur % teamMembers.length],size: 256 });
           if (rotationsCur === rotationsmax) {
             setIsSpinning(false);
             clearInterval(interval);
             imgRef.current.style.transform = `rotateY(0deg)`;
             imgRef.current.style.transition = `transform 0.7s ease-in-out`;
             
             
            } else {
              imgRef.current.style.transform = `rotateY(${rotationsCur % 2 ? 89:269}deg)`;
             imgRef.current.style.transition = `transform 0.4s ease-in-out`;
            }
            rotationsCur = rotationsCur +1;

    }, 400); 

    return () => clearInterval(interval);
  }, []);

  return (
    
      <div>
        <img ref={imgRef} className="self-center bg-orange-300 w-full rounded-full" /> 
      </div>
  );
}
export default React.memo(Spinner);