import {  useContext } from "react"
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/Context"

export const PrivateRoute = ({children}) =>{
    const {state} = useContext(AppContext);
    
    if(state.isAuth) return children;
    else 
    return (
        <Navigate to='/login'/>
    )
}