import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ChooseUs from '@/components/ChooseUs'
import AboutUs from '@/components/AboutUs'
import Testimonial from '@/components/Testimonial'
import BlogList from '@/components/BlogList'
import AppSection from '@/components/AppSection'
import Footer from '@/components/Footer'
import PageLayout from './PageLayout'
import BlogPosts from '@/components/BlogPosts'
const Page = () => {
  return (
    <PageLayout>
      <HeroSection/>
      <ChooseUs/>
      <AboutUs/>
      <Testimonial/>
      <BlogPosts showPagination={false}/>
      <AppSection/>
    </PageLayout>
  )
}

export default Page
