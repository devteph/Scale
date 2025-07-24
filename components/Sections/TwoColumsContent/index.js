import React, { useEffect, useState } from 'react';
import Button from 'components/UI/Button';

function TwoColumnsContent ({ }) {
 

    return (

        <section
            className='py-10 px-7.5 wide:px-10 wide:py-40 grid grid-cols-5 wide:grid-cols-12 gap-y-7.5 wide:gap-y-20 gap-x-7.5 wide:gap-x-10'
        >
            <div
                className='col-span-5 wide:col-span-6'
            >
                <h3
                    className='text-24 wide:text-30'
                >
                    Technical Overview
                </h3>
            </div>
            <div
                className='wide:col-start-7 col-span-5'
            >
                <div
                    className='pb-5 space-y-5 wide:border-b border-borders'
                >
                    <p
                        className='text-12 wide:text-13 opacity-50 uppercase'
                    >
                        location
                    </p>
                    <div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                Single Level, 87,714 (sq.ft.)
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                Protected Loading Dock
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                Seismic Rating: Zone 4
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                Flood Zone: Outside 500-year flood plain
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className='pt-5 wide:pt-10 space-y-5'
                >
                    <p
                        className='text-12 wide:text-13 opacity-50 uppercase'
                    >
                        Power
                    </p>
                    <div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                Substations: 3
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                Feeder Capacity: 30 (MW+)
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                UPS Power Capacity: 15 (MW)
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                UPS Redundancy: N+1
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                               Max Power Density: 250 kW/rack
                            </p>
                        </div>
                        <div
                            className='flex gap-x-2.5'
                        >
                            <span class="material-symbols-outlined">check</span>
                            <p
                                className='text-14'
                            >
                                Generator Capacity: 21 (MW)
                            </p>
                        </div>
                    </div>
                </div>
                <Button
                    className={'mt-7.5 wide:mt-20'}
                    type='secondary'
                    label={'Read More'}
                    onClick={() => {
                        navigateTo(link);
                    }}
                />
            </div>
        </section>
    )
}

export default TwoColumnsContent;