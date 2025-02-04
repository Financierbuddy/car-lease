import React from 'react'
import ContactUs from "@/assets/ContactUs.svg"
import AppStore from "@/assets/AppStore.svg"
import PlayStore from "@/assets/PlayStore.svg"
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import CustButton from './CustomInput/CustButton';

const ContactSection = () => {
    const style = {
        '--contactUrl': `url(${ContactUs})`,
    };
    return (
        <div className='bg-gray-50'>
        <section className='p-6 pt-12 flex flex-col items-center screen_max_width  '>
            <div className='rounded-4xl relative overflow-hidden bg-[#06446E] lg:px-24 pl-6 h-auto py-8 lg:py-0  lg:h-[400px] w-full flex justify-between rounded-3xl'>
                <div className='flex-1 flex'>

                    <div className='flex-1 text-white flex flex-col justify-center'>

                        <div className='flex gap-3 mb-8 max-w-sm lg:max-w-lg'>
                            <BiSolidQuoteAltLeft className='text-3xl' />
                            <div className=' text-2xl lg:text-4xl font-medium '>  Niet gevonden wat u zoekt ? Bel mij 24/7</div>
                            <BiSolidQuoteAltRight className='self-end text-3xl' />
                        </div>
                        <div className=' w-[120px]'>
                            <CustButton
                                text={"Contact"}
                                onClick={() => console.log('hello')}

                            />
                        </div>


                    </div>
                </div>
                <div style={style} className='hidden lg:flex flex-1  h-full  w-full bg-[image:var(--contactUrl)] bg-no-repeat bg-contain bg-right-bottom'></div>

                <div className='w-[200px] h-[200px] rounded-full bg-[#3F9EDE3D] absolute -top-[100px] -right-[100px] '></div>
                <div className='w-[200px] h-[200px] rounded-full bg-[#3F9EDE3D] absolute -top-[150px] right-0 '></div>
                <div className='w-[200px] h-[200px] rounded-full bg-[#3F9EDE3D] absolute -bottom-[120px] -left-[50px] '></div>
            </div>

        </section>
        </div>
    )
}

export default ContactSection
