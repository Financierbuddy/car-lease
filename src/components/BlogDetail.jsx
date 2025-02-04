import { Row, Col } from 'antd'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { IoTimer } from 'react-icons/io5'
import { useGetRequestsQuery } from '@/apis/apiSlice'
import Loading from './Loading'

const BlogDetail = ({blogDetails}) => {
   

    const { data, isLoading, error } = useGetRequestsQuery('/blogs')
    
        const blogs = data?.data?.data ? data.data.data : []
    
        if (isLoading && !error) {
            return <div><Loading /></div>
        }
    const NewBlog = ({blog})=>(
        <div className='w-full flex gap-3'>
            <img src={blog.blog_media} alt={blog.title} className='w-[120px] h-[120px] rounded-xl object-cover'/>
            <div className='h-[120px]  py-3 flex flex-col justify-between it gap-2'>
                <span className='p-0.5 px-2 text-sm inline  rounded-md bg-[#F0EFFBB2]'>
                {blog.tags?.[0]}
               </span>
                
                <div className='line-clamp-2 font-medium text-base leading-6'>{blog.title}</div>
                <div className='flex items-center gap-2'>
                    <div className='flex gap-1 items-center'>
                        <BiUser/>
                        <span className='text-xs'>Mandeka</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <IoTimer/>
                        <span className='text-xs'>3 min. to read</span>
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <div className='screen_max_width_blog p-6'>
        <Row gutter={24}>
            <Col xs={24} md={16} lg={16}>
               <p className='text-base leading-7'> 
                {blogDetails.content}
                </p> 
            </Col>
            <Col xs={24} md={8} lg={8}>
            <div className='text-lg text-black font-medium py-5 md:pt-0'>New Blog Post</div>
            <div className='flex flex-col gap-5'>
                {
                    blogs.map((blog, i)=>(
                        <NewBlog blog={blog} key={i}/>
                    ))
                }
            </div>
            </Col>

        </Row>
    </div>

  )
}

export default BlogDetail
