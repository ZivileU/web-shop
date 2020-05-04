import React from 'react'
import classnames from 'classnames'
import Cart from '../../icons/cart'
import './Drawer.scss'

const Drawer = ({open, cart, setOpenDrawer}) => {
  return (
    <div className='drawerWrapper'>
      <div className={classnames('overlay', {open})} />
      <div className={classnames('content', {open})}>
        <button
          className='cartButton'
          onClick={() => setOpenDrawer(false)}
        >
          <Cart />
        </button>
      </div>
    </div>
  )
}

export default Drawer
