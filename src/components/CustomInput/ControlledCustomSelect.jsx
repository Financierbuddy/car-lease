import React from "react";
import { Controller } from "react-hook-form";
import { Select, Tooltip } from "antd";
import { PiWarningCircle } from "react-icons/pi";

export const ControlledCustomSelect = ({
  defaultValue,
  control,
  name,
  placeholder,
  disabled,
  size = "large",
  label,
  icon,
  options,
  mode = undefined,
  limit = null,tooltip
}) => {
  const onSearch = (value) => {
    // console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className="w-full custom_select ">
      <Controller
        control={control}
        name={name}
        // defaultValue={defaultValue}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
           

               {label && <div className='font-pop mb-1 flex items-center gap-1 text-sm line-clamp-1'>
                {icon && icon}
                      {label} 
                      {
                        tooltip &&
                       <Tooltip title={tooltip}>
                        <PiWarningCircle  className='text-gray-600 cursor-pointer' />
                        </Tooltip>
                        }
                        
                        </div>}
           
            {/* <div className='txtRegular text-base font-pop mb-2'>{label}</div> */}
            <Select
              mode={mode}
              size={size}
              // className='w-full outline-none shadow-none hover:shadow-none focus:shadow-none'
              className="  w-full bg-gray-50 outline-none shadow-none hover:shadow-none focus:shadow-none disabled:dark:text-gray-400"
              defaultValue={defaultValue}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
              optionFilterProp="children"
              status={error && "error"}
              maxTagCount={"responsive"}
              {...(value?.length === limit && { open: false })}
              showSearch
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={options}
            />
            {error && (
              <div className="text-red-500 text-xs mt-1 ">{error.message}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export const CustomSelect = ({
  defaultValue,
  placeholder,
  disabled,
  className = "",
  size = "large",
  value,
  onChange,
  options,
  label,
}) => {
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div
      className={`w-auto ${className} ${
        size === "medium" ? "custom_selectv2" : "custom_select"
      } `}
    >
      <>
        {/* <div className='txtRegular text-base font-pop mb-2'>{label}</div> */}
        <Select
          size={size}
          // className=' w-full outline-none shadow-none hover:shadow-none focus:shadow-none'
          className={` w-full ${className} outline-none shadow-none hover:shadow-none focus:shadow-none disabled:dark:text-gray-400`}
          defaultValue={defaultValue}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          optionFilterProp="children"
          showSearch
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={options}
        />
      </>
    </div>
  );
};
