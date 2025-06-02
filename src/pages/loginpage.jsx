import { Continuebutton } from "../components/continuebutton";
import { Heading } from "../components/heading";
import { Inputbox } from "../components/emailinputbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
   const [isValid,setIsvalid]=useState(false);
    const Navigate=useNavigate()
        const onchangehandler=(e)=>{
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const value=e.target.value
            setIsvalid(regex.test(value));
        
        }
        const oncontinue=()=>{
            Navigate("/dashboard")
        }
    return (
        <div className="bg-blue-900 min-h-screen   text-white ">
         <Heading/>
         <Inputbox onchangehandler={onchangehandler}/>
         <Continuebutton checkValid={isValid} letcontinue={oncontinue}/>
        </div>
    )
}