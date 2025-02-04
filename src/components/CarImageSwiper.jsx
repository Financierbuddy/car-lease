import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const CarImageSwiper = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="w-full lg:h-[500px] h-[300px] bg-transparent">
    <Swiper
      style={{
        '--swiper-navigation-color': '#565555',
        '--swiper-pagination-color': '#565555',
        background :'none'
      }}
      loop={true}
      spaceBetween={10}
      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      navigation={true}
      modules={[FreeMode,
         Navigation, 
         Thumbs]}
      className="mySwiper2"
    >
      {
        images.map((image, i) => (
          <SwiperSlide key={i} className='bg-transparent'>
          <div style={{ backgroundImage: `url(${image})` }} className='h-full w-full bg-no-repeat bg-contain bg-center bg-transparent '></div>
        </SwiperSlide>
        ))
      }
    </Swiper>

    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
      {
        images.map((image, i) => (
          <SwiperSlide key={i}>
        <div style={{ backgroundImage: `url(${image})` }} className='h-full w-full bg-no-repeat bg-contain bg-center bg-transparent'></div>
      </SwiperSlide>
        ))
      }
    </Swiper>
  </div>
  )
}

export default CarImageSwiper
