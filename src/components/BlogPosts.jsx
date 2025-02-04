import React from 'react'
import Image1 from "@/assets/samples/Image1.png"
import Image2 from "@/assets/samples/Image2.png"
import Image3 from "@/assets/samples/Image3.png"

import { Col, Row } from 'antd'
import ArticleCard from './ArticleCard'
import { useNavigate } from 'react-router-dom'
import { useGetRequestsQuery } from '@/apis/apiSlice'
import Loading from './Loading'



const BlogPosts = () => {

    const { data, isLoading, error } = useGetRequestsQuery('/blogs')

    const blogs = data?.data?.data ? data.data.data : []

    const navigation = useNavigate()

    if (isLoading && !error) {
        return <div><Loading /></div>
    }
    return (
        <section className='p-6 pt-24  lg:p-24 flex flex-col items-center screen_max_width'>
            <div className='p-2 w-[200px] text-center inline-block rounded-full bg-gray-100 text-black font-light mb-6'>Our Blogs ✨</div>
            <h2 className=' heading text-black mb-8'>  Latest news, useful tips and cool deals</h2>
            <div className='w-full'>
            <Row gutter={[24, { xs: 24, md: 24 }]}>
                {
                    blogs.map((blog, i) => (
                        <Col xs={24} md={12} lg={8} key={i}>
                            <ArticleCard blog={blog} />
                        </Col>
                    ))
                }

            </Row>
            </div>

        </section>
    )
}

export default BlogPosts
