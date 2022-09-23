import Product from './Product';
import { products } from '../data/data';
import { IProducts } from '../data/data';
import { useState } from 'react';
const Products = () => {
  const [productCategory, setProductCategory] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent) => {
    setProductCategory((e.target as HTMLInputElement).value);
  };
  return (
    <div>
      <p className="flex justify-center text-heading pt-5">{productCategory}</p>
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
          <option>Single stickers</option>
          <option>Sticker packs</option>
        </select>
      </div>

      <div className="flex justify-between flex-wrap p-5">
        {products.map((item: IProducts, index: number) =>
          item.category === productCategory ? (
            <Product {...item} key={index} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Products;
