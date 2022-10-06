import Product from './Product';
import { products } from '../../data/data';
import { IProducts } from '../../types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productFilter, productSorter } from '../../helpers/productFilter';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [filters, setFilters] = useState<{ category?: string; size?: string }>({
    category: category,
    size: 'All sizes',
  });

  const [sort, setSort] = useState<string | undefined>('newest');
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);

  productFilter(products, filters);
  useEffect(() => {
    (async () => {
      const filtered = await productFilter(products, filters);
      setFilteredProducts(filtered);
    })().catch(console.error);
  }, [filters]);

  useEffect(() => {
    const filtered = [...filteredProducts];
    setFilteredProducts(productSorter(filtered, sort));
  }, [sort]);

  const handleResize = () => {
    window.innerWidth >= 850 ? setIsMobile(false) : setIsMobile(true);
  };

  const onChangeHandler = (e: React.ChangeEvent) => {
    const type = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    setFilters({ ...filters, [type]: value });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p className="flex justify-center pt-8 pb-5 text-heading lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl">
        {filters.category}
      </p>
      <div className="flex justify-center w-full">
        <div className="flex flex-row justify-around w-3/4">
          <div className="flex flex-row">
            <div className="flex flex-col mx-5">
              <label htmlFor="categories" className="p-2 ml-10">
                Pick a category:
              </label>
              <select
                className="w-full max-w-xs ml-10 select"
                name="category"
                onChange={onChangeHandler}
                defaultValue={category}
              >
                <option disabled>Category</option>
                <option value={'All products'}>All products</option>
                <option value={'Single stickers'}>Single stickers</option>
                <option value={'Sticker packs'}>Sticker packs</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="categories" className="p-2 ml-10">
                Pick a size:
              </label>
              <select
                className="w-full max-w-xs ml-10 select"
                name="size"
                onChange={onChangeHandler}
              >
                <option disabled>Size</option>
                <option value={'All sizes'}>All sizes</option>
                <option value={'S'}>S</option>
                <option value={'M'}>M</option>
                <option value={'L'}>L</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="categories" className="p-2 ml-10">
              Sort by
            </label>
            <select
              className="w-full max-w-xs ml-10 select"
              name="sortBy"
              onChange={e => setSort(e.target.value)}
              defaultValue={'newest'}
            >
              <option disabled>Sort</option>
              <option value={'newest'}>Newest</option>
              <option value={'priceasc'}>Price (asc)</option>
              <option value={'pricedesc'}>Price (desc)</option>
              <option value={'oldest'}>Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-start p-5">
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
