import Hero from '../components/hero/Hero';
import Featured from '../components/featured/Featured';
import Latest from '../components/latest/Latest';
import ItalianSofa from '../components/italianSofa/ItalianSofa';
import Trending from '../components/trending/Trending';
import Discount from '../components/discount/Discount';
import TopCategories from '../components/topCategories/TopCategories';
import Subscribe from '../components/subscribe/subscribe';
import LatestBlog from '../components/latestBlog/LatestBlog';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Latest />
      <ItalianSofa />
      <Trending />
      <Discount />
      <TopCategories />
      <Subscribe />
      <LatestBlog />
    </>
  );
};

export default HomePage;
