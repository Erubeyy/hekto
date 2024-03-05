import {
  LaConsole,
  LaSneakers,
  LaPerfume,
  LaPresentBox,
  LaWatches,
  LaRing,
} from '../src/assets/images';

interface Product {
  image: string;
  title: string;
  DiscPrice: string;
  OgPrice: string;
}

export const LatestCards: Product[] = [
  {
    image: LaConsole,
    title: 'Game console',
    DiscPrice: '$76.00',
    OgPrice: '$89.00',
  },
  {
    image: LaSneakers,
    title: 'Shoes',
    DiscPrice: '$57.00',
    OgPrice: '$75.00',
  },
  {
    image: LaPerfume,
    title: 'Perfume',
    DiscPrice: '$19.00',
    OgPrice: '$29.00',
  },
  {
    image: LaPresentBox,
    title: 'Present box',
    DiscPrice: '$12.00',
    OgPrice: '$29.00',
  },
  {
    image: LaWatches,
    title: 'Watches',
    DiscPrice: '$67.00',
    OgPrice: '$76.00',
  },
  {
    image: LaRing,
    title: 'Ring',
    DiscPrice: '$56.00',
    OgPrice: '$65.00',
  },
];
