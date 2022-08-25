import {Route, Routes} from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import Error from './Error'

export const AllRoutes = () =>{
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}