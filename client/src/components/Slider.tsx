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
    <div className="lg:hidden md:hidden sm:hidden xs:hidden xl:hidden">
      <div className="absolute flex items-center justify-between w-full h-full ">
        <button
          className="z-10 ml-10 text-white btn bg-slate-600 hover:bg-slate-800"
          onClick={() => handleClick('prev')}
        >
          <i className="text-2xl fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="z-10 mr-10 text-white btn bg-slate-600 hover:bg-slate-800"
          onClick={() => handleClick('next')}
        >
          <i className="text-2xl fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="flex overflow-hidden flex-nowrap ">
        {carousel.map((item: ICarouselData, index: number) => (
          <div
            // for some reason I have to initiate the translate-x to 100%/200% to get the slider working
            className={
              'h-screen w-screen flex items-center flex-row duration-500 ease-in-out shrink-0 justify-center transition ' +
              '-translate-x-' /* [100%] [200%] */ +
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
              className="object-cover w-auto mb-2 mr-4 overflow-hidden h-2/3 1/3 rounded-3xl mask shrink-0"
            />
            <div className="flex flex-col justify-center -mt-[100px] h-full items-center">
              <p className="text-[90px]">
                {item.season} {item.title}
              </p>
              <div className="my-10 text-[20px] whitespace-normal w-2/3">
                {item.description}
              </div>
              <button className="z-20 w-1/2 text-white btn bg-slate-600 hover:bg-slate-800">
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
