import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Locations  ({ }) {
 

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
                        className='text-30 text-secondary'
                    >
                        <span className='text-primary'>At the core of</span> 
                        <span className='pl-2'>everything</span>
                        <span className='wide:block'> Designed for speed. Built for uptime</span>
                    </p>
                    <p
                        className='text-30 text-secondary'
                    >
                        <span>Purpose built hardware</span>
                        <span> No noise.</span> No bloat. Just raw 
                        <span> performance</span>
                    </p>
                    <p
                        className='text-30 text-secondary'
                    >
                        <span className='wide:block'>Optimized for Scale</span>  
                        <span className='wide:block'> From single rack to hyperscale</span>
                        <span className='wide:block'> deployment — instantly adaptable</span>
                    </p>
                    <p
                        className='text-30 text-secondary'
                    >
                        <span className='wide:block'>Power, secure, and reliability. All in a </span>
                        <span className='wide:block'> system you’ll never have to second</span>
                        <span className='wide:block'> guess</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Locations;