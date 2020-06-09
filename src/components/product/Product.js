import React, {useState} from 'react'
import './Product.scss'

const Product = ({id, imageLink, title, availability, cart, toggleAddToCart, price, size, color}) => {
  const [brokenImage, setBrokenImage] = useState(false)

  return (
    !brokenImage && (
      <div className='product' key={id}>
        <img onError={() => setBrokenImage(true)} src={imageLink} alt={title} />
        <div className='availability'>{availability}</div>
        <button
          title='Add to cart'
          onClick={() => toggleAddToCart([...cart, id])}
        >
          {price}
        </button>
        <div className='productDetails'>
          <div>{title}</div>
          <div>
            <span className='size'>{size}</span>
            <span>{color}</span>
          </div>
        </div>
      </div>
    )
  )
}

export default Product
