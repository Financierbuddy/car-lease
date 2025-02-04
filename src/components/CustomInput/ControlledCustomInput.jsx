import React from 'react'
import { Controller } from 'react-hook-form';
import { Checkbox, DatePicker, Input, InputNumber, Select, TimePicker, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { FaEye } from 'react-icons/fa6';
import { TbEyeClosed } from 'react-icons/tb';
import { PiWarningCircle } from "react-icons/pi";

export const ControlledCustomInput = ({
    defaultValue, control,
    name, placeholder, disabled,
    size = "large", label, type = "text"
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                // defaultValue={defaultValue}

                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                       {label && <div className=' inputLabelText text-base font-pop mb-1'>{label}</div>}
                        <Input
                            size={size}
                            className='rounded-lg px-4 py-2.5 w-full outline-none shadow-none hover:shadow-none focus:shadow-none disabled:dark:text-gray-400'
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            value={value}
                            type={type}
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


export const ControlledCustomNumberInput = ({
    defaultValue, control,
    name, placeholder, disabled,
    size = "small", label, tooltip=""
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                // defaultValue={defaultValue}

                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                       {label && <div className=' inputLabelText text-base font-pop mb-1 flex items-center gap-1'>{label} 
                       <Tooltip title={tooltip}>
                        <PiWarningCircle  className='text-gray-600 cursor-pointer' />
                        </Tooltip>
                        
                        </div>}
                        <InputNumber
                            prefix="€"
                            size={size}
                            className='text-right   rounded-lg px-4 py-2.5 w-full outline-none shadow-none hover:shadow-none focus:shadow-none disabled:dark:text-gray-400'
                            style={{ textAlign: "right"}}
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

export const CustomFileUploader = ({
    defaultValue, placeholder, disabled,
    size = "large", value, onChange, label, accept
}) => {
    return (
        <div className='w-full '>
            <>
                {label && <div className='inputLabelText text-base font-pop mb-1'>{label}</div>}
                <Input
                    size={size}
                    className='rounded-lg w-full outline-none shadow-none hover:shadow-none focus:shadow-none'
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    value={value}
                    accept={accept}
                    disabled={disabled}
                    onChange={onChange}
                    type='file'
                />
            </>
        </div>
    )
}

export const ControlledPasswordInput = ({
    defaultValue, control,
    name, placeholder, disabled,
    size = "large", label
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                // defaultValue={defaultValue}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                        {label && <div className='inputLabelText text-base font-pop mb-1'>{label}</div>}
                        <Input.Password
                            size={size}
                            className='rounded-lg px-4 py-2.5 w-full outline-none shadow-none hover:shadow-none focus:shadow-none disabled:dark:text-gray-400'
                            // className='rounded-lg disabled:dark:text-gray-400 w-full outline-none shadow-none hover:shadow-none focus:shadow-none'
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            // addonBefore={<><RiLockPasswordLine /></>}
                            iconRender={(visible)=>visible ? <FaEye/> : <TbEyeClosed />}
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


export const ControlledDatePicker = ({
    defaultValue, control,
    name, placeholder, disabled,
    size = "large", label, maxDate = dayjs()
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                // defaultValue={defaultValue}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                        {label && <div className='inputLabelText text-base font-pop mb-1'>{label}</div>}
                        <DatePicker
                            size={size}
                            format="DD-MM-YYYY"
                            value={value}
                            className='rounded-lg w-full outline-none shadow-none hover:shadow-none focus:shadow-none '
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            disabled={disabled}
                            maxDate={maxDate}
                            onChange={onChange}
                            status={error && 'error'}
                        />
                        {error && <div className='text-red-500 text-xs '>{error.message}</div>}
                    </>
                )} />
        </div>
    )
}

export const ControlledTimePicker = ({
    defaultValue, control,
    name, placeholder, disabled,
    size = "large", label, 
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                // defaultValue={defaultValue}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                        <div className='rounded-lg inputLabelText text-base font-pop mb-1'>{label}</div>
                        <TimePicker
                            size={size}
                            // format="DD-MM-YYYY"
                            value={value}
                            className=' w-full outline-none shadow-none hover:shadow-none focus:shadow-none '
                            defaultValue={defaultValue}
                            placeholder={placeholder}
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




export const CustomInput = ({
    defaultValue, placeholder, disabled,
    size = "large", value, onChange, label
}) => {
    return (
        <div className='w-full '>
            <>
                {label && <div className='inputLabelText text-base font-pop mb-1'>{label}</div>}
                <Input
                    size={size}
                    className=' w-full outline-none shadow-none hover:shadow-none focus:shadow-none dark:disabled:text-gray-300'
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                />
            </>
        </div>

    )
}

export const ControlledCheckBox = ({
    control,
    name, label, text
}) => {
    return (
        <div className='w-full '>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <>
                        {/* {label && <div className='inputLabelText text-base font-pop '>{label}</div> */}

                        <Checkbox checked={value} onChange={onChange}>
                            <span className='inputLabelText'> {text}</span>
                        </Checkbox>
                        {error && <div className='text-red-500 text-xs '>{error.message}</div>}
                    </>
                )} />
        </div>

    )
}

