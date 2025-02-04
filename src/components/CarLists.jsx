import React from 'react'
import CarItemCard from './CarItemCard'
import { Col, Row } from 'antd'
import CustButton from './CustomInput/CustButton'
import { useGetRequestsQuery } from '@/apis/apiSlice'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

const CarLists = ({ title = "Featured Listing" }) => {

  const { data, isLoading, error } = useGetRequestsQuery('/products')

  const carlist = data?.data?.data ? data.data.data : []

  const navigation = useNavigate()
  if (isLoading && !error) {
    return <div><Loading /></div>
  }
  return (
    <section className=' p-6 pt-12 lg:p-12   screen_max_width' >
      <h2 className=' heading  text-black mb-5'>
        {title}
      </h2>
      <Row gutter={[24, { sm: 24, lg: 24 }]}>
        {
          carlist.map((car, i) => (
            <Col xs={24} md={12} lg={6} key={i}>
              <CarItemCard carDetails={car} />
            </Col>
          ))
        }

      </Row>
      <div className=' w-[250px] m-auto mt-10'>
        <CustButton
          text={"Browser more listing"}
          onClick={() => navigation('/car-listing')}
        />
      </div>
    </section>
  )
}

export default CarLists
