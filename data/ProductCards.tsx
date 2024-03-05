import {
  FtBlackWatch,
  FtHeadphones,
  FtLaptop,
  FtWatch,
  TopBracelet,
  TopPerfume,
} from '../src/assets/images';

interface Product {
  image: string;
  title: string;
  code?: string;
  ogPrice?: string;
  discPrice?: string;
}

export const FeaturedCards: Product[] = [
  {
    image: FtWatch,
    title: 'Watches',
    code: 'Code - Y523201',
    ogPrice: '$42.00',
  },
  {
    image: FtHeadphones,
    title: 'Headphones',
    code: 'Code - Y523201',
    ogPrice: '$90.00',
  },
  {
    image: FtLaptop,
    title: 'Laptopp',
    code: 'Code - Y523201',
    ogPrice: '$3 400.00',
  },
  {
    image: FtBlackWatch,
    title: 'Black watches',
    code: 'Code - Y523201',
    ogPrice: '$35.00',
  },
];

export const TrendingCards: Product[] = [
  {
    image: FtBlackWatch,
    title: 'Black watches',
    ogPrice: '$35.00',
    discPrice: '$55.00',
  },
  {
    image: FtLaptop,
    title: 'Laptopp',
    ogPrice: '$89.00',
    discPrice: '$99.00',
  },
  {
    image: FtHeadphones,
    title: 'Headphones',
    ogPrice: '$90.00',
    discPrice: '$99.00',
  },
  { image: FtWatch, title: 'Watches', ogPrice: '$42.00', discPrice: '$62.00' },
];

export const RelatedProductsCards: Product[] = [
  {
    image: FtWatch,
    title: 'Watches',
    code: 'Code - Y523201',
    ogPrice: '$42.00',
  },
  {
    image: FtBlackWatch,
    title: 'Black watches',
    code: 'Code - Y523202',
    ogPrice: '$35.00',
  },
  {
    image: TopPerfume,
    title: 'Perfume',
    code: 'Code - Y523203',
    ogPrice: '$19.00',
  },
  {
    image: TopBracelet,
    title: 'Bracelet',
    code: 'Code - Y523204',
    ogPrice: '$67.00',
  },
];
