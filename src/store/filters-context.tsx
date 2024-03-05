import { PropsWithChildren, createContext, useState } from 'react';
import { Product } from '../components/types';

type FilterValue = string | number | number[];

type ApplyFilterFunction = (value: FilterValue, label: string) => void;

type FiltersObjInterface = {
  brandFilter: string[];
  categoryFilter: string[];
  colorsFilter: string[];
  ratingFilter: number;
  discountFilter: number;
  priceFilter: number[];
};

const initializer = {
  brandFilter: [],
  categoryFilter: [],
  colorsFilter: [],
  ratingFilter: 0,
  discountFilter: 0,
  priceFilter: [],
};

type FiltersContextObj = {
  appliedFilters: FiltersObjInterface;
  viewValue: string;
  applyFilter: (value: FilterValue, label: string) => void;
  toggleView: (text: string) => void;
  productsPerPage: number;
  changePerPage: (page: number) => void;
  paginateProducts: (products: Product[]) => Product[][];
  pageNumber: number;
  changePageNumber: (page: number) => void;
};

// Filter context object
export const FilterContext = createContext<FiltersContextObj>({
  appliedFilters: initializer,
  viewValue: 'list',
  applyFilter: () => {},
  toggleView: () => {},
  productsPerPage: 0,
  changePerPage: () => {},
  paginateProducts: () => [[]],
  pageNumber: 1,
  changePageNumber: () => {},
});

const FilterContextProvider = (props: PropsWithChildren) => {
  const [filters, setFilters] = useState<FiltersObjInterface>(initializer);
  const [view, setView] = useState<string>('list');
  const [perPage, setPerPage] = useState<number>(10);
  const [actualPageNumber, setActualPageNumber] = useState<number>(1);

  const handleApplyFilter: ApplyFilterFunction = (value, label) => {
    if (label === 'Brand') {
      if (!filters.brandFilter.includes(value.toString())) {
        setFilters((prevFilters: FiltersObjInterface) => {
          return {
            ...prevFilters,
            brandFilter: [...prevFilters.brandFilter, value.toString()],
          };
        });
      } else {
        setFilters((prevFilters: FiltersObjInterface) => {
          const index = filters.brandFilter.indexOf(value.toString());
          return {
            ...prevFilters,
            brandFilter: filters.brandFilter.splice(index, 1),
          };
        });
      }
    } else if (label === 'Category') {
      if (!filters.categoryFilter.includes(value.toString())) {
        setFilters((prevFilters: FiltersObjInterface) => {
          return {
            ...prevFilters,
            categoryFilter: [...prevFilters.categoryFilter, value.toString()],
          };
        });
      } else {
        setFilters((prevFilters: FiltersObjInterface) => {
          const index = filters.categoryFilter.indexOf(value.toString());
          return {
            ...prevFilters,
            categoryFilter: filters.categoryFilter.splice(index, 1),
          };
        });
      }
    } else if (label === 'Colors') {
      if (!filters.colorsFilter.includes(value.toString())) {
        setFilters((prevFilters: FiltersObjInterface) => {
          return {
            ...prevFilters,
            colorsFilter: [...prevFilters.colorsFilter, value.toString()],
          };
        });
      } else {
        setFilters((prevFilters: FiltersObjInterface) => {
          const index = filters.colorsFilter.indexOf(value.toString());
          return {
            ...prevFilters,
            colorsFilter: filters.colorsFilter.splice(index, 1),
          };
        });
      }
    } else if (label === 'Rating') {
      setFilters((prevFilters: FiltersObjInterface) => {
        return {
          ...prevFilters,
          ratingFilter: +value,
        };
      });
    } else if (label === 'Discount Percentage') {
      setFilters((prevFilters: FiltersObjInterface) => {
        return {
          ...prevFilters,
          discountFilter: +value,
        };
      });
    } else if (label === 'Price') {
      setFilters((prevFilters: FiltersObjInterface) => {
        return {
          ...prevFilters,
          priceFilter: [...(value as [])],
        };
      });
    }
  };

  const toggleCardsView = (value: string) => {
    setView(value);
  };

  const setProductsPerPage = (page: number) => {
    setPerPage(page);
  };

  const createProductsPagination = (products: Product[]) => {
    if (products.length <= perPage) {
      return [products];
    }

    const result = [];
    let startIndex = 0;

    while (startIndex < products.length) {
      result.push(products.slice(startIndex, startIndex + perPage));
      startIndex += perPage;
    }

    return result;
  };

  const handlePageNumber = (page: number) => {
    setActualPageNumber(page);
  };

  const contextValue: FiltersContextObj = {
    appliedFilters: filters,
    applyFilter: handleApplyFilter,
    viewValue: view,
    toggleView: toggleCardsView,
    productsPerPage: perPage,
    changePerPage: setProductsPerPage,
    paginateProducts: createProductsPagination,
    pageNumber: actualPageNumber,
    changePageNumber: handlePageNumber,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
