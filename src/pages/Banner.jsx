import React from 'react';
import banner from '../../public/img/banner.jpg'
import TopNav from './TopNav';

const Banner = () => {
    return (
        <div className='h-[30vh] lg:h-[50vh] relative mb-10'>
            <img className='h-full w-full object-cover' src={banner} alt="" />
            <div className='overlay w-full h-full absolute top-0 left-0 z-10'></div>
            <div className='absolute top-5 z-20 w-full'>
                <TopNav />
            </div>
        </div>
    );
};

export default Banner;