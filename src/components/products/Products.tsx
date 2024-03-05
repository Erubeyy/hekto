import { useContext, useState } from 'react';
import AvailableFilters from '../filters/AvailableFilters';
import { BreadcrumbEllipse, DownArrowBtn } from '../../assets/icons';
import { TbLayoutList, TbLayoutGrid } from 'react-icons/tb';
import AvailableProducts from './productsCard/AvailableProducts';
import { FilterContext } from '../../store/filters-context';

import './Products.scss';

const Products = () => {
  const { viewValue, toggleView, changePerPage } = useContext(FilterContext);
  const [perPage] = useState('10');

  const handlePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changePerPage(+event.target.value);
  };

  return (
    <>
      <div className="products">
        <div className="products__container">
          <div className="products__topContent">
            <h1>Products </h1>
            <div className="products__menu">
              <span className="products__menu-home">Home</span>
              <img src={BreadcrumbEllipse} alt="Breadcrumb ellipse" />
              <span className="products__menu-products">Products</span>
            </div>
          </div>

          <div className="products__viewSort">
            <div className="products__viewSort-item">
              <span>Per Page</span>
              <div className="products__viewSort-selectContainer">
                <select
                  className="products__viewSort-select"
                  defaultValue={perPage}
                  onChange={handlePerPage}
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
            <div className="products__viewSort-item">
              <span>Sort By</span>
              <div className="products__viewSort-inputContainer ">
                <input
                  disabled
                  type="text"
                  placeholder="Price: High -> Low"
                  className="products__viewSort-input"
                />
                <button>
                  <img
                    src={DownArrowBtn}
                    width={16}
                    height={16}
                    alt="arrow-down-icon"
                  />
                </button>
              </div>
            </div>
            <div className="products__viewSort-item">
              <span>View</span>
              <button
                className="products__viewSort-btn"
                onClick={() => toggleView('grid')}
              >
                <TbLayoutGrid
                  size={24}
                  color={viewValue === 'grid' ? '#FB2E86' : '#000000'}
                />
              </button>
              <button
                className="products__viewSort-btn"
                onClick={() => toggleView('list')}
              >
                <TbLayoutList
                  size={24}
                  color={viewValue === 'list' ? '#FB2E86' : '#000000'}
                />
              </button>
            </div>
          </div>

          <div className="products__content">
            <AvailableFilters />
            <AvailableProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
