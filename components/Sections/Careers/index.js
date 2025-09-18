import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from 'components/UI/Button';
import { navigateTo } from "components/Layout/ThemeProvider";
import Link from 'next/link';

function Careers  ({ }) {
 

    return (

        <section
            className='pt-10 px-7.5 wide:px-10 wide:py-40 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10'
        >
            <div
                className='col-span-5 h-[22rem] wide:h-[36.25rem]'
            >
                <Image
                    src={'/assets/image3.svg'}
                    alt="Logo"
                    width={165}
                    height={30}
                    onClick={() => navigateTo('/')}
                    className="object-cover w-full h-full"
                />
            </div>
            <div
                className='wide:col-start-7 col-span-5'
            >
                <div
                    className='h-full wide:py-10 flex flex-col justify-center gap-y-7.5 wide:gap-y-10'
                >
                    <h3
                        className='text-30 wide:text-50'
                    >
                        Intelligence and expertise are central to everything we do.
                   </h3>
                    {/* <Button
                        type='secondary'
                        label={'About'}
                        onClick={() => {
                            navigateTo('/about');
                        }}
                    />  */}
                </div>
            </div>
        </section>
    )
}

export default Careers;