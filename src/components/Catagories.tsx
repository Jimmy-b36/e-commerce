import { catagories } from '../data/data';
import { ICatagories } from '../data/data';
const Catagories = () => {
  return (
    <>
      <p className="text-[75px] flex justify-center  p-5">Catagories</p>
      <div className="flex flex-row justify-between items-center p-5 ">
        {catagories.map((item: ICatagories, index: number) => (
          <a
            href="/"
            className="flex justify-center items-center hover:scale-105 hover:z-20 h-auto w-1/3 cursor-pointer duration-100 transform ease-in-out"
            key={index}
          >
            <img
              src={item.img}
              alt={item.alt}
              className="h-full object-fill w-full brightness-75 hover:rounded-lg"
            />
            <p className="absolute text-4xl font-bold text-white blur-0 drop-shadow-[2px_2px_8px_#000000]">
              {item.name}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Catagories;
