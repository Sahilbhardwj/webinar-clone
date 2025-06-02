import { Bottombar } from "../components/bottombar";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/topbar";

export function Dashboard(){
return(  
    
    <div className="flex">

     <Sidebar/>
     <div className="  w-screen flex flex-col">
         <Topbar/>
        <Bottombar/>
     </div> 

     </div>

   
)
}