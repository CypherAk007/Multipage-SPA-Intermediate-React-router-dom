import { Link, useParams } from "react-router-dom";

const EventDetailPage = ()=>{

    const params = useParams()
    return(
        <div>
            <h1 className=" text-5xl">EventDetailPage</h1>
            <p>{params.eventId}</p>
            <p><Link to='..' relative="path">Back</Link></p>
        </div>
    )
 }

 export default EventDetailPage;