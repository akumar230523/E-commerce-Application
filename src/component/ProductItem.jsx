import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../utils/cartSlice';
import '../style/ProductItem.css';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addProduct(product));    // add the product to the cart
    };

    return (
        <article className='product-item'>
            <h4> {product.title} </h4>
            <Link to={`/product-detail/${product.id}`}> <img src={product.thumbnail} alt={product.title} /> </Link>
            <div className='pr'>
                <p> Price: ${product.price} </p>
                <p> {product.rating}⭐ </p>
            </div>
            <button className='add-button' onClick={handleAdd}> Add to Cart </button>
        </article>
    );
}

export default ProductItem;



