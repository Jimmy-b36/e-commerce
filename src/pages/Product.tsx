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
                className="flex justify-center items-center flex-col w-full"
                key={index}
              >
                <div className="w-3/4 lg:w-full">
                  <p className="text-heading xs:text-5xl sm:text-5xl flex pt-8 justify-center">
                    {item.title}
                  </p>
                  <div className="flex flex-row xs:flex-col sm:flex-col items-center justify-around p-10">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="h-auto w-2/3 xs:w-full sm:w-full md:w-full lg:w-full rounded-lg"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <p className="w-3/4 xs:w-full sm:w-full p-5 pb-10">
                        {item.description} Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ad, voluptas? Et eaque aut
                        quo? Aut facere rerum aliquam repellat nisi iure,
                        impedit expedita ex quaerat fugiat eum illo! Aut, nisi?
                      </p>
                      <p className="text-bold text-xl pb-5">${item.price}</p>
                      <div className="flex xs:flex-col sm:flex-col justify-center items-center">
                        <div className="flex flex-row w-full justify-center items-center xs:pb-2 sm:pb-2">
                          <button onClick={() => quantityHandler('down')}>
                            <i className="fa-solid fa-minus pr-2"></i>
                          </button>
                          <p className="flex items-center px-5 mx-4 border-black border rounded-lg">
                            {quantity}
                          </p>
                          <button onClick={() => quantityHandler('up')}>
                            <i className="fa-solid fa-plus pl-2 pr-10 xs:pr-0 sm:pr-0 "></i>
                          </button>
                        </div>
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
