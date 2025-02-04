import React from 'react'
import Phone from "@/assets/Phone.svg"
import AppStore from "@/assets/AppStore.svg"
import PlayStore from "@/assets/PlayStore.svg"
import { IoCheckmark } from 'react-icons/io5';

const AppSection = () => {
    const style = {
        '--phoneUrl': `url(${Phone})`,
      };
  return (
    <section className='p-6 pt-12 flex flex-col items-center screen_max_width'>
        <div className='rounded-4xl bg-[#06446E] lg:pl-12 pl-6 h-auto py-8 lg:py-0  lg:h-[600px] w-full flex justify-between rounded-3xl'>
            <div className='flex-1 flex'>

            <div className='flex-1 text-white flex flex-col justify-center'>
            
                <div className='p-2 w-[200px] mb-8 text-center inline-block rounded-full bg-gray-100 text-black font-light'>Get started now ✨</div>

                <div className='flex flex-col gap-5 mb-8'>
                    <div className=' text-2xl lg:text-4xl font-semibold '>  Make your search easier with our app</div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-2 items-center lg:text-lg text-sm'> <IoCheckmark className='text-[var(--main)]' /> <div >Save searches and stay informed about new offers</div>  </div>
                    <div className='flex gap-2 items-center lg:text-lg text-sm'> <IoCheckmark className='text-[var(--main)]' /> <div >Save and compare favorite cars</div>  </div>
                    <div className='flex gap-2 items-center lg:text-lg text-sm'> <IoCheckmark className='text-[var(--main)]' /> <div >Follow the status of your application</div>  </div>
                </div>

                <div className='flex gap-3 items-center mt-5 flex-wrap'>
                    <img src={AppStore} alt="app store" className='cursor-pointer' />
                    <img src={PlayStore} alt="play store" className='cursor-pointer' />
                </div>
            </div>
            </div>
            <div style={style} className='hidden lg:flex flex-1  h-full  w-full bg-[image:var(--phoneUrl)] bg-no-repeat bg-contain bg-right-bottom'></div>

        </div>
      
    </section>
  )
}

export default AppSection
