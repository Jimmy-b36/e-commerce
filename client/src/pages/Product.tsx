import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Announcement from '../components/Announcement';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiRequest } from '../helpers/requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<any>();
  const dispatch = useDispatch();
  const quantityHandler = (direction: string) => {
    let newQuantity = quantity;
    if (direction === 'up') {
      quantity >= 5 ? (newQuantity = 5) : setQuantity(newQuantity + 1);
    }
    if (direction === 'down') {
      quantity <= 1 ? (newQuantity = 1) : setQuantity(newQuantity - 1);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await apiRequest(
          `http://localhost:3001/api/product/find/${productId}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleClick = (e: any) => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <>
      <Announcement />
      <NavBar />
      <div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-3/4 lg:w-full">
            <p className="flex justify-center pt-8 text-heading xs:text-5xl sm:text-5xl">
              {product?.title}
            </p>
            <div className="flex flex-row items-center justify-around p-10 xs:flex-col sm:flex-col">
              <img
                src={product?.img}
                alt={product?.alt}
                className="w-2/3 h-auto rounded-lg xs:w-full sm:w-full md:w-full lg:w-full"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="w-3/4 p-5 pb-10 xs:w-full sm:w-full">
                  {product?.description} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ad, voluptas? Et eaque aut quo? Aut facere
                  rerum aliquam repellat nisi iure, impedit expedita ex quaerat
                  fugiat eum illo! Aut, nisi?
                </p>
                <p className="pb-5 text-xl text-bold">${product?.price}</p>
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
                  <button className="btn text-slate-50" onClick={handleClick}>
                    add to cart <i className="px-2 fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
