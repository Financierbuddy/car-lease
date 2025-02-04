import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetRequestsQuery } from '@/apis/apiSlice'
import Loading from '@/components/Loading'
import PageLayout from './PageLayout'
import BlogDetailHero from '@/components/BlogDetailHero'
import BlogDetail from '@/components/BlogDetail'

const BlogDetails = () => {

    const { slug } = useParams()

    const { data, isLoading, error } = useGetRequestsQuery(`/blogs/${slug}`, {
        skip: !slug
    })

    const blogDetails = data?.data ? data.data : {}

    if (isLoading && !error) {
        return <Loading />
    }

  return (
    <PageLayout>
        <BlogDetailHero blogDetails={blogDetails}/>
        <BlogDetail blogDetails={blogDetails}/>
    </PageLayout>
  )
}

export default BlogDetails
