import React, { useEffect, useState } from 'react';
import Button from 'components/UI/Button';
import Image from 'next/image';
import Input from 'components/UI/Input';

function TwoColumnsForm ({ }) {
 

    return (

        <section
            className='py-10 px-7.5 wide:px-10 wide:py-40 grid grid-cols-5 wide:grid-cols-12 gap-y-7.5 wide:gap-y-20 gap-x-7.5 wide:gap-x-10'
        >
             <div
                className='wide:col-start-1 col-span-5 h-[22rem] wide:h-full'
            >
                <Image
                    src={'/assets/image1.svg'}
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
                <h3
                    className='text-24 wide:text-30'
                >
                    We would love
                </h3>
                <h3
                    className='text-24 wide:text-30'
                >
                    to hear from you
                </h3>
                <div
                    className='mt-14 wide:mt-24 flex flex-col gap-y-5'
                >
                    <Input
                        placeHolder="Name"
                    />
                    <div
                        className='grid grid-cols-2 gap-x-5'
                    >
                        <Input
                            placeHolder="First Name"
                        />
                        <Input
                            placeHolder="Last Name"
                        />
                    </div>
                    <Input
                        placeHolder="Company Name"
                    />
                    <Button
                        className={'mt-7.5 wide:mt-20'}
                        type='secondary'
                        label={'Submit'}
                        onClick={() => {
                            navigateTo(link);
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default TwoColumnsForm;