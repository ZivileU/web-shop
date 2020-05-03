import React, {useState, useEffect} from 'react'
import data from './data/products.json'
import Logo from './icons/logo'
import Cart from './icons/cart'
import './App.scss'

function App() {
  const [loading, setLoading] = useState(false)
  const [productFilters, setProductFilters] = useState({
    colors: [],
    sizes: []
  })
  const [isOn, toggleIsOn] = useState(false)

  const {colors, sizes} = productFilters

  // const filterBy = ({productFilters, data}) => {
  //   return data.filter(colors)
  // }

  useEffect (() => {
    if (!data) {
      setLoading(true)
    }
    return setLoading(false)
  }, [])

  console.log(colors)

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
            <button
              className={isOn ? 'on' : ''}
              onClick={() => {
                setProductFilters({
                  colors:
                    colors.includes('Black')
                      ? colors.filter(color => color !== 'Black')
                      : [...colors, 'Black'],
                  sizes: [...sizes]
                })
                toggleIsOn(!isOn)}
              }
            >
              Black
            </button>
            <button
              className={isOn ? 'on' : ''}
              onClick={() => {
                setProductFilters({
                  colors:
                    colors.includes('Rose Nude')
                      ? colors.filter(color => color !== 'Rose Nude')
                      : [...colors, 'Rose Nude'],
                  sizes: [...sizes]
                })
                toggleIsOn(!isOn)}
              }
            >
              Rose Nude
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors, 'White'], sizes: [...sizes]})}
            >
              White
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors, 'Grey'], sizes: [...sizes]})}
            >
              Grey
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors, 'Navy'], sizes: [...sizes]})}
            >
              Navy
            </button>
          </div>
          <div className='sizeFilter'>
            <span>Filter by size: </span>
            <button
              onClick={() => setProductFilters({colors: [...colors], sizes: [...sizes, 'XS']})}
            >
              XS
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors], sizes: [...sizes, 'S']})}
            >
              S
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors], sizes: [...sizes, 'M']})}
            >
              M
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors], sizes: [...sizes, 'L']})}
            >
              L
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors], sizes: [...sizes, 'XL']})}
            >
              XL
            </button>
            <button
              onClick={() => setProductFilters({colors: [...colors], sizes: [...sizes, 'XLL']})}
            >
              XXL
            </button>
          </div>
        </div>
        {loading ? (
          'Loading...'
        ) : (
          <div className='products'>
            {data.map(({image_link, title, size, color, price, availability, id}) => (
              <div className='product' key={id}>
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
