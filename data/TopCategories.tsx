import { TopPerfume, TopBox, TopBracelet, TopRing } from '../src/assets/images';

interface Categorie {
  image: string;
  title: string;
}

export const TopCategories: Categorie[] = [
  {
    image: TopPerfume,
    title: 'Perfume',
  },
  {
    image: TopBox,
    title: 'Present box',
  },
  {
    image: TopBracelet,
    title: 'Bracelet',
  },
  {
    image: TopRing,
    title: 'Ring',
  },
];
