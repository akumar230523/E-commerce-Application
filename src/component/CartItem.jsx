import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../utils/cartSlice';
import '../style/CartItem.css';

function CartItem({ product }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeProduct(product.id));    // remove the product from the cart
    };

    return (
        <article className='cart-item'>
            <h4> {product.title} </h4>
            <Link to={`/product-detail/${product.id}`}> <img src={product.thumbnail} alt={product.title} /> </Link>
            <div className='pr'>
                <p> Price: ${product.price} </p>
                <p> {product.rating}⭐ </p>
            </div>
            <button className='remove-button' onClick={handleRemove}> Remove </button>    
        </article>
    );
}

export default CartItem;



