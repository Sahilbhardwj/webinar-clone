import { Heading } from "../components/heading"
import {  useNavigate } from "react-router-dom"
export function LandingPage(){
    const Navigate=useNavigate()
    return(
        <div className="bg-blue-900 min-h-screen   text-white ">
            <Heading/>
            <div className=" flex justify-center" >
                <div className="flex flex-col">
                      <button className="bg-green-200 hover:bg-green-250 rounded-md px-20 py-2 my-2 " onClick={()=>{Navigate("/signup")}}>signup</button>
                      <button className="bg-green-200 hover:bg-green-250 rounded-md px-20 py-2 my-2" onClick={()=>{Navigate("/login")}}>login</button>
                </div>
              
            </div>
        </div>
    )
}