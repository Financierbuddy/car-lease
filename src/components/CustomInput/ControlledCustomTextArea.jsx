import React from 'react'
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

const ControlledCustomTextArea = ({
    defaultValue, control,
    name, placeholder, disabled,
    size = "large", label,
    rows
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                // defaultValue={defaultValue}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                                              {label && <div className=' inputLabelText text-base font-pop mb-2'>{label}</div>}

                        <Input.TextArea
                            rows={rows}
                            size={size}
                            className='rounded-[20px] px-4 py-2.5 w-full outline-none shadow-none hover:shadow-none focus:shadow-none disabled:dark:text-gray-400'
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            value={value}
                            disabled={disabled}
                            onChange={onChange}
                            status={error && 'error'}
                        />
                        {error && <div className='text-red-500 text-xs '>{error.message}</div>}
                    </>
                )} />
        </div>

    )
}

export default ControlledCustomTextArea


export const CustomTextArea = ({
    defaultValue,
     placeholder, disabled,
    size = "large", label,
    value, onChange,
    rows, error
}) => {
    return (
        <div className='w-full '>
            <>
                <div className='txtRegular text-base font-pop mb-2'>{label}</div>
                <Input.TextArea
                    rows={rows}
                    size={size}
                    className=' w-full outline-none shadow-none hover:shadow-none focus:shadow-none dark:disabled:text-gray-300'
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    status={error && 'error'}
                />
            </>
        </div>

    )
}

