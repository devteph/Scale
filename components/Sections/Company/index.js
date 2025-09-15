import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Locations  ({ }) {

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const target = entry.target;
              if (entry.isIntersecting) {
                target.classList.remove('text-secondary');
                target.classList.add('text-primary');
              } else {
                target.classList.remove('text-primary');
                target.classList.add('text-secondary');
              }
            });
          },
          {
            threshold: 0.5,
            rootMargin: '-50% 0px 10px 0px',
          }
        );
      
        paragraphsRef.current.forEach((el) => {
          if (el) observer.observe(el);
        });
      
        return () => {
          paragraphsRef.current.forEach((el) => {
            if (el) observer.unobserve(el);
          });
        };
      }, []);

    return (

        <section
            className='px-7.5 wide:px-10 wide:pb-40 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10'
        >
            <div
                className='mt-14 wide:mt-40 col-span-5 h-[22rem] wide:h-[36.25rem]'
            >
                <Image
                    src={'/assets/image1.svg'}
                    alt="Logo"
                    width={165}
                    height={30}
                    onClick={() => navigateTo('/')}
                    className="object-cover w-full h-full relative"
                />
            </div>
            <div
                className='wide:col-start-7 col-span-5'
            >
                <div
                    className='py-24 wide:pt-[25rem] wide:pb-[15rem] w-full flex flex-col gap-y-24 wide:gap-y-60'
                >
                    <p
                        ref={(el) => (paragraphsRef.current[0] = el)}
                        className='text-30 wide:text-50 text-secondary'
                    >
                        <span className='text-primary'>Superior datacenters of wholesale megawatt power.</span> 
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[1] = el)}
                        className='text-30 text-secondary'
                    >
                        <span>Engineered for elite performance, security, reliability and massive scale.</span>
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[2] = el)}
                        className='text-30 text-secondary'
                    >
                        <span>Keenly constructed and managed by talented experts.</span>
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[3] = el)}
                        className='text-30 text-secondary'
                    >
                        <span>Future-built for rapid deployment, growth and cost limitations.</span>
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[4] = el)}
                        className='text-30 text-secondary'
                    >
                        <span>Outfitted with the latest processing technology.</span>
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[5] = el)}
                        className='text-30 text-secondary'
                    >
                        <span>Positioned at the forefront of liquid cooling.</span>
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[6] = el)}
                        className='text-30 text-secondary'
                    >
                        <span>Serving the Fortune 500, 100, and even 10.</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Locations;