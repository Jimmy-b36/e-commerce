import { IProducts } from '../../types';
import Product from './Product';
import { useState, useEffect } from 'react';
import { apiRequest } from '../../helpers/requestMethods';
const PopularProducts = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[]>([]);

  const handleResize = () => {
    window.innerWidth >= 1025 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiRequest('http://localhost:3001/api/product');
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <p className="flex justify-center pt-5 xs:text-3xl sm:text-3xl text-heading">
        Popular Products
      </p>
      <div className="flex flex-wrap justify-around p-5">
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
