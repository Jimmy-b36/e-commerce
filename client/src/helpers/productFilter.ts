import { IProducts } from '../types';

const productFilter = (
  products: IProducts[],
  filter: { category?: string; size?: string }
) => {
  //could turn this into a big ternary
  if (filter.category === 'All products' && filter.size === 'All sizes')
    return products;

  if (filter.category === 'All products')
    return products.filter(product => product.size === filter.size);

  if (filter.size === 'All sizes')
    return products.filter(product =>
      product.category.includes(filter.category || '')
    );

  return products.filter((item: any) =>
    Object.entries(filter).every(([key, value]) => {
      item[key].includes(value);
    })
  );
};

const productSorter = (products: IProducts[], sortBy: string | undefined) => {
  if (sortBy === 'priceasc') return products.sort((a, b) => a.price - b.price);
  if (sortBy === 'pricedesc') return products.sort((a, b) => b.price - a.price);
  if (sortBy === 'newest')
    return products.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  if (sortBy === 'oldest')
    return products.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  return products;
};

export { productFilter, productSorter };
