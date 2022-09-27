export interface ICarouselData {
  id: number;
  img: string;
  title: string;
  description: string;
  season?: string;
  alt: string;
}

export interface ICatagories {
  id: number;
  name: string;
  img: string;
  alt: string;
}

export interface IProducts {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  alt: string;
  category: string;
  popular: boolean;
}

const carousel: ICarouselData[] = [
  {
    id: 1,
    img: 'https://img.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-169.jpg?w=1380&t=st=1662996885~exp=1662997485~hmac=a2d5aef28a93f89b76517055183637016df5ef33a09362783937a00cc0c64524',
    title: 'Sale',
    description: "Don't miss out on this summers sticker sale!",
    season: 'Summer',
    alt: 'cartoon stickers',
  },
  {
    id: 2,
    img: 'https://img.freepik.com/free-vector/collection-realistic-paper-stickers_23-2148987749.jpg?w=1380&t=st=1663006802~exp=1663007402~hmac=34565c8d1e655e36cad0ee1a3fa3257ee2beeb6aed4288881fb0d6e413d09fe4',
    title: 'Mockups',
    description: "Send us your designs and we'll make you an awesome mockup!",
    alt: 'Sticker mockups',
  },
  {
    id: 3,
    img: 'https://img.freepik.com/free-vector/acid-travel-stickers-set_52683-83638.jpg?w=1380&t=st=1663006929~exp=1663007529~hmac=a24641b5251d830c512d6149c0ed0e8e452484100b5013950a4cc9d3bd89d916',
    title: 'Custom',
    description: 'We can make any sticker you want, just send us a message!',
    alt: 'World stickers',
  },
];

const catagories: ICatagories[] = [
  {
    id: 1,
    name: 'Sticker Packs',
    img: 'https://img.freepik.com/free-vector/naive-halloween-stickers-collection_52683-68866.jpg?w=1380&t=st=1663005053~exp=1663005653~hmac=0e3afd22fad557ade1965d131abc485ffd61e12f184846ec5b50c64babf07de6',
    alt: 'Sticker packs',
  },
  {
    id: 2,
    name: 'Custom Stickers',
    img: 'https://img.freepik.com/free-psd/top-view-sticker-collection-mock-up_23-2148884462.jpg?w=1380&t=st=1663004888~exp=1663005488~hmac=35b291feeca13904ac98bbcf5ff18c7452fb89e617c1ac858c08b2552f2f6435',
    alt: 'CustomStickers',
  },
  {
    id: 3,
    name: 'Individual Stickers',
    img: 'https://github.com/Jimmy-b36/e-commerce/blob/main/client/src/assets/images/cannon.jpg?raw=true',
    alt: 'IndividualStickers',
  },
];

const products: IProducts[] = [
  {
    id: 1,
    img: 'https://github.com/Jimmy-b36/e-commerce/blob/main/client/src/assets/images/kasturi-roy-caRKch3FR9Q-unsplash.jpg?raw=true',
    title: 'Sticker Pack',
    description: 'This is a sticker pack',
    price: 10,
    alt: 'Sticker Pack',
    category: 'Sticker packs',
    popular: true,
  },
  {
    id: 2,
    img: 'https://github.com/Jimmy-b36/e-commerce/blob/main/client/src/assets/images/done-by-alex-gQMQjJiUGyo-unsplash.jpg?raw=true',
    title: 'Van sticker',
    description: 'This is a van sticker',
    price: 10,
    alt: 'Van sticker',
    category: 'Single stickers',
    popular: true,
  },
  {
    id: 3,
    img: 'https://github.com/Jimmy-b36/e-commerce/blob/main/client/src/assets/images/mk-2-zzHJ3VSKrZg-unsplash%203.jpg?raw=true',
    title: 'Rocket sticker',
    description: 'This is a rocket sticker',
    price: 10,
    alt: 'Rocket sticker',
    category: 'Single stickers',
    popular: true,
  },
  {
    id: 4,
    img: 'https://github.com/Jimmy-b36/e-commerce/blob/main/client/src/assets/images/mk-2-zzHJ3VSKrZg-unsplash%204.jpg?raw=true',
    title: 'Rad sticker',
    description: 'This is a rad sticker',
    price: 10,
    alt: 'Rad sticker',
    category: 'Single stickers',
    popular: false,
  },
  {
    id: 5,
    img: 'https://github.com/Jimmy-b36/e-commerce/blob/main/client/src/assets/images/pineapple-supply-co-CXGf4JgtaXs-unsplash.jpg?raw=true',
    title: 'Pineapple sticker',
    description: 'This is a pineapple sticker',
    price: 10,
    alt: 'Pineapple sticker',
    category: 'Single stickers',
    popular: false,
  },
];

export { carousel, catagories, products };
