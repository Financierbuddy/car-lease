import React, { useState } from 'react';
import { AppstoreOutlined, CheckOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';

const items = [
    {
        label: 'Information',
        key: 'information',
    },
    // {
    //     label: 'Options',
    //     key: 'options',
    // },
    {
        label: 'Car company',
        key: 'company',
    },

];
const CarInfo = ({ carDetails }) => {
    const [current, setCurrent] = useState('information');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    const LabelText = ({ title, datakey, showValue=false }) => {
        return (
            <div className='flex items-center gap-2 justify-between w-full max-w-md pt-6'>
                <span className='font-medium text-[#225B81] flex-1'>
                    {title}
                </span>
                {
                    showValue ? 
                    <span className='font-normal flex-1'>
                    {datakey ? datakey : "-"}
                </span>
                :
                <span className='font-normal flex-1'>
                    {carDetails[datakey] ? carDetails[datakey] : "-"}
                </span>
                }
               
            </div>
        )
    }

    const CarOption = ({ text }) => {
        return (
            <div className='p-3 px-5 rounded-lg flex items-center  gap-2 bg-[#F8FAFCB8]'>
                <CheckOutlined className='text-[var(--main)]'/>
                <span>{text}</span>
            </div>
            )
        }

    return (
        <section className=' p-6 pt-12 lg:p-12   screen_max_width' >

            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            {
                current === 'information' ?
                    <Row gutter={[24, 24]} className='w-full max-w-4xl'>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Brand"} datakey={"brand"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Model"} datakey={"model"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Year of construction"} datakey={"year"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Type"} datakey={carDetails?.category?.name} showValue />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Price"} datakey={"unit_price"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Distance"} datakey={"distance"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"License plate"} datakey={"license"} />
                        </Col>
                        {/* <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Bodywork"} datakey={""} />
                        </Col> */}
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Fuel"} datakey={"fuel"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Transmission"} datakey={"transmission"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Engine Capacity"} datakey={"engine_capacity"} />
                        </Col>
                        {/* <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Colour"} datakey={"colour"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"MOT upon delivery"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Mass"} datakey={""} />
                        </Col> */}
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Engine power (kW)"} datakey={"power"} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Number of doors"} datakey={"doors"} />
                        </Col>
                        {/* <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Average consumption"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Emission class"} datakey={""} />
                        </Col> */}
                        {/* <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Consumption city"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Highway consumption"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Cylinder capacity"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Upholstery"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Energy label"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"Top speed"} datakey={""} />
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <LabelText title={"CO2 emissions"} datakey={""} />
                        </Col> */}
                    </Row>
                    :
                    current === 'company' ?
                    <Row gutter={[24, 24]} className='w-full max-w-4xl'>
                        <Col xs={24}>
                            <LabelText title={"Dealer name"} datakey={"company_name"} />
                        </Col>
                        <Col xs={24}>
                            <LabelText title={"Address"} datakey={"address"} />
                        </Col>
                        <Col xs={24}>
                            <LabelText title={"Postal Code"} datakey={"postal_code"} />
                        </Col> 
                        <Col xs={24}>
                            <LabelText title={"Place"} datakey={"city"} />
                        </Col>
                    </Row>
                    :
                    <Row gutter={[24, 24]} className='w-full max-w-4xl py-6'>
                        <Col xs={24}>
                        <div className='text-base font-medium mb-3'>Interior</div>
                        <Row gutter={[16, 16]} className='w-full max-w-4xl'>
                            <Col xs={24} md={12} lg={8}>
                                <CarOption text={"Memory chairs"}/>
                            </Col>
                            <Col xs={24} md={12} lg={8}>
                                <CarOption text={"Memory chairs"}/>
                            </Col>
                            <Col xs={24} md={12} lg={8}>
                                <CarOption text={"Memory chairs"}/>
                            </Col>
                            <Col xs={24} md={12} lg={8}>
                                <CarOption text={"Memory chairs"}/>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
            }

        </section>
    )
};
export default CarInfo;