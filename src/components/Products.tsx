import { popularProducts } from '../data/data';
import { IPopularProducts } from '../data/data';
import Product from './Product';
const Products = () => {
  return (
    <div>
      <p className="flex justify-center text-[75px] p-5 mt-4">
        Popular products
      </p>
      <div className="flex justify-between flex-wrap p-5">
        {popularProducts.map((item: IPopularProducts, index: number) => (
          <Product {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
