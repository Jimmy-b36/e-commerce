import { catagories } from '../data/data';
import { ICatagories } from '../data/data';
const Catagories = () => {
  return (
    <div className="p-5 bg-container ">
      <p className="text-[75px] flex justify-center p-5 xs:text-3xl sm:text-3xl">
        Catagories
      </p>
      <div className="flex flex-row items-center justify-between p-5 sm:flex-col xs:flex-col ">
        {catagories.map((item: ICatagories, index: number) => (
          <a
            href={`/products/${item.name}`}
            className="flex items-center justify-center w-1/3 h-auto duration-100 ease-in-out transform cursor-pointer hover:scale-105 hover:z-20 xs:w-full sm:w-full"
            key={index}
          >
            <img
              src={item.img}
              alt={item.alt}
              className="object-fill w-full h-full brightness-75 hover:rounded-lg"
            />
            <p className="absolute 2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl xs:text-2xl sm:text-2xl font-bold text-white blur-0 drop-shadow-[2px_2px_8px_#000000]">
              {item.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
