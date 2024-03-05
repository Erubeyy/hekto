import { useNavigate } from 'react-router-dom';
import { EmptyCartImg } from '../../assets/images';
import './EmptyCart.scss';

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('../products');
  };

  return (
    <div className="emptyCart">
      <div className="emptyCart__content">
        <img src={EmptyCartImg} alt="" />
        <h3>Your Cart Is Empty</h3>
        <button className="emptyCart__btn" onClick={handleStartShopping}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
