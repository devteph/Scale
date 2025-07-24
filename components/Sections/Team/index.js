import React, { useEffect, useState } from 'react';
import Button from 'components/UI/Button';
import ButtonIcon from 'components/UI/ButtonIcon';

function Team ({ }) {
 

    return (

        <section
            className='py-14 px-7.5 wide:px-10 wide:py-40 grid grid-cols-5 wide:grid-cols-12 gap-x-7.5 gap-x-7.5 wide:gap-x-10'
        >
            <div
                className='col-span-5 wide:col-span-6'
            >
                <div
                    className='text-24 wide:text-30'
                >
                    <h1
                        className='pb-5 wide:pb-0'
                    >
                        Team
                    </h1>
                </div>
            </div>
            <div
                className='wide:col-start-7 col-span-5 wide:col-span-6'
            >
                <div
                    className='group pt-10 pb-5 grid grid-cols-2 gap-7.5 wide:gap-10 border-b border-borders cursor-pointer transition-all duration-500'
                >
                    <h1
                        className='text-18'
                    >
                       Neal Rickner
                    </h1>
                    <div
                        className='flex justify-end wide:justify-between text-end wide:text-start'
                    >
                        <p
                            className='text-14 wide:text-13 opacity-50 group-hover:opacity-100 uppercase'
                        >
                            CEO
                        </p>
                        <ButtonIcon
                            className={`wide:group-hover:flex hidden transition-all duration-500`}
                            icon='arrow_outward'
                            variant='secondary'
                        />
                    </div>
                </div> 
                <div
                    className='group pt-10 pb-5 grid grid-cols-2 gap-7.5 wide:gap-10 border-b border-borders cursor-pointer transition-all duration-500'
                >
                    <h1
                        className='text-18'
                    >
                       Andrew Street
                    </h1>
                    <div
                        className='flex justify-end wide:justify-between'
                    >
                        <p
                            className='text-14 wide:text-13 opacity-50 group-hover:opacity-100 uppercase'
                        >
                            CTO
                        </p>
                        <ButtonIcon
                            className={`wide:group-hover:flex hidden transition-all duration-500`}
                            icon='arrow_outward'
                            variant='secondary'
                        />
                    </div>
                </div> 
                <div
                    className='group pt-10 pb-5 grid grid-cols-2 gap-7.5 wide:gap-10 border-b border-borders cursor-pointer transition-all duration-500'
                >
                    <h1
                        className='text-18'
                    >
                       Troy Follak
                    </h1>
                    <div
                        className='flex justify-end wide:justify-between text-end wide:text-start'
                    >
                        <p
                            className='text-14 wide:text-13 opacity-50 group-hover:opacity-100 uppercase'
                        >
                            Chief Product Office
                        </p>
                        <ButtonIcon
                            className={`wide:group-hover:flex hidden transition-all duration-500`}
                            icon='arrow_outward'
                            variant='secondary'
                        />
                    </div>
                </div>
                <div
                    className='group pt-10 pb-5 grid grid-cols-2 gap-7.5 wide:gap-10 border-b border-borders cursor-pointer transition-all duration-500'
                >
                    <h1
                        className='text-18'
                    >
                       Frank Weigand
                    </h1>
                    <div
                        className='flex justify-end wide:justify-between text-end wide:text-start'
                    >
                        <p
                            className='text-14 wide:text-13 opacity-50 group-hover:opacity-100 uppercase'
                        >
                            mechanical engineer
                        </p>
                        <ButtonIcon
                            className={`wide:group-hover:flex hidden transition-all duration-500`}
                            icon='arrow_outward'
                            variant='secondary'
                        />
                    </div>
                </div> 
                <div
                    className='group pt-10 pb-5 grid grid-cols-2 gap-7.5 wide:gap-10 border-b border-borders cursor-pointer transition-all duration-500'
                >
                    <h1
                        className='text-18'
                    >
                       Bill Erdman
                    </h1>
                    <div
                        className='flex justify-end wide:justify-between text-end wide:text-start'
                    >
                        <p
                            className='text-14 wide:text-13 opacity-50 group-hover:opacity-100 uppercase'
                        >
                            Electrical Engineer
                        </p>
                        <ButtonIcon
                            className={`wide:group-hover:flex hidden transition-all duration-500`}
                            icon='arrow_outward'
                            variant='secondary'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;