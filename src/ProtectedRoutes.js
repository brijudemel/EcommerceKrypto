import React,{useEffect, useState} from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

const ProtectedRoutes = () => {
    const navigate=useNavigate()
    const state=useSelector((state)=>state.userReducer)
    const [user,setUser]=useState(false)
    useEffect(() => {
        let authToken = sessionStorage.getItem('AuthToken')
        console.log(authToken);
        if (authToken) {
            setUser(true)
            // console.log(state);
        }
    }, [])

    const useAuth=()=>{
        return user
    }
    const isAuth=useAuth()
    return user?<Outlet /> :<Navigate to="/login" />
}

export default ProtectedRoutes
