import React from 'react'
import HeaderBG from '@/assets/HeaderBG.svg'
import { Col, Input, Row } from 'antd';
import CarBlogCard from './CarBlogCard';
import Frame1 from '@/assets/samples/Frame1.png'
import Frame2 from '@/assets/samples/Frame2.png'
import Frame3 from '@/assets/samples/Frame3.png'
import Frame4 from '@/assets/samples/Frame4.png'
import Frame5 from '@/assets/samples/Frame5.png'


const BlogListingHero = () => {
    const style = {
        '--faqsUrl': `url(${HeaderBG})`,
    };
    return (
        <div style={style} className=' relative bg-[image:var(--faqsUrl)] bg-no-repeat bg-cover bg-left-top '>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className='relative z-10  p-6 flex  flex-col lg:p-16 screen_max_width'>
            <Row gutter={[16, { xs: 16, md: 16 }]}>

                    <Col xs={24} md={12} lg={8}>
                        <div className="flex gap-4 flex-col">
                            <CarBlogCard image={Frame2} />
                            <CarBlogCard image={Frame4}  />
                        </div>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <CarBlogCard image={Frame5} overlay={false}/>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <div className="flex gap-4 flex-col">
                            <CarBlogCard image={Frame3} />
                            <CarBlogCard image={Frame1} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BlogListingHero
