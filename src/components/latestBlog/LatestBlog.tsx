import { LatestBlogCards } from '../../../data/LatestBlogCards';
import { Pen, Calendar } from '../../assets/icons';

import './LatestBlog.scss';

const LatestBlog = () => {
  return (
    <>
      <div className="latestBlog">
        <h2 className="latestBlog__title">Leatest Blog</h2>
        <div className="latestBlog__cards">
          {LatestBlogCards.map((item, index) => {
            return (
              <div className="latestBlog__card" key={index}>
                <img src={item.image} alt="latestBlog-card" />
                <div className="latestBlog__card-info">
                  <span>
                    <img src={Pen} alt="pen-icon" />
                    {item.name}
                  </span>
                  <span>
                    <img src={Calendar} alt="pen-icon" />
                    {item.date}
                  </span>
                </div>
                <span className="latestBlog__card-title">
                  Top essential Trends in {item.titleYear}
                </span>
                <p className="latestBlog__card-text">{item.text}</p>
                <span className="latestBlog__card-readMore">Read More</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
