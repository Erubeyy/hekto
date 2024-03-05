import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import Cart from './Cart';
import EmptyCart from './EmptyCart';

const CartAvailable = () => {
  const { addedProducts } = useContext(CartContext);

  return (
    <>
      {addedProducts.length > 0 && <Cart />}
      {addedProducts.length === 0 && <EmptyCart />}
    </>
  );
};

export default CartAvailable;
