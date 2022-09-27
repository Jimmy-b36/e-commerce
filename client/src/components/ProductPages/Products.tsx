import Product from './Product';
import { products } from '../../data/data';
import { IProducts } from '../../data/data';
import { useState, useEffect } from 'react';
const Products = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [productCategory, setProductCategory] =
    useState<string>('All products');

  const handleResize = () => {
    window.innerWidth >= 850 ? setIsMobile(false) : setIsMobile(true);
  };

  const onChangeHandler = (e: React.ChangeEvent) => {
    setProductCategory((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p className="flex justify-center text-heading pt-8 pb-5 lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl">
        {productCategory}
      </p>
      <div className="flex flex-col">
        <label htmlFor="categories" className="ml-10 p-2">
          Pick a category:
        </label>
        <select
          className="select w-full max-w-xs ml-10"
          name="categories"
          value={productCategory}
          onChange={onChangeHandler}
        >
          <option disabled selected>
            Category
          </option>
          <option value={'All products'}>All products</option>
          <option value={'Single stickers'}>Single stickers</option>
          <option value={'Sticker packs'}>Sticker packs</option>
        </select>
      </div>

      <div className="flex justify-between flex-wrap p-5">
        {products.map((item: IProducts, index: number) =>
          productCategory === 'All products' ? (
            <Product {...item} key={index} isMobile={isMobile} />
          ) : item.category === productCategory ? (
            <Product {...item} key={index} isMobile={isMobile} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Products;
