export interface IUser {
  save: any;
  userId: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  _doc: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

export interface IProduct {
  save: any;
  title: string;
  description: string;
  img: string;
  price: number;
  size: string;
  alt: string;
  category: [];
  popular: boolean;
}

export interface ICart {
  save: any;
  userId: string;
  products: [{ productId: string; quantity: number }];
}

export interface IOrder {
  save: any;
  userId: string;
  products: [{ productId: string; quantity: number }];
  amount: number;
  address: string;
  status: string;
}

// to make the file a module and avoid the TypeScript error
export {};

declare global {
  namespace Express {
    export interface Request {
      user?: IUser;
    }
  }
}
