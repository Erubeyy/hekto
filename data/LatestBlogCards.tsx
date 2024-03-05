import { LatestBlog1, LatestBlog2, LatestBlog3 } from '../src/assets/images';

interface Blog {
  image: string;
  name: string;
  date: string;
  titleYear: string;
  text: string;
}

export const LatestBlogCards: Blog[] = [
  {
    image: LatestBlog1,
    name: 'Jon Doe',
    date: '21 August, 2023',
    titleYear: '2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.',
  },
  {
    image: LatestBlog2,
    name: 'Jon Doe',
    date: '21 August, 2023',
    titleYear: '2021',
    text: 'Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam. ',
  },
  {
    image: LatestBlog3,
    name: 'Jon Doe',
    date: '21 August, 2023',
    titleYear: '2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.',
  },
];
