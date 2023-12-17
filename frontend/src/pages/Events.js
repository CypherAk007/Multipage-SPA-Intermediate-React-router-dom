import { Link, useParams } from "react-router-dom";

const EVENTS = [
    {id:'e1',title:'Event1'},
    {id:'e2',title:'Event2'},
    {id:'e3',title:'Event3'},
]


const EventsPage = ()=>{

    // const params = useParams()
    return(
        <div>
            <h1 className=" text-5xl">EventsPage</h1>
            <ul>
                {EVENTS.map((event)=><li key={event.id}><Link to={event.id}>{event.title}</Link></li>)}
                </ul>    
        </div>
    )
 }

 export default EventsPage;