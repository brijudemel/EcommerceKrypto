import React from 'react'
import styles from '../styles/navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div>
            <h2> ShopKart.</h2>
        </div>
        <div className={styles.navItems}>
            <div><p>Products</p></div>
            <div><p>Login</p></div>
            <ShoppingCartIcon  sx={{fontSize:30, marginY:'7%'}} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
