import React, {useEffect} from 'react'
import classnames from 'classnames'
import data from '../../data/products.json'
import Cart from '../../icons/cart'
import './Drawer.scss'

const Drawer = ({open, productIds, setOpenDrawer, toggleAddToCart}) => {
  const cartProducts = data.filter(product => productIds.includes(product.id))

  const totalPrice = () => {
    let prices = []
    cartProducts.forEach(product => prices.push(parseFloat(product.price.split(' ')[0])))
    const total = prices.reduce((a, b) => a + b, 0)
    return `${total}.00 EUR`
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '15px'
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0'
    }
  }, [])

  return (
    <div className='drawer'>
      <div className={classnames('overlay', {open})} />
      <div className={classnames('content', {open})}>
        <header>
          <button
            className='cartButton'
            onClick={() => setOpenDrawer(false)}
          >
            <Cart />
          </button>
        </header>
        {productIds.length === 0
          ? <div className='emptyState'>Add products by clicking on the price button</div>
          : (
              <div className='cartProducts'>
                {cartProducts.map(({image_link, title, id, price, size, color}) => (
                    <div className='cartProduct' key={id}>
                      <img src={image_link} alt={title} />
                      <div className='details'>
                        <div className='title'>{title}</div>
                        <span>{size}</span>
                        <span>{color}</span>
                      </div>
                      <div className='price'>{price}</div>
                      <button
                        title='Remove from cart'
                        onClick={() => toggleAddToCart(
                          productIds.filter(productId => productId !== id)
                        )}
                      >
                        X
                      </button>
                    </div>
                  ))
                }
              </div>
          )
        }
        {(productIds.length > 0) &&
          <footer>
            <div>{`Total: ${totalPrice()}`}</div>
          </footer>
        }
      </div>
    </div>
  )
}

export default Drawer
