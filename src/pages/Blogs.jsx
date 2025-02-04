import React from 'react'
import PageLayout from './PageLayout'
import BlogListingHero from '@/components/BlogListingHero'
import BlogList from '@/components/BlogList'

const Blogs = () => {
  return (
    <PageLayout>
      <BlogListingHero/>
      <BlogList/>
    </PageLayout>
  )
}

export default Blogs
