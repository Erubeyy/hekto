import { PropsWithChildren, createContext, useState } from 'react';
import { Product } from '../components/types';

interface CartItem {
  product: Product;
  amount: number;
}

type CartContextObj = {
  addedProducts: CartItem[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextObj>({
  addedProducts: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

const CartContextProvider = (props: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { product, amount: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    const productIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );

    if (productIndex !== -1) {
      if (cartItems[productIndex].amount === 1) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.product.id !== productId)
        );
      } else {
        setCartItems((prevItems) => {
          const updatedItems = [...prevItems];
          updatedItems[productIndex] = {
            ...updatedItems[productIndex],
            amount: updatedItems[productIndex].amount - 1,
          };
          return updatedItems;
        });
      }
    }
  };

  const removeAllProducts = () => {
    setCartItems([]);
  };

  const contextValue: CartContextObj = {
    addedProducts: cartItems,
    addProduct: addToCart,
    removeProduct: removeFromCart,
    clearCart: removeAllProducts,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
