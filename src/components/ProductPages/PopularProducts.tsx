import { products } from '../../data/data';
import { IProducts } from '../../data/data';
import Product from './Product';
const PopularProducts = () => {
  return (
    <div>
      <p className="flex justify-center xs:text-3xl sm:text-3xl text-heading pt-5">
        Popular Products
      </p>
      <div className="flex justify-between flex-wrap p-5">
        {products.map(
          (item: IProducts, index: number) =>
            item.popular && <Product {...item} key={index} />
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
