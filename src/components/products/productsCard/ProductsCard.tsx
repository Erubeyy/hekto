import { useContext } from 'react';
import { MdStar } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa6';
import { AiOutlineZoomIn } from 'react-icons/ai';
import { FilterContext } from '../../../store/filters-context';
import { Product } from '../../types';
import { useNavigate } from 'react-router-dom';

import './ProductCard.scss';

interface Props {
  products: Product[];
}

const ProductsCard: React.FC<Props> = ({ products }) => {
  const navigate = useNavigate();

  const {
    viewValue,
    appliedFilters,
    paginateProducts,
    pageNumber,
    changePageNumber,
  } = useContext(FilterContext);

  let filteredProducts = [...products];

  function passedFilters(product: Product) {
    if (
      appliedFilters.brandFilter.length > 0 &&
      !appliedFilters.brandFilter.includes(product.brand)
    ) {
      return false;
    }

    if (
      appliedFilters.categoryFilter.length > 0 &&
      !appliedFilters.categoryFilter.includes(product.category)
    ) {
      return false;
    }

    if (
      appliedFilters.colorsFilter.length > 0 &&
      !appliedFilters.colorsFilter.some((color) =>
        product.colors.includes(color)
      )
    ) {
      return false;
    }

    if (
      appliedFilters.ratingFilter > 0 &&
      Math.round(product.rating.value) !== appliedFilters.ratingFilter
    ) {
      return false;
    }

    if (
      appliedFilters.discountFilter > 0 &&
      product.discountPercentage < appliedFilters.discountFilter
    ) {
      return false;
    }

    if (
      appliedFilters.priceFilter.length === 2 &&
      (product.price < appliedFilters.priceFilter[0] ||
        product.price > appliedFilters.priceFilter[1])
    ) {
      return false;
    }

    return true;
  }

  filteredProducts = filteredProducts.filter(passedFilters);

  const paginatedProducts = paginateProducts(filteredProducts);

  const handleProductDetails = (product: Product) => {
    navigate('/productDetails', { state: product });
  };

  return (
    <div className="productsConatiner">
      <div className={`productCardContainer-${viewValue}`}>
        {paginatedProducts[pageNumber - 1].map((product) => (
          <div
            className={`productCard productCard-${viewValue}`}
            key={product.id}
            onClick={() => handleProductDetails(product)}
          >
            <img
              className={`productCard__img productCard__img-${viewValue}`}
              src={product.imageSet[0]}
              alt="product-img"
            />
            <div
              className={`productCard__content productCard__content-${viewValue}`}
            >
              <div className="productCard__info">
                <div
                  className={`productCard__info-top productCard__info-top-${viewValue}`}
                >
                  <span className="productCard__info-name">{product.name}</span>
                  <div className="productCard__info-rating">
                    {[...Array(5)].map((_item, index) => (
                      <MdStar
                        className="filters__starRating"
                        key={index}
                        fill={
                          index < Math.round(product.rating.value)
                            ? '#f9ba00'
                            : '#e5e0fc'
                        }
                      />
                    ))}
                  </div>
                </div>
                <div
                  className={`productCard__info-price productCard__info-price-${viewValue}`}
                >
                  <span className="productCard__info-afterDsc">
                    ${product.price}
                  </span>
                  <span className="productCard__info-beforeDsc">
                    ${product.wasPrice}
                  </span>
                </div>
                <p className="productCard__info-description">
                  {product.description}
                </p>
              </div>
              <div className="productCard__actions">
                <button className="productCard__actionBtn">
                  <BsCart2 size={16} color="#7e33e0" />
                </button>
                <button className="productCard__actionBtn">
                  <FaRegHeart size={16} color="#7e33e0" />
                </button>
                <button className="productCard__actionBtn">
                  <AiOutlineZoomIn size={16} color="#7e33e0" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* PAGINATION */}
      <div className="pagination">
        {paginatedProducts.map((_item, index) => {
          return (
            <button
              key={index}
              className={`pagination__btn ${
                index === pageNumber - 1 ? 'pagination__btn-selected' : 'none'
              }`}
              onClick={() => changePageNumber(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCard;
