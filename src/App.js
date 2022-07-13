import React, {useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {

  const [add, setAdd] = useState(0);

  return (
    
      <div>
        <div className="App">
        <CartContext.Provider value={ { add, setAdd } } >
        <Router>
          <div className='topmenu'>
              <Navbar />
          </div>
          
            <div className='body'>
              <div className='topbar'>
                <Sidebar />
              </div>
                <div className='home-a'>
                  <div className='radius'>
                    <div className='home'>
                      <Routes>
                          <Route exact path='/' element={<Home />} /> 
                          <Route exact path='/products' element={<Products />} />
                          <Route exact path='/products/:id' element={<Product />} />
                          <Route exact path='/cart' element={<Cart />} />
                      </Routes>
                    </div>
                  </div>
                <div>
                  
                </div>
              </div>
            </div>
          <div className='footbar'>
              <Footer />
          </div>
        </Router>
        </CartContext.Provider>
        </div>
      </div>
    
  );
}

export default App;
