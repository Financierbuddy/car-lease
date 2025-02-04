import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu, { RightMenuMobile } from './RightMenu';
import { Drawer, Button } from 'antd';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "@/assets/logo.svg"
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menu fixed top-0">
      <div className='flex flex-1'>
      <div className="lg:w-[90px] lg:h-[90px] lg:mt-[80px] w-[60px] h-[60px] mt-0 shadow-lg rounded-full  bg-white flex items-center justify-center">
        <Link to="/" >
          <img  src={logo} alt='financier buddy logo' />
        </Link>
      </div>
      </div>
      <div className=' flex-1 hidden lg:flex'>
        <LeftMenu mode="horizontal" />
      </div>
      <div className="menu__container flex flex-1 justify-end">
        <div className="menu__menus gap-6 ">
          
          <RightMenu mode="horizontal" />
        </div>

        <div
          className="menu__mobile-button  "
         
        >
          <div className='flex gap-4 items-center'>
          {/* <RightMenuMobile/> */}
          
          <HiOutlineMenuAlt3 onClick={showDrawer}  className='text-xl'/>
          </div>
        </div>
        <Drawer
          title={<img className='w-[100px]' src={logo} alt='xynced logo'/>}
          placement="right"
          className="menu_drawer  "
          closable={true}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu/>
          {/* <RightMenu/> */}
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
