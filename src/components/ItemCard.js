import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import styles from '../styles/home.module.css'
const ItemCard = ({title,desc,amt,imgSrc,rating}) => {
  return (
    <div className="card" style={{width:'18rem'}}>
        <img src={imgSrc} className="card-img-top" alt="product" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className={`${styles.desc} card-text`}>{desc}</p>
            <h5 className="card-title">₹{amt}</h5>
            <div className='d-flex justify-content-between'>
                <a href="#" className="btn btn-primary">Add to Cart</a>
                <div className='d-flex align-items-center'>
                    <div>{rating}</div>
                    <StarIcon sx={{color:'gold'}} />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ItemCard
