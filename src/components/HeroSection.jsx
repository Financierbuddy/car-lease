import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import heroImg from '@/assets/hero.svg'
import LeaseCalculator from './LeaseCalculator';
import HeaderBG from '@/assets/HeaderBG.svg'

const HeroSection = () => {

    const style = {
        '--imageUrl': `url(${HeaderBG})`,
      };
    return (
        <div style={style} className='h-auto lg:h-[calc(100vh-80px)] w-full  bg-[image:var(--imageUrl)] bg-no-repeat bg-cover bg-center '>
        <div  className={`  flex items-center p-6 pt-16 lg:p-12 lg:gap-16 gap-6 flex-col lg:flex-row screen_max_width`}>
            
            <div className='flex-1 text-white'>
                <div className='flex flex-col gap-5 mb-4 ld:mb-8'>
                    <h2 className=' heading '>  FinancierBuddy, jouw buddy in financieringen!</h2>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-2 items-center lg:text-lg text-base'> <IoCheckmark /> <div >Doorgaans geen jaarcijfers nodig!</div>  </div>
                    <div className='flex gap-2 items-center lg:text-lg text-base'> <IoCheckmark /> <div >Geen aanbetaling is mogelijk!</div>  </div>
                    <div className='flex gap-2 items-center lg:text-lg text-base'> <IoCheckmark /> <div >24/7 bereikbaar!</div>  </div>
                </div>
            </div>
            <div className='flex-1'>
              <img src={heroImg} alt="" />
            </div>
            <div className='flex-1'>
               <LeaseCalculator/>
            </div>
        </div>
        </div>
    )
}

export default HeroSection
