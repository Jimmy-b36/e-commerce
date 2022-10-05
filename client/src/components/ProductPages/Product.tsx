import { useState, useEffect } from 'react';
import { IProducts } from '../../types';

interface IProductProps extends IProducts {
  isMobile?: boolean;
}

const Product = (props: IProductProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="flex flex-col items-center justify-center p-3 2xl:w-1/4 2xl:h-1/4 xl:w-1/3 lg:h-1/3 lg:w-1/3"
      key={props.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.isMobile ? (
        <a href={`/product/${props.id}`}>
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
        <a
          href={`/product/${props.id}`}
          className="flex items-center justify-center"
        >
          <img
            src={props.img}
            alt={props.alt}
            className="w-full h-full transition duration-500 ease-in-out scale-105 rounded-lg cursor-pointer brightness-75"
          />
          <div className="absolute justify-center flex flex-col items-center text-2xl text-slate-50 font-bold drop-shadow-[2px_2px_8px_#000000]">
            {' '}
            <p className="p-2">{props.title}</p>
            <p className="p-2">{props.description}</p>
            <p className="p-2">${props.price}</p>
            <button className="m-2 btn text-slate-50">
              quick add to cart <i className="px-2 fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </a>
      ) : (
        <img src={props.img} alt={props.alt} className="w-full h-full " />
      )}
    </div>
  );
};

export default Product;
