import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import CarListingHero from '@/assets/CarListingHero.svg'
import LeaseCalculator from './LeaseCalculator';
import HeaderBG from '@/assets/HeaderBG.svg'
import CarListingFilter from './CarListingFilter';
import { Col, Row } from 'antd';

const CarListHero = () => {

    const style = {
        '--imageUrl': `url(${HeaderBG})`,
      };
    return (
        <div style={style} className='h-auto lg:h-[calc(100vh-80px)] w-full  bg-[image:var(--imageUrl)] bg-no-repeat bg-cover bg-center '>
        <div  className={`  flex items-center p-6 pt-16 lg:p-12 lg:gap-16 gap-6 flex-col lg:flex-row screen_max_width`}>
            <Row gutter={[24, { xs: 24, md: 24 }]} className=' items-end'>
            <Col xs={24} md={12} lg={10}>

              <img src={CarListingHero} alt="" />
              </Col>
            {/* </div> */}
            <Col xs={24} md={12} lg={14}>
                <h2 className='heading2 text-white text-center mb-5'>Vragen? Bel me! Ik help u  24/7!</h2>
               <CarListingFilter/>
            </Col>
            </Row>
        </div>
        </div>
    )
}

export default CarListHero
