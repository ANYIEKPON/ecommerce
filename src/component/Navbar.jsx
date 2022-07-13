import React from 'react';
import { AddShoppingCart, HowToReg, VpnKey, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { cart } from '../redux/action';
import '../styles/Navbar.css';
import { useState } from 'react';


function Navbar() {

  const [allProduct, setAllProduct] = useState([])

  // const { add } = useContext(CartContext);
  const state = useSelector((state) => state.handleCart)

  const dispatch = useDispatch();

  const showCart = (allProduct) => {
    dispatch(cart(allProduct));
  }

  return (
    <div className='topMenu'>
        <div className='menu-left'>
            <Link to='/' >LA COLLECTION</Link>
        </div>
        <div className='menu-right'>
          <div className='s'>
            <div className='s-icon'><Search fontSize='5' type='text' placeholder='search' /></div>
            <div><input type="text" placeholder='Search...' className='search' /></div>
          </div>
          <div>
            <button className='signIn'>
              <div className='a'><VpnKey fontSize='5' /></div>
              <div className='b'>Login</div>
            </button>
          </div>
            <div>
              <button className='signIn'> 
                <div  className='a'><HowToReg fontSize='5' /></div>
                <div className='b'>Register</div>
               </button>
            </div>
            <div className='item_cart'>
            <Link to='/cart' onClick={() => showCart(allProduct)}>
              <button className='signIn'> 
                <div className='a'><AddShoppingCart fontSize='5' /></div>
                 <div className='b'>Cart</div>
                 ({state.length})
              </button></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar;