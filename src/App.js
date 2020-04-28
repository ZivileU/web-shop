import React from 'react'
import Logo from './icons/logo'
import Cart from './icons/cart'
import './App.css'

function App() {
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
      </div>
    </div>
  )
}

export default App
