import { useAuth } from '@/contexts/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

const RightMenu = ({ mode }) => {
  const  {login} = useAuth()

  return (
    <div className='flex h-auto md:h-[32px] flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-start md:justify-center rounded-lg bg-transparent md:bg-[var(--main)] p-5 pt-0 md:p-2  text-sm' >
      <Link to='/login' className='text-white px-4  text-medium flex items-center gap-2'><FaRegUserCircle className='text-lg'/> Login / Signup</Link>
      {/* <div className='text-white' onClick={()=>login({
        user : {
          firstname : "firstname",
          lastname : "lastname",
          email : "email"
        },
        token : "token"
      })}>Login check</div> */}
   
   
    </div>
  );
};

export default RightMenu;

export const RightMenuMobile = () => {

  return (
    <div className='hidden sm:flex h-[32px] flex-row gap-0 items-center justify-center  bg-[var(--main)] p-2  text-sm' >
      <Link to='/login' className='text-white px-4  ' >Login</Link>
      <Link to='/#signup' className='bg-white px-6 rounded-full text-[var(--main)] '>Register</Link>
    </div>
  );
};
