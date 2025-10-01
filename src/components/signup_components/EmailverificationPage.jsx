import { Heading } from "../heading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Continuebutton } from "../continuebutton";
import { Inputbox } from "../emailinputbox";


export function Emailverificationpage(){
 return(
   <div className="bg-blue-900 min-h-screen  text-white ">
    <Heading/>
    <Email/>
  </div>
 )
}

export function Email(){
    const navigate=useNavigate();
     const [isValid,setIsvalid]=useState(false);
   
      const onchangehandler=(e)=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const value=e.target.value
        setIsvalid(regex.test(value));
     
    }
     const oncontinue=()=>{
      navigate('/signup/myotp')
     }
    return(
        <div >
         <p className=' font-bold flex justify-center '>Lets Get Started</p>
      
            <Inputbox onchangehandler={onchangehandler}/>
          
          <Continuebutton checkValid={isValid} letcontinue={oncontinue}/>
    </div>
    )
}