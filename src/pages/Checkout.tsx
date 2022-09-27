import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useState } from 'react';

const Checkout = () => {
  const [cartTotal, setCartTotal] = useState<number>(10);
  let tax: number = 0;
  const shipping: string = '5.70';
  return (
    <div>
      <Announcement />
      <NavBar />
      <div className="flex justify-center m-10 flex-col items-center">
        <p className="text-heading">Your bag</p>
        <div className="flex xl:justify-around justify-center items-center w-1/2 xs:w-full mt-5 xs:flex-col lg:flex-col lg:w-1/2">
          <a href="" className="text-xl underline m-2  ">
            Shopping bag (2)
          </a>
          <a href="" className="text-xl underline m-2">
            Your wishlist (0)
          </a>
        </div>

        <div className="flex xl:flex-row  flex-col items-center  w-3/4 justify-between mt-5">
          <div className="flex flex-col">
            <div className="flex xl:flex-row flex-col items-center border-b  border-black  w-full p-4">
              <div className="xl:w-1/4 w-full lg:w-1/2">
                <img
                  src="https://github.com/jimmy-btv/e-commerce/blob/main/src/assets/images/Round_Sticker_Mockup_003.jpg?raw=true"
                  alt="Sticker mockup"
                />
              </div>
              <div className="xl:w-1/2 w-full flex  flex-col items-center justify-center xl:border-r xl:border-b-0 xl:border-black border-b border-black">
                <p className="p-2">
                  <strong className="text-xl">Product:</strong> Mockup round
                  sticker
                </p>
                <p className="p-2">
                  <strong className="text-xl">Product ID:</strong> 4235893427895
                </p>
                <p className="p-2">
                  <strong className="text-xl">Material:</strong> Weather proof
                </p>
                <p className="p-2">
                  <strong className="text-xl">Size:</strong> 12cm x 12cm
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-10 xl:border-r xl:border-black">
                <div className="flex flex-row py-2">
                  <strong className="text-xl">Quantity:</strong>{' '}
                  <button>
                    <i className="fa-solid fa-minus px-2"></i>
                  </button>
                  <p className="flex items-center px-5 mx-2 border-black border rounded-lg">
                    2
                  </p>
                  <button>
                    <i className="fa-solid fa-plus px-2"></i>
                  </button>
                </div>
                <p className="py-2">
                  <strong className="text-xl">Individual price:</strong> $10
                </p>
                <p className="py-2">
                  <strong className="text-xl">Total price:</strong> $20
                </p>
              </div>
            </div>

            <div className="flex xl:flex-row flex-col items-center xl:border-b-0 border-b border-black  w-full p-4">
              <div className="xl:w-1/4 w-full lg:w-1/2">
                <img
                  src="https://github.com/jimmy-btv/e-commerce/blob/main/src/assets/images/Round_Sticker_Mockup_003.jpg?raw=true"
                  alt="Sticker mockup"
                />
              </div>
              <div className="xl:w-1/2 w-full flex  flex-col items-center justify-center xl:border-r xl:border-b-0 xl:border-black border-b border-black">
                <p className="p-2">
                  <strong className="text-xl">Product:</strong> Mockup round
                  sticker
                </p>
                <p className="p-2">
                  <strong className="text-xl">Product ID:</strong> 4235893427895
                </p>
                <p className="p-2">
                  <strong className="text-xl">Material:</strong> Weather proof
                </p>
                <p className="p-2">
                  <strong className="text-xl">Size:</strong> 12cm x 12cm
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-10 xl:border-r  xl:border-black">
                <div className="flex flex-row py-2">
                  <strong className="text-xl">Quantity:</strong>{' '}
                  <button>
                    <i className="fa-solid fa-minus px-2"></i>
                  </button>
                  <p className="flex items-center px-5 mx-2 border-black border rounded-lg">
                    2
                  </p>
                  <button>
                    <i className="fa-solid fa-plus px-2"></i>
                  </button>
                </div>
                <p className="py-2">
                  <strong className="text-xl">Individual price:</strong> $10
                </p>
                <p className="py-2">
                  <strong className="text-xl">Total price:</strong> $20
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center text-center xs:w-full w-1/2">
            <p className="text-3xl font-bold p-5 flex justify-center">
              Order Summary
            </p>
            <p className="my-2">
              {' '}
              <strong className="text-xl">SubTotal:</strong> ${cartTotal}
            </p>
            <p className="my-2">
              <strong className="text-xl">Shipping:</strong> ${shipping}
            </p>
            <p className="my-2">
              <strong className="text-xl">Tax:</strong> $
              {(tax = cartTotal * 0.12)}
            </p>
            <p className="my-2">
              <strong className="text-xl">Total:</strong> $
              {cartTotal + tax + +shipping}
            </p>
          </div>
        </div>
        <div className="flex justify-around w-1/2 xs:w-full mt-5 xs:flex-col lg:flex-col lg:w-1/2">
          <button className="btn text-white mb-5 xl:mb-0">
            Continue shopping
          </button>
          <button className="btn text-white mt-5 xl:mt-0 bg-green-500 hover:bg-green-700 hover:border-transparent border-transparent">
            Checkout now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
