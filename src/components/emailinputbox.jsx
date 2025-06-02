import { useRef } from "react"

export function Inputbox({onchangehandler}){
    const inputref=useRef();
    return(
        <div className=' flex justify-center '>
         <input ref={inputref}
           className=' bg-blue-700 rounded-md px-6 py-2 mt-5 mb-10'  
           placeholder='Enter your Email'
           onChange={onchangehandler}>
        </input> 
        </div>
    )
}