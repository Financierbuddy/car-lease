import { Col, Row } from 'antd'
import React from 'react'
import { ControlledCustomInput, ControlledCustomNumberInput } from '@/components/CustomInput/ControlledCustomInput'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ControlledCustomSelect } from './CustomInput/ControlledCustomSelect';
import CustButton from './CustomInput/CustButton';
import { LiaCarSideSolid } from "react-icons/lia";
import { IoColorPaletteOutline, IoPricetagOutline, IoSettingsOutline } from 'react-icons/io5';
import { FiTool } from 'react-icons/fi';
import { TbHexagonalPrism, TbRoad } from 'react-icons/tb';
import { BsFuelPump } from 'react-icons/bs';


const CarListingFilter = () => {

    const schema = yup.object().shape({
        productName: yup.string().required("Field is required"),
        productDescription: yup.string().required("Field is required"),
        productPrice: yup.number()
            .typeError('Quantity must be a number')
            .required('This field is required'),
        productLink: yup.string()
            .nullable()
            .notRequired() // Mark as optional
            .url('Please enter a valid URL'),
    });

    const { control, handleSubmit } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
    });


    return (
        <div className='rounded-xl bg-white p-8 shadow-lg'>
            <h2 className='text-center mb-8  text-lg font-semibold'>Find your lease car</h2>

            <Row gutter={[24, { xs: 16, md: 16 }]} className='items-end'>

                <Col xs={24} md={12} lg={6}>
                    <ControlledCustomSelect
                        icon={<LiaCarSideSolid className="text-gray-500" />}
                        name="productName"
                        label={"Brand"}
                        control={control}
                        size='medium'
                        placeholder={'Select Brand'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>



                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<LiaCarSideSolid className="text-gray-500" />}
                        name="productName"
                        label={"Model"}
                        control={control}
                        size='medium'
                        placeholder={'Select Model'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>

                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<IoPricetagOutline className="text-gray-500" />}
                        name="productName"
                        label={"Lease Price"}
                        control={control}
                        size='medium'
                        placeholder={'Select'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<IoColorPaletteOutline className="text-gray-500" />}
                        name="productName"
                        label={"Color"}
                        control={control}
                        size='medium'
                        placeholder={'Select Color'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<FiTool className="text-gray-500" />}
                        name="productName"
                        label={"Construction Year"}
                        control={control}
                        size='medium'
                        placeholder={'Select'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<TbHexagonalPrism className="text-gray-500" />}
                        name="productName"
                        label={"VAT / Margin"}
                        control={control}
                        size='medium'
                        placeholder={'VAT / Margin'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<BsFuelPump className="text-gray-500" />}
                        name="productName"
                        label={"Fuel"}
                        control={control}
                        size='medium'
                        placeholder={'Select'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<IoSettingsOutline className="text-gray-500" />}
                        name="productName"
                        label={"Transmission"}
                        control={control}
                        size='medium'
                        placeholder={'Select'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<TbRoad className="text-gray-500" />}
                        name="productName"
                        label={"Mileage"}
                        control={control}
                        size='medium'
                        placeholder={'Select Mileage'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <ControlledCustomSelect
                        icon={<LiaCarSideSolid className="text-gray-500" />}
                        name="productName"
                        label={"Kind"}
                        control={control}
                        size='medium'
                        placeholder={'Select Kind'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>
                <Col xs={24} md={12} lg={6}>

                    <button className="w-full text-sm  font-medium relative rounded-lg px-5 py-1.5 overflow-hidden group   text-gray-500 border  cursor-pointer">
                        <div className="relative text-center w-full ">Reset</div>
                    </button>
                </Col>

                <Col xs={24} md={12} lg={6}>
                    <button type={'submit'} className="w-full text-sm font-medium relative rounded-lg px-5 py-1.5 overflow-hidden group bg-[var(--main)] hover:bg-gradient-to-r gray:from-green-600 hover:to-gray-500 text-white  transition-all ease-out duration-300 cursor-pointer">
                        <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <div className="relative text-center w-full ">Apply filter</div>
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default CarListingFilter
