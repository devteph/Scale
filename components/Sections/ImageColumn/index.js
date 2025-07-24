import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { navigateTo } from "components/Layout/ThemeProvider";
import Link from 'next/link';

export function ImageColumn ({
 
}) {

  return (
        <div
            className='grid grid-cols-5 wide:grid-cols-12 gap-x-7.5 wide:gap-10 wide:relative wide:h-screen'
        >
            <div
                className='w-full wide:w-[43%] h-[24.375rem] wide:h-screen z-10 relative wide:absolute wide:top-0 wide:left-0 col-span-5 wide:col-span-0'
            >
                <Image
                    src={'/assets/ImageBackground1.svg'}
                    alt="Logo"
                    width={165}
                    height={30}
                    onClick={() => navigateTo('/')}
                    className="object-cover w-full h-full"
                />
            </div>
            <div
                className="px-7.5 wide:px-10 pt-20 wide:pt-48 pb-7.5 wide:pb-20 col-span-5 wide:col-start-7 wide:col-span-6 flex flex-col gap-y-12 wide:gap-y-0 wide:justify-between"
            >
                <div
                >
                    <h1
                        className="text-50 wide:text-80"
                    >
                        OKC1
                    </h1>
                    <div
                        className='pt-3.5 wide:pt-5'
                    >
                        <p
                            className='text-24 wide:text-30 text-secondary'
                        >
                            1807 Ross Ave, Suite 300
                            
                        </p>
                        <p
                            className='text-24 wide:text-30 text-secondary'
                        >
                            Dallas, TX
                        </p>
                    </div>
                </div>
                <div
                >
                    <ul 
                        className="flex space-x-5"
                    >
                        <li>
                        <Link href="/" className='text-16 wide:text-18 underline hover:no-underline transition-all duration-500'>Explore</Link>
                        </li>
                        <li>
                        <Link href="/" className='text-16 wide:text-18 underline hover:no-underline transition-all duration-500'>Technical Overview</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ImageColumn;
