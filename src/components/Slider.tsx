import { useEffect, useState } from 'react';
import data from '../data/data';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleClick = (direction: 'next' | 'prev') => {
    if (direction === 'next') setCurrentIndex((currentIndex + 1) % data.length);
    if (direction === 'prev') setCurrentIndex((currentIndex + 2) % data.length);
  };
  useEffect(() => {}, [currentIndex]);
  return (
    <>
      <div className="flex absolute justify-between w-full items-center h-full">
        <button
          className="btn z-30 ml-4 bg-slate-600"
          onClick={() => handleClick('prev')}
        >
          prev
        </button>
        <button
          className="btn z-30 mr-4 bg-slate-600"
          onClick={() => handleClick('next')}
        >
          next
        </button>
      </div>
      <div className="flex flex-nowrap overflow-hidden">
        {data.map((item, index) => (
          <div
            className={
              'h-screen w-screen flex items-center flex-col duration-500 ease-in-out shrink-0 justify-center transition ' +
              '-translate-x-' +
              '[' +
              currentIndex * 100 +
              '%' +
              ']'
            }
            key={index}
          >
            <p className="text-3xl underline mb-5">
              {item.season} {item.title}
            </p>
            <img src={item.img} alt="" className="h-1/2 w-1/2 rounded-full" />
            <div>{item.description}</div>
            <button className="btn z-40">Shop now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
