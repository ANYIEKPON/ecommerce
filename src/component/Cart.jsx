import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector'; 
import '../styles/Cart.css'
// import { cart } from '../redux/action';



function Cart() {
    
    const state = useSelector((state) => state.handleCart)


    const showCart = (item) => {
        return (
            <div>
                <div key={item.id}  className='cart_add'>
                    <div className='cart_prod'>
                        <div className='product_image_cart'>
                            <img src={item.image} alt={item.title} height='300px' width='300px' />
                        </div>
                        <div className='product_text'>
                            <h4>{item.category}</h4>
                            <h1>{item.title}</h1>
                            <p> Rating {item.rating && item.rating.rate}
                                <i></i>
                            </p>
                            <h3> $ {item.price}</h3>
                        </div>
                    </div>
                </div>
        </div>)
    }


  return (
    <>
        <div className='ret'>
        {   state.length !== 0 && state.map(showCart)}
        </div>
    </>
  )
}

export default Cart;