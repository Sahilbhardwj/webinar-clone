import { FiCalendar, FiPlus } from "react-icons/fi";

export function Meetcreator(){
    return(
        <div className="mx-5 w-48 h-40 mt-36 rounded-md bg-white px-2 py-2">
            <div className="flex justify-center">
                <div className="flex flex-col">
                        <div className="flex flex-col mt-4 mb-2 ">
                            <button className=" bg-green-200  hover:bg-green-250 rounded-md mx-10 py-1 pl-2">{<FiPlus size={16}/>}</button>
                            <span className="font-bold">Join Webinar</span>
                        </div>
                        <div className="mb-8 mt-2 flex flex-col">
                                <button className=" bg-green-200 hover:bg-green-250 rounded-md mx-10 py-1 pl-2">{<FiCalendar size={16}/>}</button>
                                <span className="font-bold">Create Webinar</span>
                        </div>
                </div>
            </div>
        </div>
     
    )
}