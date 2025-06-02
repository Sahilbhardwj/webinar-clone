import { Heading } from "../heading";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Continuebutton } from "../continuebutton";

export function Dob(){
 return(
   <div className="bg-blue-900 min-h-screen   text-white ">
    <Heading/>
    <Buttons/>
  </div>
 )
}




export function Buttons(){
 const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const inputref=useRef()
    const [dob,setDob]=useState()
    const [isValid,setIsvalid]=useState(false);
    const navigate=useNavigate();



    dobRegex
     const onchangehandler=(e)=>{
     const value = e.target.value;
     setDob(value);
     setIsvalid(dobRegex.test(value));    
    }
    const oncontinue=()=>{
     navigate('/signup/mail')
    }
  
  
    return(
       
  <div  >
     <div className="font-bold flex justify-center"> <div className='  pb-10' >Verify Your Age</div></div>
      <div className=' text-gray-400 flex justify-center cols-span-1'>please confirm your age.This data will not be stored
      </div>

      <div className=' flex justify-center cols-span-1'>
      <input ref={inputref} 
        value={dob}
           className=' bg-blue-700 rounded-md px-6 py-2 mt-5 mb-10'  
           placeholder='DD/MM/YYYY'
           onChange={onchangehandler}>
    </input> 
    </div>
   <Continuebutton checkValid={isValid} letcontinue={oncontinue} />
  </div>
    )
}