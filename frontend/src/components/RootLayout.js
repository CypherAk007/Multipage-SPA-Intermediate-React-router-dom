import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation"

const RootLayout = ()=>{
    return (
        <div>
            <MainNavigation></MainNavigation>
            <Outlet></Outlet>

        </div>
    )
}

export default RootLayout