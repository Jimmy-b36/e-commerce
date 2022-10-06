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
  _id: string;
  img: string;
  title: string;
  description: string;
  price: number;
  alt: string;
  size: string;
  category: string;
  popular: boolean;
  createdAt: Date;
}

export interface IReduxCartProduct {
  _id?: number;
  title?: string;
  description?: string;
  img?: string;
  categories?: string[] | null;
  size?: string[];
  price?: number;
  inStock?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  quantity: number;
}
