import { products } from '../../data/data';
import { IProducts } from '../../data/data';
import Product from './Product';
import { useState, useEffect } from 'react';
const PopularProducts = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    window.innerWidth >= 1025 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p className="flex justify-center xs:text-3xl sm:text-3xl text-heading pt-5">
        Popular Products
      </p>
      <div className="flex justify-around flex-wrap p-5">
        {products.map(
          (item: IProducts, index: number) =>
            item.popular && (
              <Product {...item} key={index} isMobile={isMobile} />
            )
        )}
      </div>
    </div>
  );
};

export default PopularProducts;