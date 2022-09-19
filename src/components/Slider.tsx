import { useEffect, useState } from 'react';
import { carousel } from '../data/data';
import { ICarouselData } from '../data/data';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = (direction: 'next' | 'prev') => {
    if (direction === 'next')
      setCurrentIndex((currentIndex + 1) % carousel.length);
    if (direction === 'prev')
      setCurrentIndex((currentIndex + 2) % carousel.length);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleClick('next');
    if (e.key === 'ArrowLeft') handleClick('prev');
  };

  //useEffect to change the current display on screen
  useEffect(() => {}, [currentIndex]);

  //useEffect to add keyboard left/right functionality
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="bg-slate-50">
      <div className="flex absolute justify-between w-full items-center h-full">
        <button
          className="btn z-10 ml-10 bg-slate-600 hover:bg-slate-800 text-white"
          onClick={() => handleClick('prev')}
        >
          <i className="fa-solid fa-arrow-left text-2xl"></i>
        </button>
        <button
          className="btn z-10 mr-10 bg-slate-600 hover:bg-slate-800 text-white"
          onClick={() => handleClick('next')}
        >
          <i className="fa-solid fa-arrow-right text-2xl"></i>
        </button>
      </div>
      <div className="flex flex-nowrap overflow-hidden">
        {carousel.map((item: ICarouselData, index: number) => (
          <div
            className={
              'h-screen w-screen flex items-center flex-row duration-500 ease-in-out shrink-0 justify-center transition ' +
              '-translate-x-' +
              '[' +
              currentIndex * 100 +
              '%' +
              ']'
            }
            key={index}
          >
            <img
              src={item.img}
              alt={item.alt}
              className="h-2/3 w-auto rounded-3xl mb-2 mask overflow-hidden shrink-0 mr-4 object-cover"
            />
            <div className="flex flex-col justify-center -mt-[100px] h-full items-center">
              <p className="text-[90px]">
                {item.season} {item.title}
              </p>
              <div className="my-10 text-[20px] whitespace-normal w-2/3">
                {item.description}
              </div>
              <button className="btn z-20 w-1/2 text-white bg-slate-600 hover:bg-slate-800">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
