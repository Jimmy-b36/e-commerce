import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { userRequest } from '../helpers/requestMethods';
import { useSelector } from 'react-redux';

const Success = () => {
  const data = useLocation();
  const stripeData = data.state.stripeData;
  const cart = data.state.products;
  // const currentUser = useSelector((state: any) => state.user.currentUser);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post('/order', {
          userId: Math.random() * 10,
          products: cart.products.map((item: any) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.subtotal,
          address: stripeData.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (err) {
        console.error(err);
      }
    };
    data && createOrder();
  }, [cart, data /* , currentUser */]);

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center w-full min-h-[475px]">
        <p className=" text-heading">Order placed successfully</p>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default Success;
