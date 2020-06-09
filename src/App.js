import React, {useState} from 'react'
import FilterButton from './components/filterButton/FilterButton'
import Drawer from './components/drawer/Drawer'
import Product from './components/product/Product'
import data from './data/products.json'
import Logo from './icons/logo'
import Cart from './icons/cart'
import './App.scss'

function App() {
  const [cart, toggleAddToCart] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
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

  const filteredProducts = filterBy().sort((left, right) => left.color.localeCompare(right.color))

  return (
    <div className='App'>
      <div className='wrapper'>
        {openDrawer &&
          <Drawer
            open={openDrawer}
            setOpenDrawer={setOpenDrawer}
            productIds={cart}
            toggleAddToCart={toggleAddToCart}
          />
        }
        <header>
          <Logo />
          <button onClick={() => setOpenDrawer(true)}>
            <Cart />
            {cart.length > 0
              && <span className='productsInCart'>{cart.length}</span>
            }
          </button>
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
        {filteredProducts.length === 0
          ? <div className='emptyState'>No results found</div>
          : (
              <div className='products'>
                {filteredProducts.map(({image_link, title, size, color, price, availability, id}) => (
                  <Product
                    id={id}
                    imageLink={image_link}
                    title={title}
                    availability={availability}
                    cart={cart}
                    toggleAddToCart={toggleAddToCart}
                    price={price}
                    size={size}
                    color={color}
                  />
                ))}
              </div>
            )
        }
      </div>
    </div>
  )
}

export default App
