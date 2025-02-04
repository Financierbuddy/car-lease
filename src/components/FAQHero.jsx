import React from 'react'
import HeaderBG from '@/assets/HeaderBG.svg'
import { IoSearch } from 'react-icons/io5';
import { Input } from 'antd';

const FAQHero = () => {
    const style = {
        '--faqsUrl': `url(${HeaderBG})`,
    };
    return (
        <div style={style} className='h-[250px] w-full p-6  bg-[image:var(--faqsUrl)] bg-no-repeat bg-cover bg-center flex items-center justify-center flex-col '>
            <div className=' lg:text-4xl font-bold lg:leading-[70px] text-2xl leading-[40px] mb-2 text-white'>  Frequently Asked Questions</div>
            <Input size="large" placeholder="Search for queries" className='max-w-lg' prefix={<IoSearch />} />
        </div>
    )
}

export default FAQHero
