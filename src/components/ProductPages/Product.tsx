import { useState, useEffect } from 'react';
import { IProducts } from '../../data/data';

interface IProductProps extends IProducts {
  isMobile?: boolean;
}

const Product = (props: IProductProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="p-3 2xl:w-1/4 2xl:h-1/4 xl:w-1/3 lg:h-1/3 lg:w-1/3 flex flex-col justify-center items-center"
      key={props.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.isMobile ? (
        <>
          <img
            src={props.img}
            alt={props.alt}
            className="w-full h-full brightness-75 scale-105 transition duration-500 ease-in-out rounded-lg cursor-pointer"
          />
          <div className=" absolute justify-center flex flex-col items-center text-lg text-slate-50 font-bold drop-shadow-[2px_2px_8px_#000000]">
            {' '}
            <p className="p-2">{props.title}</p>
            <p className="p-2">{props.description}</p>
            <p className="p-2">${props.price}</p>
            <button className="btn text-slate-50 m-2">
              add to cart <i className="fa-solid fa-cart-plus px-2"></i>
            </button>
          </div>
        </>
      ) : isHovered ? (
        <>
          <img
            src={props.img}
            alt={props.alt}
            className="w-full h-full brightness-75 scale-105 transition duration-500 ease-in-out rounded-lg cursor-pointer"
          />
          <div className="absolute justify-center flex flex-col items-center text-2xl text-slate-50 font-bold drop-shadow-[2px_2px_8px_#000000]">
            {' '}
            <p className="p-2">{props.title}</p>
            <p className="p-2">{props.description}</p>
            <p className="p-2">${props.price}</p>
            <button className="btn text-slate-50 m-2">
              add to cart <i className="fa-solid fa-cart-plus px-2"></i>
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
