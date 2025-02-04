import { Col, Row } from 'antd'
import React from 'react'
import CarBox from "@/assets/CarBox.svg"
import Car from "@/assets/Car.svg"

const AboutCard = ({title, body, isPrimary, bgImage}) => (
    <div className={`flex-col lg:flex-row w-full h-full border-t flex gap-3 items-center  rounded-xl shadow-lg ${isPrimary ? 'bg-[var(--main)] text-white' : 'bg-white text-black'}`}>
        <div className='flex flex-col gap-3  p-8 '>
            <div className=' text-lg font-semibold  '>  {title}</div>
            <div className=' font-light max-w-2xl leading-6'>{body}</div>
        </div>
        <img src={bgImage} className='w-[200px] self-end ' />
    </div>
)


const AboutCard2 = ({title, body}) => (
    <div className='w-full h-full rounded-xl border p-8 flex flex-col justify-center'>
        <div className=' text-lg font-semibold  '>  {title}</div>
        <div className=' font-light leading-6 mt-3'>{body}</div>
    </div>
)
const AboutUs = () => {
    return (
        <section className='p-6 pt-12 lg:p-24 lg:pt-24 flex flex-col items-center screen_max_width'>

            <div className='p-2 w-[200px] mb-6 text-center inline-block rounded-full bg-gray-100 text-black font-light'>About Us ✨</div>
            
            <h2 className=' heading text-black'>  Information about financial leasing?</h2>
            
            <div className=' text-black font-light my-6 max-w-3xl text-left lg:text-center'>Financial lease is a business lease form. You become the owner of the car immediately, but do not have to pay for it in one go. This allows you to continue to invest in your.</div>
            
            <Row gutter={[24, { xs: 24, md: 24 }]}>
                <Col xs={24} md={16}>
                    <AboutCard bgImage={CarBox} isPrimary={true} title="What is financial lease?" body="Onze leaseadviseurs zoeken de juiste auto en financiering bij onze aangesloten banken. We financieren vrijwel elke auto die online staat en het geld leen je net als een hypotheek bij de bank. " />
                </Col>
                <Col xs={24} md={8}>
                    <AboutCard2 title={"How does financial leasing work?"} body={"Als economisch eigenaar van de auto doe jij de investering dus krijg je belastingvoordelen zoals afschrijving en btw-teruggaaf. Aan het einde van de looptijd is de auto van jou."} />
                </Col>

                <Col xs={24} md={8}>
                    <AboutCard2 title={"Business leasing"} body={"Samen bepalen we met jou de looptijd van het contract en het maandbedrag, Je mag boetevrij aflossen "} />
                </Col>
                <Col xs={24} md={16}>
                    <AboutCard bgImage={Car}  title={"Tax-efficient: full interest deduction, and more"} body={"Starters en/of zzp’er, ook zonder jaarcijfers kan jouw droomauto over 1 week voor de deur staan."} />
                </Col>
            </Row>

        </section>
    )
}

export default AboutUs
