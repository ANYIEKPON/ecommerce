import React from 'react';
import '../styles/Home.css'
import Products from './Products';

function Home() {
  return (
    <div className='card'>
        <div className='cardd'>
          <div className='h'>
              <div className='head'><h5 className='heading'> NEW SEASON ARRIVALS</h5></div>
              <div className='text'><p className='text'>CHECK OUT ALL THE TRENDS</p></div>
          </div>
        </div>
        <div className='product'>
          <Products />
        </div>
    </div>
    
  )
}

export default Home;