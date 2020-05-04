import React from 'react'
import classnames from 'classnames'
import data from '../../data/products.json'
import Cart from '../../icons/cart'
import './Drawer.scss'

const Drawer = ({open, productIds, setOpenDrawer}) => {
  const cartProducts = data.filter(product => productIds.includes(product.id))
  const totalPrice = () => {
    let prices = []
    cartProducts.forEach(product => prices.push(parseFloat(product.price.split(' ')[0])))
    const total = prices.reduce((a, b) => a + b, 0)
    return `${total}.00 EUR`
  }

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
