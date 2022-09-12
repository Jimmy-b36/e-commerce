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
    img: 'https://img.freepik.com/free-vector/set-white-paper-stickers_107791-6052.jpg?t=st=1662997683~exp=1662998283~hmac=0800ac5312ff3891b44032935f212cfb720d06893df2c005a4badc2bb5e73e97',
    title: 'Mockups',
    description: "Send us your designs and we'll make you an awesome mockup!",
    alt: 'Sticker mockups',
  },
  {
    id: 3,
    img: 'https://img.artpal.com/980411/18-19-3-21-13-8-7m.jpg',
    title: 'Tractor',
    description: 'The most awesome tractor you ever did see',
    season: 'Autumn',
    alt: 'Autumn Tractor',
  },
];

const catagories: ICatagories[] = [
  {
    id: 1,
    name: 'Sticker packs',
  },
  {
    id: 2,
    name: 'Mockups',
  },
  {
    id: 3,
    name: 'Individual Stickers',
  },
];
export { carousel, catagories };
