export interface ICarouselData {
  id: number;
  img: string;
  title: string;
  description: string;
  season?: string;
  alt: string;
}

export interface ICategories {
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
  size: string;
  category: string;
  popular: boolean;
}
