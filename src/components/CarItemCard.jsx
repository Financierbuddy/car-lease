import React from "react";
import { FaCarRear } from "react-icons/fa6";
import { BsFuelPump } from 'react-icons/bs';
import { GiCarSeat } from 'react-icons/gi';
import {ImInfinite} from 'react-icons/im'
import { Divider } from "antd";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CarItemCard = ({carDetails}) => {


  return (
    <Link to={`/car-details/${carDetails.id}`}>
    <div   className=" w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white pb-6 cursor-pointer select-none">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={carDetails.product_image}
          alt={carDetails.name}
        />
        {/* Badge */}
        <div className="absolute -bottom-3 left-0 bg-[var(--main)] text-white text-xs font-bold px-3 py-1 rounded">
          POPULAR
        </div>
       
      </div>

      {/* Card Content */}
      <div className="pt-6">
        {/* Price */}
        <div className="px-4">
        <div className="text-[var(--main)] text-2xl font-bold mb-3 flex justify-between items-center">
            <div>
                €{carDetails?.unit_price?.toLocaleString()}<span className="text-gray-500 text-sm font-medium">/pm</span>
            </div>
            <div className="w-10 cursor-pointer h-10 border rounded-full  flex items-center justify-center border-gray-300">
                <IoHeartOutline/>
            </div>
        </div>
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {carDetails.name}
        </h3>
        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-1">
          {carDetails.description}
        </p>
        </div>
<Divider/>
        {/* Features */}
        <div className="flex justify-between gap-2 flex-wrap items-center text-sm text-gray-500 px-4">
          {/* Icon 1 */}
          <div className="flex items-center gap-1  overflow-hidden">
          <FaCarRear className="text-[var(--main)]"/>
            Hatchback
          </div>
          {/* Icon 2 */}
          <div className="flex items-center gap-1  overflow-hidden">
           <BsFuelPump className="text-[var(--main)]"/>
            {
              carDetails?.fuel
            }
          </div>
          {/* Icon 3 */}
          <div className="flex items-center gap-1  overflow-hidden">
           <GiCarSeat  className="text-[var(--main)]"/>
            {
                carDetails?.doors
            }
          </div>
          {/* Icon 4 */}
          <div className="flex items-center gap-1  overflow-hidden">
           <ImInfinite className="text-[var(--main)]"/>
           {
            carDetails?.transmission
           }
            {/* Manual */}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CarItemCard;
