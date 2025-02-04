import { Col, Collapse, Row } from 'antd'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import Loading from './Loading'
import { useGetRequestsQuery } from '@/apis/apiSlice'


const FAQContent = () => {

    const { data, isLoading, error } = useGetRequestsQuery('/faqs')

    const faqs = data?.data?.data ? data.data.data : []

   
    


    const getItems = (data, index) => [
        {
            key: `${index}+1`,
            label: data.question,
            children: <p>{data.answer}</p>,
        },

    ];
    if(isLoading && !error){
        return <div><Loading/></div>
      }
    return (
        <section className='p-6 lg:p-24 flex flex-col items-center screen_max_width'>
            <Row gutter={[24, { xs: 24, md: 24 }]} className='w-full'>
            <Col xs={24} >
           <h2 className=' text-3xl text-black font-semibold'>What you want to know about financial leasing</h2>

                </Col>
                {
                    faqs.map((faq, i) => (
                        <Col xs={24} lg={12} >
                            <Collapse
                                bordered={true}
                                defaultActiveKey={['1']}
                                expandIcon={() => <FiPlus />}
                                className='w-full border-x-0 border-b-0 border-t border-t-gray-100 bg-white text-black border shadow'
                                items={getItems(faq, i)}
                                expandIconPosition="end"
                            />
                        </Col>
                    ))
                }

            </Row>

        </section>
    )
}

export default FAQContent
