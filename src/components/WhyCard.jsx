import React from 'react'

const WhyCard = ({title, body, index})=>(
<div className={`flex flex-col gap-3 rounded-xl p-4 px-6 ${index === 0 ? "bg-[var(--main)] text-white" : "bg-[#F4F4F7] text-black"}`}>
    <div className="flex gap-2 items-center ">
        <div className={`w-[32px] rounded-full h-[32px] bg-transparent border ${index === 0 ? "border-white text-white " : "border-gray-500 text-gray-700 "} flex items-center justify-center`}>
            {index+1}
        </div>
        <div className='text-2xl font-medium'>{title}</div>
    </div>
    <div className={`leading-7 text-sm ${index > 0 && "text-gray-700"}`}>{body}</div>
</div>
)

const whys = [
    {
        title : "Buy a car without paying all at once",
        body : "We offer a suitable Financial Lease solution for your situation so that you can focus on what is really important: your business."
    },
    {
        title : "Tax-efficient:full interest deduction",
        body : "Found a car that fits your business? In 10 steps we ensure that you can drive away in your dream car as soon as possible."
    },
    {
        title : "Preservation of assets",
        body : "Found a car that fits your business? In 10 steps we ensure that you can drive away in your dream car as soon as possible."
    }
]

const WhyCardSection = () => {
    
  return (
    <div className='flex flex-col gap-6'>
        {
            whys.map((why, i)=>(
                <WhyCard 
                    index={i}
                    title={why.title} 
                    body={why.body}
                />
            ))
        }
      
      
    </div>
  )
}

export default WhyCardSection
