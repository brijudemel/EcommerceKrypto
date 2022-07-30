import React, { useEffect,useState } from 'react'
import {handleLogout} from '../firebase'
import { signOutAction } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import removeCookie from '../cookieHandler/removeCookie'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import ItemCard from '../components/ItemCard'
import styles from '../styles/home.module.css'
import axios from 'axios'


const Home = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [products,setProducts] = useState(null)

  const getProducts=async()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_HOST}/products`)
    .then((res)=>{
      setProducts(res.data)

    })
    .catch((e)=>{
      console.error(e);
    })
  }


  useEffect(()=>{
    getProducts()
  },[])

  const handleLogoutCall=()=>{
        handleLogout()
        dispatch(signOutAction())
        removeCookie('uname')
        navigate('/login')
    }
  return (
    <>
      <Navbar />
      <div className={styles.home}>
      <h1>Products</h1>
      {
        products
        ?<div className={`row`}>
          {/* <div className='col-4 mb-4'>
            <ItemCard />
          </div> */}
          {
            products.map((product=>(
              <div className='col-4 mb-4'>
                <ItemCard title={product.title} desc={product.description} imgSrc={product.image} amt={product.amount} rating={product.rating} />
              </div>
            )))
          }

        </div>
        
        :null
      }
      </div>
      
      <button onClick={()=>handleLogoutCall()}>LogOUT</button>
    </>
  )
}

export default Home
