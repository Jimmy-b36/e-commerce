import { popularProducts } from '../data/data';
import { IPopularProducts } from '../data/data';
import Product from './Product';
const Products = () => {
  return (
    <>
      <p className="flex justify-center text-[75px] p-5 mt-4">
        Popular products
      </p>
      <div className="flex justify-between flex-wrap">
        {popularProducts.map((item: IPopularProducts, index: number) => (
          <Product {...item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Products;
