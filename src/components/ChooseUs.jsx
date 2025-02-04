import React from 'react'
import WhyCardSection from './WhyCard'
import ChooseUsBG from '@/assets/ChooseUs.svg'
import { Col, Row } from 'antd';

const ChooseUs = () => {

  const style = {
    '--chooseUs': `url(${ChooseUsBG})`,
  };

  return (
    <section className=' p-6 pt-12 lg:p-12 lg:pt-24 flex gap-12 screen_max_width' >
      <Row gutter={[{  md: 24 }]} className=' w-full'>
        <Col xs={24} lg={12}>
          <div style={style} className='flex  rounded-xl h-[400px] lg:h-full bg-gray-50 w-full  bg-[image:var(--chooseUs)] bg-no-repeat bg-cover bg-center'></div>
        </Col>
        <Col xs={24} lg={12}>
          <div className='flex  flex-col gap-4 pl-0 lg:pl-12'>
            <div className='p-2 w-[200px] text-center inline-block rounded-full bg-gray-100 text-black font-light'>Why Choose Us ✨</div>
            <h2 className=' heading  text-black'>  Flexible leasing tax efficient</h2>
            <div className=' text-black font-light mb-6'>We offer a suitable Financial Lease solution for your situation so that you can focus on what is really important: your business.</div>
            <WhyCardSection />
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default ChooseUs
