import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import FilterContextProvider from './store/filters-context';
import CartContextProvider from './store/cart-context';

const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyProducts = lazy(() => import('./pages/ProductsPage'));
const LazyProductDetails = lazy(() => import('./pages/ProductDetailsPage'));
const LazyCartPage = lazy(() => import('./pages/CartPage'));

function App() {
  return (
    <CartContextProvider>
      <FilterContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<LazyHomePage />} />
              <Route path="/products" element={<LazyProducts />} />
              <Route path="/productDetails" element={<LazyProductDetails />} />
              <Route path="/cart" element={<LazyCartPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Suspense>
      </FilterContextProvider>
    </CartContextProvider>
  );
}

export default App;
