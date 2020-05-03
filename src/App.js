import React, {useState, useEffect} from 'react'
import FilterButton from './components/filterButton/FilterButton'
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
  const {colors, sizes} = productFilters
  const colorFilters = ['Black', 'Rose Nude', 'White', 'Grey', 'Navy']
  const sizeFilters = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const filterBy = () => {
    if (colors.length > 0 && sizes.length > 0) {
      return data.filter(product => colors.includes(product.color) && sizes.includes(product.size))
    }
    if (colors.length > 0 || sizes.length > 0) {
      return data.filter(product => colors.includes(product.color) || sizes.includes(product.size))
    }
    return data
  }

  useEffect (() => {
    if (!data) {
      setLoading(true)
    }
    return setLoading(false)
  }, [])

  console.log(sizes.length)

  return (
    <div className='App'>
      <div className='wrapper'>
        <header>
          <Logo />
          <Cart />
        </header>
        <div className='filters'>
          <div>
            <span>Filter by color: </span>
            {colorFilters.map((color) =>
              <FilterButton
                filterName={color}
                key={color}
                setProductFilters={setProductFilters}
                colors={colors}
                sizes={sizes}
                colorFilters={colorFilters}
                sizeFilters={sizeFilters}
              />
            )}
          </div>
          <div>
            <span>Filter by size: </span>
            {sizeFilters.map((size) =>
              <FilterButton
                filterName={size}
                key={size}
                setProductFilters={setProductFilters}
                colors={colors}
                sizes={sizes}
                colorFilters={colorFilters}
                sizeFilters={sizeFilters}
              />
            )}
          </div>
        </div>
        {loading ? (
          'Loading...'
        ) : (
          <div className='products'>
            {filterBy().sort((left, right) => left.color.localeCompare(right.color)).map(({image_link, title, size, color, price, availability, id}) => (
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
