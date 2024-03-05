import { TopCategories as CategoriesData } from '../../../data/TopCategories';
import { TopPagination } from '../../assets/icons';
import { TopCategorieBG } from '../../assets/backgrounds';

import './TopCategories.scss';

const TopCategories = () => {
  return (
    <>
      <div className="topCategories">
        <h2 className="topCategories__title">Top Categories</h2>
        <div className="topCategories__categories">
          {CategoriesData.map((item) => {
            return (
              <div className="topCategories__categorie" key={item.title}>
                <img
                  className="topCategories__categorie-bg"
                  src={TopCategorieBG}
                  alt="Top-categorie-bg"
                />
                <button className="topCategories__categorie-btn">
                  View Category
                </button>
                <img
                  className="topCategories__categorie-img"
                  src={item.image}
                  alt={item.title}
                />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <img
          className="topCategories__pagination"
          src={TopPagination}
          alt="Top-Pagination"
        />
      </div>
    </>
  );
};

export default TopCategories;
