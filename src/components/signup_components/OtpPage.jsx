import { Heading } from "../heading";
import { useEffect, useRef, useState } from "react"
import { Continuebutton } from "../continuebutton"
import { useNavigate } from "react-router-dom"


export function OTPPage(){
    return(
        <div className="bg-blue-900 min-h-screen   text-white ">
        <Heading/>
        <OTP/>
        </div>
        
    )
}




export function OTP(){
const [isvalid,setIsvalid]=useState(false)
const myref =useRef([])
const navigate=useNavigate()
        function oncontinue(){
        navigate("/dashboard")
        }
        function check() {
  let count = 0;
  myref.current.forEach((ref) => {
    if (ref?.value.trim() !== "") {
      count += 1;
    }
  });

  console.log(count);

  if (count === 6) {
    setIsvalid(true);
  } else {
    setIsvalid(false); // Also handle the invalid case
  }
}



      useEffect(()=>{
        myref.current[0].focus()
      },[])   
   
 

    return(
        <div className="flex flex-col">
            <div className="text-white text-lg flex justify-center font-bold">Enter The OTP</div>


    {/*    rendering of multiple subotp boxes */}
            <div className="flex justify-center">

            {Array(6).fill(0).map((_,index )=> (<Subotpbox key={index} myref={(e)=>myref.current[index]=e} check={check}
            ondone={()=>{
            if( index<5){myref.current[index+1].focus()}
            }}
            goback={()=>{
            if(index>0){myref.current[index-1].focus()}
            }}/>))}
            
            </div>
    {/*rendering Continue button*/ }       
            <Continuebutton checkValid={isvalid} letcontinue={oncontinue}/>
        </div>
        
    )
}

function Subotpbox({myref,ondone,goback,check}){
   
    return(
        <div  className="flex justify-center mt-5 mb-10">
           <div className=' flex justify-center '>
           <input ref={myref}  maxLength={1} className=' bg-blue-700 rounded-md w-8 p-1 mr-2'
            onChange={(e)=>{
            if(e.target.value>0){
                ondone()
             }
             if (!/^[0-9]$/.test(e.target.value)) {
             e.target.value = "";
             }
             check();
            }}
            onKeyDown={(e)=>{
                if (e.key==='Backspace'){
                 e.preventDefault();
                 e.target.value = "";      
                 goback();
                check();
                }
                
            }}
            
        
              />
          
          </div>
        </div>
    )

}
