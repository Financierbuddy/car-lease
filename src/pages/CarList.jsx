import React from 'react'
import PageLayout from './PageLayout'
import CarListHero from '@/components/CarListHero'
import CarLists from '@/components/CarLists'
import ContactSection from '@/components/ContactSection'

const CarList = () => {
  return (
    <PageLayout>
      <CarListHero/>
      <CarLists/>
      <ContactSection/>
    </PageLayout>
  )
}

export default CarList
