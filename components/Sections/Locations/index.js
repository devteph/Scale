import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Locations  ({ }) {
 

    return (

        <section
            className='relative'
        >
            <div
            className='h-screen w-full'
            >
            <Image
                src={'/assets/image2.svg'}
                alt="Logo"
                width={165}
                height={30}
                onClick={() => navigateTo('/')}
                className="object-cover w-full h-full"
            />
            </div>
            <div
            className='absolute w-full h-full top-0 left-0 z-20'
            >
            <div
                className='px-7.5 wide:py-20 wide:px-10 grid grid-cols-5 wide:grid-cols-12 gap-10'
            >
                <div
                className='col-span-5 wide:col-span-4 flex flex-col gap-y-5'
                >
                <div
                    className='border-t border-white/30'>
                    
                </div>
                <h3
                    className='text-24 wide:text-30 text-white/50'
                >
                    DAL1
                </h3>
                <p 
                    className='text-16 wide:text-18 text-white/50'
                >
                    1087 Ross Ave, Suite 300
                    <span className='block'>Dallas, TX</span> 
                </p>
                </div>
                <div
                className='col-span-5 wide:col-span-4 flex flex-col gap-y-5'
                >
                <div
                    className='border-t border-white/30'>
                    
                </div>
                <h3
                    className='text-24 wide:text-30 text-white/50'
                >
                    OKC1
                </h3>
                <p 
                    className='text-16 wide:text-18 text-white/50'
                >
                    600 NW 62nd Street
                    <span className='block'>Oklahoma City, OK</span> 
                </p>
                </div>
                <div
                className='col-span-5 wide:col-span-4 flex flex-col gap-y-5'
                >
                <div
                    className='border-t border-white/30'>
                    
                </div>
                <h3
                    className='text-24 wide:text-30 text-white/50'
                >
                    MPS1
                </h3>
                <p 
                    className='text-16 wide:text-18 text-white/50'
                >
                    3199 Pilot Knob Rd
                    <span className='block'>Eagan, MN</span> 
                </p>
                </div>
            </div>
            </div>
        </section>

    )
}

export default Locations;