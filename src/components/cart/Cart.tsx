import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';

import './Cart.scss';

const Cart = () => {
  const { addedProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);

  const subtotalDebt = addedProducts.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.amount * currentValue.product.price,
    0
  );

  return (
    <div className="cart">
      <div className="cart__content">
        <div className="cart__products">
          {addedProducts.map((item) => {
            return (
              <div key={item.product.id} className="cart__product">
                <img
                  className="cart__product-img"
                  src={item.product.imageSet[0]}
                  alt="product-image"
                />
                <div className="flex-column gap-8">
                  <span className="cart__product-name">
                    {item.product.name}
                  </span>
                  <span className="cart__product-price">
                    ${item.product.price}
                  </span>
                </div>
                <div className="cart__product-actions">
                  <button
                    className="cart__product-btn"
                    onClick={() => {
                      removeProduct(item.product.id);
                    }}
                  >
                    -
                  </button>
                  <span className="cart__product-amount">{item.amount}</span>
                  <button
                    className="cart__product-btn"
                    onClick={() => {
                      addProduct(item.product);
                    }}
                  >
                    +
                  </button>
                </div>
                <span className="cart__product-subtotal">
                  ${(item.product.price * item.amount).toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
        <div className="cart__debt">
          <div className="cart__debt-content">
            <div className="cart__debt-row">
              <span className="cart__debt-title">Subtotal:</span>
              <span>${subtotalDebt.toFixed(2)}</span>
            </div>
            <div className="cart__debt-separator" />
            <div className="cart__debt-row">
              <span className="cart__debt-title">Total:</span>
              <span>${(subtotalDebt + 100).toFixed(2)}</span>
            </div>
            <div className="cart__debt-separator" />
            <div className="cart__debt-row">
              <span className="cart__debt-shipping">Shipping:</span>
              <span className="cart__debt-shipping">$100.00</span>
            </div>
            <button className="cart__debt-btn">Proceed to chekcout</button>
          </div>
          <button className="cart__debt-clear" onClick={clearCart}>
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
