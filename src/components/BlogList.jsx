import React from 'react'

import { Col, Pagination, Row } from 'antd'
import ArticleCard from './ArticleCard'
import Loading from './Loading'
import { useGetRequestsQuery } from '@/apis/apiSlice'
import CustButton from './CustomInput/CustButton'
import { useNavigate } from 'react-router-dom'



const BlogList = ({ showPagination = true }) => {

    const { data, isLoading, error } = useGetRequestsQuery('/blogs')

    const blogs = data?.data?.data ? data.data.data : []

    const navigation = useNavigate()

    if (isLoading && !error) {
        return <div><Loading /></div>
    }
    return (
        <section className='p-6 pt-24  lg:p-24 flex flex-col items-center screen_max_width'>
            <h2 className='  text-black mb-8 text-left text-xl font-semibold  w-full'>  Latest Post</h2>
            <Row gutter={[24, { xs: 24, md: 24 }]} className='w-full'>
                {
                    blogs.map((blog, i) => (
                        <Col xs={24} md={12} lg={8} key={i}>
                            <ArticleCard blog={blog} />
                        </Col>
                    ))
                }
            </Row>

            {
                showPagination ?
                    <Pagination align="center" defaultCurrent={1} total={10} className='mt-12' />
                    :
                    <div className=' w-[150px] m-auto mt-10'>
                        <CustButton
                            text={"View more"}
                            onClick={() => navigation('/blog')}
                        />
                    </div>
            }
        </section>
    )
}

export default BlogList
