import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
export const SharedComponent = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
            
        </>
    )
}
