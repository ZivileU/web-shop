import React, {useState, useEffect} from 'react'
import data from './data/products.json'
import Logo from './icons/logo'
import Cart from './icons/cart'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect (() => {
    if (!data) {
      setLoading(true)
    }
    return setLoading(false)
  }, [])

  return (
    <div className='App'>
      <div className='wrapper'>
        <header>
          <Logo />
          <Cart />
        </header>
        <div className='filters'>
          <div className='colorFilter'>
            <span>Filter by color: </span>
            <button>Black</button>
            <button>Rose Nude</button>
            <button>White</button>
            <button>Grey</button>
            <button>Navy</button>
          </div>
          <div className='sizeFilter'>
            <span>Filter by size: </span>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
        </div>
        {loading ? (
          'Loading...'
        ) : (
          <div className='products'>
            {data.map(({image_link, title, size, color, price, availability}) => (
              <div className='product'>
                <img src={image_link} alt={title} />
                <div className='availability'>{availability}</div>
                <button>{price}</button>
                <div className='productDetails'>
                  <div>{title}</div>
                  <div>
                    <span className='size'>{size}</span>
                    <span>{color}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
