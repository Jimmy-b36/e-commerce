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
  alt: string;
  category: [];
  popular: boolean;
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
