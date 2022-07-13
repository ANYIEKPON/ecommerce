import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Products.css'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const filterProduct = (cat) => {
        
        const updatedList = data.filter((x) => x.category === cat);
        
            setData(updatedList)
        
    }
    // let componentMounted = true;

    useEffect(() => {
        const getProducts =  () => {
                setLoading(true);
                axios.get('https://fakestoreapi.com/products').then((response) => {
                    setData(response.data);
                    setLoading(false);
                    // console.log(data);
                
                }).catch((err) => {
                    console.log(err)
                })
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className='all'>
                    <div className='products'>
                        <Skeleton height={237} width={150} />
                    </div>
                    <div className='all-p'>
                        <div className='products'>
                            <Skeleton height={237} width={150} />
                        </div>
                    </div>
                    <div className='all-p'>
                        <div className='products'> 
                            <Skeleton  height={237} width={150}/>
                        </div>
                    </div>
                    <div className='all-p'>
                        <div className='products'> 
                            <Skeleton  height={237} width={150}/>
                        </div>
                    </div>
                    <div className='all-p'>
                        <div className='products'> 
                            <Skeleton  height={237} width={150}/>
                        </div>
                    </div>
                    <div className='all-p'>
                        <div className='products'> 
                            <Skeleton  height={237} width={150}/>
                        </div>
                    </div>
                </div>
            </>
        )
    
    }


    const ShowProducts = () => {
        return (
            <>
                <div className='p'>
                    <div><button className='line' onClick={() => setData(data)}>All</button></div>
                    <div><button className='line' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button></div>
                    <div><button className='line' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button></div>
                    <div><button className='line' onClick={() => filterProduct("jewelery")}>Jewelery</button></div>
                    <div><button className='line' onClick={() => filterProduct("electronics")}>Electronic</button></div>
                </div>
                <div className='all'>
                        {data.map((product) => {
                            return (
                                <>
                                    <div className='all-p'>
                                                <div key={product.id} className='products'>
                                                        <div className='im'><img src={product.image} alt={product.title} className='image' height='100px' width='100px' /></div>
                                                        <div>
                                                            <h5>{product.title.substring(0,12)}...</h5>
                                                            <p>${product.price}</p>
                                                            <div className='buy'><Link to={`/products/${product.id}`}><button>Buy Now</button></Link></div>
                                                        </div>
                                                </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
            </>
        )
    }

  return (
        <div className='shop'>
            <div className='latest'>
                <div className='lat'>
                    <h3>Latest Products</h3>
                    <hr />
                </div>
            </div>
            <div className='modern'>
                {loading ? <Loading /> : <ShowProducts /> }
            </div>
        </div>
  )
}

export default Products;