import React from 'react'
import { Controller } from 'react-hook-form';
import { Radio } from 'antd';

export const ControlledRadioGroup = ({
    control,
    name, options,
    label,
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                // defaultValue={defaultValue}

                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                        <div className='flex justify-between gap-2'>
                            <div className='txtRegular text-base font-pop mb-2'>{label}</div>
                            <div>

                                <Radio.Group onChange={onChange} value={value} className='flex flex-1'>
                                    {
                                        options.map((opt) => (
                                            <Radio value={opt.value} className='txtRegular'>{opt.label}</Radio>
                                        ))
                                    }
                                </Radio.Group>
                            </div>

                        </div>
                        {error && <div className='text-red-500 text-xs '>{error.message}</div>}

                    </>
                )} />
        </div>
    )
}

export const CustomRadioGroup = ({ value, onChange, label, options
}) => {
    return (
        <div className='w-full'>
            <div className='txtRegular text-base font-pop mb-2'>{label}</div>
            <Radio.Group onChange={onChange} value={value}>
                {
                    options.map((opt) => (
                        <Radio value={opt.value} className='txtRegular'>{opt.label}</Radio>
                    ))
                }
            </Radio.Group>
        </div>

    )
}

