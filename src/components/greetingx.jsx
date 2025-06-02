export function Greetings(){
    const currdate=new Date()
    const monthName = currdate.toLocaleString('default', { month: 'long' });
    const dayname=currdate.toLocaleString('default',{weekday:'long'});

    return(
        
        <div className="my-10 mx-5 text-sm ">
            <p className="text-sm">{dayname+", "+currdate.getDate()+" " +monthName}</p> <br />
            <p className="text-2xl text-blue-900 font-bold">Good morning, Sam!</p>
        
        </div>
    )
}