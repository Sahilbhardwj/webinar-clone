export function Scheduler(){
    const currdate=new Date().toDateString()
    return(
        <div className=" w-[450px] h-96 mx-5  bg-white rounded-xl py-2 px-2 font-sans flex flex-col">
         <div className="bg-gray-100 p-2">
          <button>{currdate}</button> 
         </div>
         <Individualschedule classes="class 1"/>
          <Individualschedule classes="class 2"/>
           <Individualschedule classes="class 3"/>
        </div>
    )
}

export function Individualschedule({classes}){
  return(
      <div className="flex border">
                <div className="py-4 px-4 flex border">
                  timeX
                </div>
                <div className="w-full  p-4 font-semibold font-sans">
                {classes}
                </div>
      </div>
  )
}