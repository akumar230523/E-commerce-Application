import { useState, useEffect } from 'react';

function useProducts(api) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(api);
                const result = await response.json();
                if (result.products) {
                    setProducts(result.products);
                } else {
                    setProducts(result);
                }
            } catch (err) {
                setError('Failed to fetch products');
                console.error("Fetch Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return { products, loading, error };
}

export default useProducts;
