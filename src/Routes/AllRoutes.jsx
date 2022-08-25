import {Route, Routes} from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import Error from './Error'
import { SharedComponent } from '../Components/SharedComponent'


export const AllRoutes = () =>{
    return (
        <Routes>
            <Route path='/' element={<SharedComponent/>} >
            <Route index element={<Home/>}/>
            <Route path='/crowdfunding' element={<div></div>}/>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error/>}/>
           </Route>

        </Routes>
    )
}