import { Outlet } from 'react-router-dom';
import EventsNavigation from './EventsNavigation'

const EventsRootLayout = ()=>{
    return (
        <div>
            <EventsNavigation></EventsNavigation>
            <Outlet></Outlet>
        </div>
    )

}

export default EventsRootLayout;