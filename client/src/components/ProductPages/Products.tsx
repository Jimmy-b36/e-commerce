import Product from './Product';
import { products } from '../../data/data';
import { IProducts } from '../../types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productFilter from '../../helpers/productFilter';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [productCategory, setProductCategory] = useState<string | undefined>(
    category
  );
  const [productSize, setProductSize] = useState<string | undefined>(undefined);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    setFilteredProducts(
      productFilter(products, { productCategory, productSize })
    );
  }, [productCategory, productSize]);

  const handleResize = () => {
    window.innerWidth >= 850 ? setIsMobile(false) : setIsMobile(true);
  };

  const onChangeHandler = (e: React.ChangeEvent, type: string) => {
    if (type === 'category')
      setProductCategory((e.target as HTMLInputElement).value);
    if (type === 'size') setProductSize((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p className="flex justify-center pt-8 pb-5 text-heading lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl">
        {productCategory}
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <label htmlFor="categories" className="p-2 ml-10">
            Pick a category:
          </label>
          <select
            className="w-full max-w-xs ml-10 select"
            name="categories"
            value={productCategory}
            onChange={e => onChangeHandler(e, 'category')}
          >
            <option disabled selected>
              Category
            </option>
            <option value={'All products'}>All products</option>
            <option value={'Single stickers'}>Single stickers</option>
            <option value={'Sticker packs'}>Sticker packs</option>
          </select>
          <label htmlFor="categories" className="p-2 ml-10">
            Pick a size:
          </label>
          <select
            className="w-full max-w-xs ml-10 select"
            name="sizes"
            value={productSize}
            onChange={e => onChangeHandler(e, 'size')}
          >
            <option disabled selected>
              Size
            </option>
            <option value={'All sizes'}>All sizes</option>
            <option value={'S'}>S</option>
            <option value={'M'}>M</option>
            <option value={'L'}>L</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-5">
        {!filteredProducts.length ? (
          <div>No products available</div>
        ) : (
          filteredProducts.map((item: IProducts, index: number) => (
            <Product {...item} key={index} isMobile={isMobile} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
