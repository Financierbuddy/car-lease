import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const PageLayout = ({children}) => {
  return (
    <div className='pt-[80px]'>
      <Navbar/>
      {children}
      <div className='h-16'></div>
      <Footer/>
    </div>
  )
}

export default PageLayout

