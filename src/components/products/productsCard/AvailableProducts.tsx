import { useEffect, useState } from 'react';
import { fetchAvailableProducts } from '../../../util/http';
import ProductsCard from './ProductsCard';
import { Product } from '../../types';

const AvailableProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);
      try {
        const response = await fetchAvailableProducts();
        setProducts(response);
        setIsFetching(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to do something exceptional');
        }
        setIsFetching(false);
      }
    }

    fetchProducts();
  }, []);

  if (error) {
    return <h1>An error occurred! {error}</h1>;
  }

  return (
    <>
      {isFetching && <h1>Loading...</h1>}
      {!isFetching && <ProductsCard products={products} />}
    </>
  );
};

export default AvailableProducts;
