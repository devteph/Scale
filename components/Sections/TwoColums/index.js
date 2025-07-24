import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from 'components/UI/Button';

function TwoColumns ({ }) {
 

    return (

        <section
            className='pt-10 px-7.5 wide:px-10 wide:py-40 grid grid-cols-5 wide:grid-cols-12 gap-x-7.5 gap-y-20 wide:gap-10'
        >
            <div
                className='col-span-5 wide:col-span-6'
            >
                <div
                    className='text-24 wide:text-30'
                >
                    <p
                        className=''
                    >
                        Scale
                    </p>
                    <p
                        className=''
                    >
                    Datecenters
                    </p>
                </div>
            </div>
            <div
                className='wide:col-start-7 col-span-5'
            >
                <div
                    className='wide:pb-20 space-y-5 wide:space-y-10'
                >
                    <p
                        className='text-24 wide:text-30'
                    >
                        At Scale Datacenters, we specialize in delivering high-performance hyperscale data center infrastructure optimized for the most demanding workloads, including AI, machine learning, and cloud-native applications.
                    </p>
                    <p
                        className='text-24 wide:text-30 opacity-50'
                    >
                        Our facilities are engineered for maximum density, energy efficiency, and modular scalability, enabling rapid deployment and seamless expansion.
                    </p>
                    <p
                        className='text-24 wide:text-30 opacity-50'
                    >
                        With robust connectivity, industry-leading PUE metrics, and a focus on renewable energy integration, we provide mission-critical environments that meet and exceed the requirements of today’s top-tier hyperscalers and digital enterprises.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TwoColumns;