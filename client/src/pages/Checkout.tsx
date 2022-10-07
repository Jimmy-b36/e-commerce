import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { IReduxCartProduct } from '../types';
import { Link } from 'react-router-dom';
import Pay from '../components/Pay';

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);

  let tax: number = 0;
  const shipping: string = '5.70';
  return (
    <div>
      <Announcement />
      <NavBar />
      <div className="flex flex-col items-center justify-center m-10">
        <p className="text-heading">Your bag</p>
        <div className="flex items-center justify-center w-1/2 mt-5 2xl:justify-around xs:w-full xs:flex-col lg:flex-col lg:w-1/2">
          <a href="" className="m-2 text-xl underline ">
            Shopping bag ({cart.quantity})
          </a>
          <a href="" className="m-2 text-xl underline">
            Your wishlist (0)
          </a>
        </div>

        <div className="flex flex-col items-center justify-between w-3/4 mt-5 2xl:flex-row lg:w-full">
          <div className="flex flex-col">
            {cart.products.map((product: IReduxCartProduct) => (
              <div className="flex flex-col items-center w-full p-4 border-b border-black 2xl:flex-row xl:flex-row lg:flex-row">
                <div className="w-full 2xl:w-1/4 lg:w-1/2">
                  <img src={product.img} alt={product.alt} />
                </div>
                <div className="flex flex-col items-center justify-center w-full border-b border-black 2xl:w-1/2 2xl:border-r 2xl:border-b-0 xl:border-b-0 lg:border-b-0 2xl:border-black">
                  <p className="p-2">
                    <strong className="text-xl">Product:</strong>{' '}
                    {product.title}
                  </p>
                  <p className="p-2">
                    <strong className="text-xl">Product ID:</strong>{' '}
                    {product._id}
                  </p>
                  <p className="p-2">
                    <strong className="text-xl">Material:</strong> Weather proof
                  </p>
                  <p className="p-2">
                    <strong className="text-xl">Size:</strong> {product.size}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center px-10 2xl:border-r 2xl:border-black">
                  <div className="flex flex-row py-2">
                    <strong className="text-xl">Quantity:</strong>{' '}
                    <button>
                      <i className="px-2 fa-solid fa-minus"></i>
                    </button>
                    <p className="flex items-center px-5 mx-2 border border-black rounded-lg">
                      {product.quantity}
                    </p>
                    <button>
                      <i className="px-2 fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <p className="py-2">
                    <strong className="text-xl">Individual price:</strong> $
                    {product.price}
                  </p>
                  <p className="py-2">
                    <strong className="text-xl">Total price:</strong> $
                    {product.price * product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center w-1/2 text-center xs:w-full">
            <p className="flex justify-center p-5 text-3xl font-bold">
              Order Summary
            </p>
            <p className="my-2">
              {' '}
              <strong className="text-xl">SubTotal:</strong> ${cart.subtotal}
            </p>
            <p className="my-2">
              <strong className="text-xl">Shipping:</strong> ${shipping}
            </p>
            <p className="my-2">
              <strong className="text-xl">Tax:</strong> $
              {(tax = cart.subtotal * 0.12).toFixed(2)}
            </p>
            <p className="my-2">
              <strong className="text-xl">Total:</strong> $
              {Number(cart.subtotal + tax + +shipping).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex justify-around w-1/2 mt-5 xs:w-full xs:flex-col lg:flex-col lg:w-1/2">
          <Link to={'/'}>
            <button className="mb-5 text-white btn 2xl:mb-0 xl:mb-0">
              Continue shopping
            </button>
          </Link>

          <button className="mt-5 text-white bg-green-500 border-transparent btn 2xl:mt-0 xl:mt-0 hover:bg-green-700 hover:border-transparent">
            <Pay cart={cart}>CHECKOUT NOW</Pay>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
