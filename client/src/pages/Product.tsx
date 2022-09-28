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
      quantity >= 5 ? (newQuantity = 5) : setQuantity(newQuantity + 1);
    }
    if (direction === 'down') {
      quantity <= 1 ? (newQuantity = 1) : setQuantity(newQuantity - 1);
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
              <div
                className="flex flex-col items-center justify-center w-full"
                key={index}
              >
                <div className="w-3/4 lg:w-full">
                  <p className="flex justify-center pt-8 text-heading xs:text-5xl sm:text-5xl">
                    {item.title}
                  </p>
                  <div className="flex flex-row items-center justify-around p-10 xs:flex-col sm:flex-col">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-2/3 h-auto rounded-lg xs:w-full sm:w-full md:w-full lg:w-full"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <p className="w-3/4 p-5 pb-10 xs:w-full sm:w-full">
                        {item.description} Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ad, voluptas? Et eaque aut
                        quo? Aut facere rerum aliquam repellat nisi iure,
                        impedit expedita ex quaerat fugiat eum illo! Aut, nisi?
                      </p>
                      <p className="pb-5 text-xl text-bold">${item.price}</p>
                      <div className="flex items-center justify-center xs:flex-col sm:flex-col">
                        <div className="flex flex-row items-center justify-center w-full xs:pb-2 sm:pb-2">
                          <button onClick={() => quantityHandler('down')}>
                            <i className="pr-2 fa-solid fa-minus"></i>
                          </button>
                          <p className="flex items-center px-5 mx-4 border border-black rounded-lg">
                            {quantity}
                          </p>
                          <button onClick={() => quantityHandler('up')}>
                            <i className="pl-2 pr-10 fa-solid fa-plus xs:pr-0 sm:pr-0 "></i>
                          </button>
                        </div>
                        <button className="btn text-slate-50">
                          add to cart{' '}
                          <i className="px-2 fa-solid fa-cart-plus"></i>
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
