import {  useContext } from "react"
import { AppContext } from "../Context/Context"

export const PrivateRoute = ({children}) =>{
    const {state} = useContext(AppContext);
    if(!state.isAuth) return children;
    else 
    return (
        <div></div>
    )
}