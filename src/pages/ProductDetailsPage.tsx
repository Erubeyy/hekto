import ProductDetails from '../components/productDetails/ProductDetails';
import { useLocation } from 'react-router-dom';

const ProductDetailsPage = () => {
  const location = useLocation();

  return <ProductDetails product={location.state} />;
};

export default ProductDetailsPage;
