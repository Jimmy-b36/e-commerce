import { IProducts } from '../types';
interface IFilter {
  productCategory: string | undefined;
  productSize: string | undefined;
}
const productFilter = (
  products: IProducts[],
  { productCategory, productSize }: IFilter
) => {
  //could turn this into a big ternary
  if (productCategory === 'All products' && productSize === 'All sizes')
    return products;

  if (productCategory === 'All products')
    return products.filter(product => product.size === productSize);

  if (productSize === 'All sizes')
    return products.filter(product => product.category === productCategory);

  return products.filter(
    item => item.category === productCategory && item.size === productSize
  );
};

export default productFilter;
