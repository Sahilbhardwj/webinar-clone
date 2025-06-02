 export function Continuebutton({checkValid,letcontinue}){
    return(
    <div className=' flex justify-center cols-span-1'>
         <button
        className={`rounded-md px-20 py-2 transition ${
          checkValid ? 'bg-green-200 hover:bg-green-200' : 'bg-gray-400 cursor-not-allowed'
        }`}
        disabled={!checkValid}
        onClick={letcontinue}
      >Continue</button>
    </div>
      )
      }