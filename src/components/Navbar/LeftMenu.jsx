import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LeftMenu = () => {
  const links = [
    {
      label : "Home",
      path : "/home"
    },
    {
      label : "Lease",
      path : "/car-listing"
    },
    {
      label : "FAQ's",
      path : "/faqs"
    },
    {
      label : "Blogs",
      path : "/blogs"
    },
    // {
    //   label : "Product",
    //   path : "/product"
    // }
  ]

  return (
    <div className='flex h-auto md:h-full flex-col md:flex-row items-start md:items-center justify-start  md:justify-center gap-6 font-medium text-sm p-5 pb-0 md:p-0'>
      {
        links.map((link, index) => (
          <NavLink to={link.path} key={index} 
          className={({ isActive }) => (isActive ? 'text-[var(--main)]' : '')}
          >{link.label}</NavLink>
        ))
    }
    </div>
  )
}

export default LeftMenu
