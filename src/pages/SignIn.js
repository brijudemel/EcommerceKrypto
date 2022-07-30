import React,{useEffect, useState} from 'react'
import styles from '../styles/register.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {handleLogin} from '../firebase'
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { signInAction } from '../redux/actions/userActions';
import setCookie from '../cookieHandler/setCookie'
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
const SignIn = () => {
    const navigate=useNavigate()
    const state=useSelector((state)=>state.userReducer)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(state);
    },[state])
    const handleLoginCall=()=>{
        let ecode=handleLogin(email,password)
        if(ecode===0){
            dispatch(signInAction({
                user: email,
                email,
            }))
            setCookie('uname',email)
            navigate('/')
        }
        
    }

    // const handleLogoutCall=()=>{
    //     handleLogout()
    //     dispatch(signOutAction())
    //     removeCookie('uname')
    //     navigate('/login')
    // }

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className={styles.outerBox}>
                <div className={styles.innerBox}>
                    <h1>Login</h1>
                    
                    <input className={styles.inputElement} value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' />
                    <br />
                    <br />
                    <input className={styles.inputElement} value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'  />
                    <div className={styles.footer}>
                        <Link style={{textDecoration:'none'}} to='/register'><p>New User? Create an account</p></Link>
                        
                        <button onClick={()=>handleLoginCall()}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
