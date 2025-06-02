import { Facecard } from "./facecard";
import { Greetings } from "./greetingx";
import { Meetcreator } from "./meetcreator";
import { Scheduler } from "./scheduler";

export function Bottombar(){
    return(
       
        <div className=" h-screen flex  bg-gray-100">
            <Facecard />
            <div className="flex flex-col"> 
                <Greetings/>
              
            <Scheduler/>
            </div>
             <Meetcreator/>
          </div>
    )
}