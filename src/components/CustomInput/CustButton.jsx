import React from 'react'

const CustButton = ({ text, onClick, type="button" }) => {
  return (
    <button type={type} onClick={onClick} className="w-full text-sm font-medium relative rounded-lg px-5 py-3 overflow-hidden group bg-[var(--main)] hover:bg-gradient-to-r gray:from-green-600 hover:to-gray-500 text-white  transition-all ease-out duration-300 cursor-pointer">
      <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <div className="relative text-center w-full ">{text}</div>
    </button>
  )
}
export default CustButton


export const PrimaryCustButton = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className=" text-sm font-medium relative rounded px-5 py-2 overflow-hidden group bg-white hover:bg-gradient-to-r gray:from-green-600 hover:to-gray-500 text-gray-800 border border-gray-700  transition-all ease-out duration-300 cursor-pointer">
      <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative ">{text}</span>
    </div>
  )
}