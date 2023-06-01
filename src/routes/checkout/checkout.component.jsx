import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

// import CheckoutItem from '../../checkout-item/checkout-item.component';

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemFromCart } = useContext(
		CartContext
	);

	return (
		<div className='checkout-container'>
			{cartItems.map((cartItem) => {
				const { id, name, quantity } = cartItem;
				return (
					<div key={id}>
						<h2> {name} </h2>
						<span onClick={() => removeItemFromCart(cartItem)}>decrement </span>
						<span>{quantity}</span>
						<span onClick={() => addItemToCart(cartItem)}> increment</span>
					</div>
				);
			})}
		</div>
	);
};

export default Checkout;
