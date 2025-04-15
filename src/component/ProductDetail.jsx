import { useParams, Link } from 'react-router-dom';
import useProducts from '../utils/useProducts';
import '../style/ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();    // get product ID from route
    const { products, loading, error } = useProducts(`https://dummyjson.com/products/${id}`);    // fetch details of a selected product
    
    const product = products;
    if (loading) return <p> Loading... </p>;
    if (error) return <p> {error} </p>;

    return (
        <article className='product-detail-1'>
            <div className='product-detail-2'>
                <div className='product-data'>
                    <div className='data-1'>
                        <img src={product.thumbnail} alt={product.title} width="200" />
                        <h4> <b> {product.title} </b> </h4>
                    </div>
                    <div className='data-2'>
                        <p> Brand: <i> {product.brand} </i> </p>
                        <p> Price: <b> ${product.price} </b>  </p>
                        <p> Rating: <b> {product.rating} </b> </p>
                        <p> Discount: {product.discountPercentage} % </p>
                        <p> Stock: {product.stock} </p>
                        <p> <b> Description: </b> <i> {product.description} </i> </p>
                    </div>
                </div>
                <div className='button'>
                    <Link to='/' className='back-button'> ← Back to Home </Link>
                    <Link to='/products' className='back-button'> ← Back to Product </Link>
                </div> 
            </div>      
        </article>
    );
}

export default ProductDetail;
