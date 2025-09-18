import React, { useState, forwardRef } from 'react';
import Image from 'next/image';
import Slider from "react-slick";

const SliderLocations = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 30,
    autoplay: false,
    autoplaySpeed: 2500,
    centerMode: false,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section 
      ref={ref}
      className='relative slider-locations'
    >
      <Slider {...sliderSettings}>
        <div 
          className='h-screen w-full'
        >
          <Image
            src={'/assets/scale-1.png'}
            alt="Logo"
            width={165}
            height={30}
            className="object-cover w-full h-full"
          />
        </div>
        <div 
          className='h-screen w-full'
        >
          <Image
            src={'/assets/scale-2.png'}
            alt="Logo"
            width={165}
            height={30}
            className="object-cover w-full h-full"
          />
        </div>
      </Slider>
      <div 
        className='hidden wide:flex p-10 wide:absolute w-full h-full top-0 left-0 z-20 grid grid-cols-5 wide:grid-cols-12 gap-x-10'
      >
        <div
          className='col-span-4 wide:col-span-6 space-y-10'
        >
            <h3 
              className='text-30 text-white'
            >
              Locations
            </h3>
            <p 
              className='text-50 text-white'
            >
              Optimized for uptime and flexibility.
            </p>
        </div>
      </div>
      <div 
        className='absolute w-full h-full top-0 left-0 z-20'
      >
      
        <div 
          className='h-screen p-7.5 wide:py-20 wide:px-10 grid grid-rows-1 wide:grid-cols-12 gap-x-7.5 wide:gap-x-10 flex items-end wide:items-end'
        >
          
          {/* Slide 1 */}
          <div 
              className={`col-start-1 col-span-5 wide:col-span-6 ${currentSlide === 0 ? 'grid' : 'hidden wide:grid'}`}
          >
            <div 
                className={`pt-5 flex flex-col gap-y-3.7 wide:gap-y-5`}
            >
                <h3 
                    className={`text-24 wide:text-30 text-white`}
                >
                    DAL1
                </h3>
                <p 
                    className={`text-16 wide:text-18 text-white`}
                >
                    1087 Ross Ave, Suite 300
                <span className='block'>Dallas, TX</span>
                </p>
            </div>
          </div>

          {/* Slide 2*/}
          <div 
              className={`col-start-1 col-span-5 wide:col-span-6 ${currentSlide === 1 ? 'grid' : 'hidden wide:grid'}`}
          >
            <div 
                className={`pt-5 flex flex-col gap-y-3.7 wide:gap-y-5`}
            >
                <h3 
                    className={`text-24 wide:text-30 text-white`}
                >
                    OKC1
                </h3>
                <p 
                    className={`text-16 wide:text-18 text-white`}
                >
                    600 NW 62nd Street
                <span className='block'>Oklahoma City, OK</span>
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default SliderLocations;

