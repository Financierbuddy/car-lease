import React from 'react'
import LeaseCalculator from './LeaseCalculator';
import CarImageSwiper from './CarImageSwiper';

const CarDetailsHero = ({carDetails}) => {
    return (
        <div className='h-auto lg:h-[calc(100vh-80px)] w-full  bg-[#F7FBFD] '>
        <div  className={`   screen_max_width`}>
            <div className='flex items-center p-6 pt-16 lg:p-12 lg:gap-16 gap-6 flex-col lg:flex-row'>
            <div className='flex-1 w-[400px] lg:h-[600px] h-[400px]'>
            <div className="heading text-black">{carDetails.name}</div>
            <div className='text-[var(--main)] text-2xl font-bold mb-3'>
                €{carDetails?.unit_price?.toLocaleString()}<span className="text-gray-400 text-sm font-medium"> / pm</span>
            </div>
               
               <CarImageSwiper images={[carDetails?.product_image]}/>
            </div>
            <div className='max-w-sm w-full '>
               <LeaseCalculator/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default CarDetailsHero
