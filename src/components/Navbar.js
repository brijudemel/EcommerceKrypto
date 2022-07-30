import React from 'react'
import styles from '../styles/navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import {handleLogout} from '../firebase'
import { useDispatch } from 'react-redux';
import { signOutAction } from '../redux/actions/userActions';
import {useNavigate} from 'react-router-dom'
import removeCookie from '../cookieHandler/removeCookie'

const Navbar = () => {
  const state=useSelector((state)=>state.userReducer)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const logoutCall=()=>{
    handleLogout()
    dispatch(signOutAction())
    removeCookie('uname')
    navigate('/login')
  }
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div>
            <h2> ShopKart.</h2>
        </div>
        <div className={styles.navItems}>
            {
              state.loggedIn
              ?<><div><p>Products</p></div><div onClick={()=>logoutCall()}><p>Log Out</p></div></>
              :<div><p>Login</p></div>
            }
            
            
            
            <ShoppingCartIcon  sx={{fontSize:30, marginY:'7%'}} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
