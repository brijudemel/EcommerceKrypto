import {Route,Routes,Navigate} from 'react-router-dom'
import SignIn from './pages/SignIn'
import ProtectedRoutes from './ProtectedRoutes'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Register from './pages/Register'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import getCookie from './cookieHandler/getCookie'
import { signInAction } from './redux/actions/userActions'
const Views=()=>{
    const user=useSelector((state)=>state.userReducer)
    const [userL,setUserL]=useState(false)
    const dispatch=useDispatch()
    // const csUser=user.loggedIn
    useEffect(()=>{
        if(user.loggedIn){
            setUserL(true)
        }
        else{
            setUserL(false)
            
        }

    },[user])

    useEffect(()=>{
        let authToken = sessionStorage.getItem('AuthToken')
        console.log(authToken);
        if (authToken) {
            //setCookie
            let uname=getCookie('username')
            dispatch(signInAction({
                user: uname,
                email:uname,
            }))

            setUserL(true)
            // console.log(state);
        }
    },[])
    return(
        <Routes>
        {
            !userL&&(
                <>
                    <Route path='/login' element={<SignIn />} />
                    <Route path='/register' element={<Register />} />
                </>   
            )
        }
        {
            userL&&(
                <>
                    <Route path='/' element={<Home />} />
                    <Route path='cart' element={<Cart />} />
                </>
            )
        } 
        <Route path='*' element={<Navigate to={userL?'/':'/login'} />} />
            {/* <Route element={<ProtectedRoutes /> } >
                
            </Route> */}
        </Routes>
    )
}

export default Views;