import React, { useState } from 'react'
import styles from '../styles/register.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {handleRegister} from '../firebase'
import { useDispatch } from 'react-redux';
import { signInAction } from '../redux/actions/userActions';
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";
const Register = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const dispatch=useDispatch()
    const handleRegisterCall=()=>{
        let ecode=handleRegister(email,password)
        if(ecode===0){
            dispatch(signInAction({
            user: email,
            email,
        }))
        }
    }
  return (
    <>
        <Navbar />
        <ToastContainer />
        <div className={styles.outerBox}>
            <div className={styles.innerBox}>
                
                <h1>Register</h1>
                <input className={styles.inputElement} value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' />
                <input className={styles.inputElement} value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'  />
                <input className={styles.inputElement} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type='password' placeholder='Confirm Password'  />
                    <div className={styles.footer}>
                        <Link to='/login' style={{textDecoration:'none'}}><p>Existing User? Click here to login</p></Link>
                        
                        <button onClick={()=>handleRegisterCall()}>Register</button>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Register
