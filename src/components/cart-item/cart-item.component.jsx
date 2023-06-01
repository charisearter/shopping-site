import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
	const { name, quantity } = cartItem;
	return (
		<div className='cart-item-containeer'>
			<h2 className='name'>{name}</h2>
			<span className='quantity'>{quantity}</span>
		</div>
	);
};

export default CartItem;
