import { useNavigate } from "react-router-dom"
import { FiHome, FiUsers, FiSettings, FiUser, FiTarget, FiShoppingCart } from 'react-icons/fi';

export function Sidebuttons({label,Icon}){
  return(
    <div className="mx-2 mt-1">
      <button className=" w-full  py-2 pl-2 pr-2 rounded-md hover:bg-gray-100 hover:text-blue-900   text-gray-400 flex justify-between font-semibold" >
        <span className="font-sans">{label}</span>
        <span><Icon/></span>
      </button>
    </div>
    
  )
}

export function Smallheading(){
  const navigate=useNavigate()
  return(
    <button className="bg-blue-900 py-1 px-1 rounded-md text-white" onClick={()=>{
      navigate("/")
    }}>
     <span className='text-green-200 '>Webinar</span>
     <span>.gg</span>
     </button>
  )
}
export function Home(){
  return(
    <Sidebuttons label="Home" Icon={FiHome}></Sidebuttons>
  )
}
export function Webinars(){
  return(
  <Sidebuttons label="Webinars" Icon={FiUsers}></Sidebuttons>
  )  
} 

export function Billings(){
    return(
         <Sidebuttons label="Billings" Icon={FiShoppingCart}></Sidebuttons>
    )
}
export function Settings(){
  return(
 <Sidebuttons label="Settings"Icon={FiSettings}></Sidebuttons>
  )  
} 
export function Sidebar(){
    return(
        <div className="w-80 h-screen  flex flex-col">
          <div className="flex justify-between my-4 mx-4 rounded">
           <Smallheading/>  
           <img  className=" w-8 h-8 rounded-md" src="uncleSam.webp" alt="" />
          </div>
          
            <div className="mt-4">
            <Home/>
            <Webinars/>
            <Billings />
         
            <Settings/>
            </div>
        </div>
    )
}

