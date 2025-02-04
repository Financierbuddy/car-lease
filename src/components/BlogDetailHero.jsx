import React from 'react'
import HeaderBG from '@/assets/HeaderBG.svg'
import { BiChevronLeftCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const BlogDetailHero = ({ blogDetails }) => {
    const style = {
        '--faqsUrl': `url(${HeaderBG})`,
    };

    const navigate = useNavigate()
    return (
        <div>
            <div style={style} className='h-[350px] w-full p-6  bg-[image:var(--faqsUrl)] bg-no-repeat bg-cover bg-top-left pt-[100px]  '>
                <div className='screen_max_width_blog flex flex-col gap-6 px-6 '>
                    <div className='flex items-center gap-4'>
                        <BiChevronLeftCircle onClick={() => navigate(-1)} className='text-white text-3xl cursor-pointer' />
                        <div className='bg-white p-1 px-4 rounded-full text-[#06446E]'>
                            August 19, 2024
                        </div>
                    </div>
                    <div className='text-white text-3xl font-semibold'>{blogDetails.title}</div>
                </div>
            </div>
            <div className='screen_max_width_blog -mt-[150px] px-6'>
                <img
                    src={blogDetails.blog_media} alt=""
                    className='w-full  h-[370px] object-cover rounded-3xl'
                />
            </div>
        </div>
    )
}

export default BlogDetailHero
