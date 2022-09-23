import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import { IProducts, products } from '../data/data';
import Newsletter from '../components/Newsletter';

import { useState } from 'react';
const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const quantityHandler = (direction: string) => {
    let newQuantity = quantity;
    if (direction === 'up') {
      if (quantity === 5) return;
      setQuantity(newQuantity + 1);
    }
    if (direction === 'down') {
      if (quantity === 0) return;
      setQuantity(newQuantity - 1);
    }
  };
  return (
    <>
      <Announcement />
      <NavBar />
      <div>
        {products.map(
          (item: IProducts, index: number) =>
            item.title === 'Van sticker' && (
              <div className="flex justify-center items-center flex-col w-full">
                <div className="w-3/4">
                  <p className="text-heading flex justify-center">
                    {item.title}
                  </p>
                  <div className="flex flex-row items-center justify-around p-10">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="h-auto w-2/3 rounded-lg"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <p className="w-3/4 p-5 pb-10">
                        {item.description} Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ad, voluptas? Et eaque aut
                        quo? Aut facere rerum aliquam repellat nisi iure,
                        impedit expedita ex quaerat fugiat eum illo! Aut, nisi?
                      </p>
                      <p className="text-bold text-xl pb-5">${item.price}</p>
                      <div className="flex flex-row">
                        {/* need to add useState to set quantity */}
                        <button onClick={() => quantityHandler('down')}>
                          <i className="fa-solid fa-minus pr-2"></i>
                        </button>
                        <p className="flex items-center px-5 mx-4 border-black border rounded-lg">
                          {quantity}
                        </p>
                        <button onClick={() => quantityHandler('up')}>
                          <i className="fa-solid fa-plus pl-2 pr-10"></i>
                        </button>
                        <button className="btn text-slate-50">
                          add to cart{' '}
                          <i className="fa-solid fa-cart-plus px-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
