import React from 'react'
import PageLayout from './PageLayout'
import CarDetailsHero from '@/components/CarDetailsHero'
import CarLists from '@/components/CarLists'
import { useParams } from 'react-router-dom'
import { useGetRequestsQuery } from '@/apis/apiSlice'
import Loading from '@/components/Loading'
import CarInfo from '@/components/CarInfo'

const CarDetails = () => {
    const { id } = useParams()

    const { data, isLoading, error } = useGetRequestsQuery(`/products/${id}`, {
        skip: !id
    })

    const carDetails = data?.data ? data.data : {}

    if (isLoading && !error) {
        return <Loading />
    }
    return (
        <PageLayout>

            <CarDetailsHero carDetails={carDetails} />
            <CarInfo carDetails={carDetails}/>
            <CarLists title={"Other Cars"} />
        </PageLayout>
    )
}

export default CarDetails
