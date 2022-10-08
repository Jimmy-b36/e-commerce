import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProducts } from '../../types';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';

interface IProductProps extends IProducts {
  isMobile?: boolean;
}

const Product = (props: IProductProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { isMobile, ...product } = props;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    const { isMobile, quantity, ...product } = props;
    dispatch(addProduct({ ...product, quantity: 1 } as any));
  };
  return (
    <div
      className="flex flex-col items-center justify-center p-3 2xl:w-1/4 2xl:h-1/4 xl:w-1/3 lg:h-1/3 lg:w-1/3"
      key={props._id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMobile ? (
        <a href={`/product/${props._id}`}>
          <img
            src={props.img}
            alt={props.alt}
            className="w-full h-full transition duration-500 ease-in-out scale-105 rounded-lg cursor-pointer brightness-75"
          />
          <div className=" absolute justify-center flex flex-col items-center text-lg text-slate-50 font-bold drop-shadow-[2px_2px_8px_#000000]">
            {' '}
            <p className="p-2">{props.title}</p>
            <p className="p-2">{props.description}</p>
            <p className="p-2">${props.price}</p>
            <button className="m-2 btn text-slate-50">
              add to cart <i className="px-2 fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </a>
      ) : isHovered ? (
        <>
          <Link
            to={`/product/${props._id}`}
            className={'flex items-center justify-center'}
          >
            <img
              src={props.img}
              alt={props.alt}
              className="w-full h-full transition duration-500 ease-in-out scale-105 rounded-lg cursor-pointer brightness-75"
            />
          </Link>
          <div className="absolute justify-center flex flex-col items-center text-2xl text-slate-50 font-bold drop-shadow-[2px_2px_8px_#000000]">
            {' '}
            <p className="p-2">{props.title}</p>
            <p className="p-2">{props.description}</p>
            <p className="p-2">${props.price}</p>
            <button className="m-2 btn text-slate-50" onClick={handleClick}>
              quick add to cart <i className="px-2 fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </>
      ) : (
        <img src={props.img} alt={props.alt} className="w-full h-full " />
      )}
    </div>
  );
};

export default Product;
