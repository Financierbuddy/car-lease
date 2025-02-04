import React from 'react'

const CarBlogCard = ({image, overlay=true}) => {

    const style = {
        '--blogImgUrl': `url(${image})`,
    };

    return (
        <div style={style} className="relative p-5 w-full min-h-48 h-full rounded-xl overflow-hidden shadow-lg cursor-pointer bg-[image:var(--blogImgUrl)] bg-no-repeat bg-cover bg-center flex-col select-none flex justify-end">
           {overlay && <div className="absolute inset-0 bg-black bg-opacity-30"></div>}
            {/* <div className='mb-4 relative'>
                <span className='p-1 px-3 bg-[#4B6BFB] text-sm text-white rounded-lg '>Car Pricing</span>
            </div>
            <h2 className='relative text-white text-xl font-medium line-clamp-1'>{carDetails.title}</h2> */}
        </div>
    )
}

export default CarBlogCard
