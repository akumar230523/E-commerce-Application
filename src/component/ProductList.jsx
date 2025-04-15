import { useState } from 'react';
import useProducts from '../utils/useProducts';
import ProductItem from './ProductItem';
import '../style/ProductList.css';

function ProductList() {
    const { products, loading, error } = useProducts("https://dummyjson.com/products");    // fetch the list of products from an API
    const [searchProduct, setSearchProduct] = useState('');

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())    // search feature to filter products
    );

    if (loading) return <p> Loading... </p>;
    if (error) return <p> {error} </p>;

    return (
        <article className='product-list-1'>
            <h2> Products </h2>
            <input type="text" placeholder="Search Product" onChange={(e) => setSearchProduct(e.target.value)}/>
            <div className='product-list-2'>
                { filteredProducts.length > 0 ? 
                    ( filteredProducts.map((product) => ( <ProductItem key={product.id} product={product}/> )) ) 
                    : 
                    ( <p> <i> No products found. </i> </p> )
                }
            </div>
        </article>
    );
}

export default ProductList;


