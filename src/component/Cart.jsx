import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import '../style/Cart.css';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartitems);    //  manage the state of cart items

    return (
        <article className='cart-1'>
            <h2> Cart </h2>
            <div className='cart-2'>
                { cartItems.length === 0 ? 
                    ( <p> <i> Your cart is empty. </i> </p> ) 
                    : 
                    ( cartItems.map((item) => <CartItem key={item.id} product={item} /> ))
                } 
            </div>
        </article>
    );
}

export default Cart;


