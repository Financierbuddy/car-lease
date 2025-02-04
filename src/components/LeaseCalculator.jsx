import { Col, Row } from 'antd'
import React from 'react'
import { ControlledCustomInput, ControlledCustomNumberInput } from '@/components/CustomInput/ControlledCustomInput'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ControlledCustomSelect } from './CustomInput/ControlledCustomSelect';
import CustButton from './CustomInput/CustButton';


const LeaseCalculator = () => {

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
           <h2 className='text-center mb-8  text-lg font-semibold'>Lease Calculator</h2>
           
            <Row gutter={[24, { xs: 24, md: 24 }]}>

                <Col xs={24}>
                    <ControlledCustomNumberInput
                        tooltip='Het maximale leasebedrag is de aanschafwaarde excl. btw. De btw betaal je minimaal zelf aan, of je voldoet dit door middel van inruil. Je kan de btw van het aankoopbedrag(versneld) terugvorderen van de fiscus.'
                        name="productName"
                        label={"Aanschaf"}
                        control={control}
                        placeholder={'0'}
                    />
                </Col>



                <Col xs={24}>
                    <ControlledCustomNumberInput
                        tooltip='Het maximale leasebedrag is de aanschafwaarde excl. btw. De btw betaal je minimaal zelf aan, of je voldoet dit door middel van inruil. Je kan de btw van het aankoopbedrag(versneld) terugvorderen van de fiscus.'
                        name="productName"
                        label={"Leasebedrag"}
                        control={control}
                        placeholder={'0'}
                    />
                </Col>

                <Col xs={24}>
                    <ControlledCustomNumberInput
                        tooltip='Het maximale leasebedrag is de aanschafwaarde excl. btw. De btw betaal je minimaal zelf aan, of je voldoet dit door middel van inruil. Je kan de btw van het aankoopbedrag(versneld) terugvorderen van de fiscus.'
                        name="productName"
                        label={"Slottermijn"}
                        control={control}
                        placeholder={'0'}
                    />
                </Col>

                <Col xs={24}>
                    <ControlledCustomSelect
                        tooltip='Het maximale leasebedrag is de aanschafwaarde excl. btw. De btw betaal je minimaal zelf aan, of je voldoet dit door middel van inruil. Je kan de btw van het aankoopbedrag(versneld) terugvorderen van de fiscus.'
                        name="productName"
                        label={"Looptijd"}
                        control={control}
                        placeholder={'0'}
                        options={[{
                            value: "1", label: "One"
                        }]}
                    />
                </Col>

                <Col xs={24}>
                    <div className='p-4 py-2 bg-[#F7FBFD] rounded-lg text-[var(--main)] flex justify-between items-center'>
                        <div>Maandbedrag </div>
                        <div className='font-medium'>€274 </div>
                    </div>

                </Col>
                <Col xs={24}>

                    <CustButton type="submit" text="Vrijblijvende offerte aanvragen" onClick={() => console.log('hello')} />
                </Col>
            </Row>
        </div>
    )
}

export default LeaseCalculator
