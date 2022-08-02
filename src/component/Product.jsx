import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addCart } from '../redux/action';
import { cart } from '../redux/action';
import '../styles/Product.css';

function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const showCart = (allProduct) => {
        dispatch(cart(allProduct));
      }

    useEffect(() => {
        const getProduct =  () => {
                setLoading(true);
                axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
                    setProduct(response.data);
                    setLoading(false);
                    // console.log(data);
                
                }).catch((err) => {
                    console.log(err)
                })
        }
        getProduct();
    }, [])


    const Loading = () => {
        return (
            <>
                <div className='all-p'>
                        <Skeleton  height={150} width={150}/>
                </div>
                <div className='all-p'>
                        <Skeleton  height={300}/>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='prod'>
                    <div className='product_img'>
                        <img src={product.image} alt={product.title} height='300px' width='300px' />
                    </div>
                    <div className='product_des'>
                        <div className='product_cat'>
                            <h4>{product.category}</h4>
                            <h1>{product.title}</h1>
                            <p> Rating {product.rating && product.rating.rate}
                                <i></i>
                            </p>
                            <h3> $ {product.price}</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className='cart'>
                            <button onClick={() => addProduct(product)}>Add to Cart</button>
                            <button onClick={() => showCart(product)}><Link to='/cart'>Go to Cart</Link></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

  return (
    <div className='prod_selected'>
        <div>
            <div className='row'>
                { loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
  )
}

export default Product;