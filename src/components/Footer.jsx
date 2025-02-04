import React from 'react'
import HeaderBG from '@/assets/HeaderBG.svg'
import { Link } from 'react-router-dom';
import { IoMailOpenOutline } from 'react-icons/io5';
import {BsTelephone} from "react-icons/bs"
import { TbMap } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import {FiTwitter, FiLinkedin} from 'react-icons/fi'
import {CiYoutube} from 'react-icons/ci'
import {SlSocialFacebook} from 'react-icons/sl'
import logo from "@/assets/white-logo.svg"

const Footer = () => {
    const style = {
        '--footerUrl': `url(${HeaderBG})`,
    };

    return (
        <section style={style} className='h-auto lg:h-[400px] w-full  bg-[image:var(--footerUrl)] bg-no-repeat bg-cover bg-left-top '>
            <div className={`  flex p-12 gap-16 flex-col screen_max_width`}>
                <div className='flex-col lg:flex-row gap-6 flex justify-around text-white w-full'>
                    <div className='flex flex-col gap-2 text-sm'>
                        <div className=' font-semibold'> Lease Offer</div>
                        <Link to={"#"} className='hover:underline'>Offer</Link>
                        <Link to={"#"} className='hover:underline'>Calculator</Link>
                    </div>

                    <div className='flex flex-col gap-2 text-sm'>
                        <div className=' font-semibold'> All About Leasing</div>
                        <Link to={"/car-listing"} className='hover:underline'>Lease</Link>
                        <Link to={"#"} className='hover:underline'>Financial lease</Link>
                        <Link to={"#"} className='hover:underline'>Operational lease</Link>
                        <Link to={"#"} className='hover:underline'>Equipment lease</Link>
                        <Link to={"#"} className='hover:underline'>Leasing with a negative BKR</Link>
                    </div>

                    <div className='flex flex-col gap-2 text-sm'>
                        <div className=' font-semibold'> Want to know more?</div>
                        <Link to={"/blogs"} className='hover:underline'>Blog</Link>
                        <Link to={"/faqs"} className='hover:underline'>FAQ</Link>
                        <Link to={"#"} className='hover:underline'>About us</Link>
                        <Link to={"#"} className='hover:underline'>Contact</Link>
                    </div>

                    <div className='flex flex-col gap-2 text-sm'>
                        <div className=' font-semibold'> Need help?</div>
                            <div className='flex gap-2 items-center'>
                               <IoMailOpenOutline className='text-lg'/> <span>hello@leasefinancier.nl</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                               <BsTelephone className='text-lg'/> <span>085 080 5604</span>
                            </div>

                            <div className='flex gap-2 items-center'>
                               <TbMap className='text-lg'/> <span>Dragonder 13a, 5554GM, Valkenswaard</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Link to={"#"} className='w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer'>
                                    <FaWhatsapp className='text-[var(--main)] text-sm' />
                                </Link>

                                <Link to={"#"} className='w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer'>
                                    <FaInstagram className='text-[var(--main)] text-sm' />
                                </Link>

                                <Link to={"#"} className='w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer'>
                                    <CiYoutube className='text-[var(--main)] text-sm' />
                                </Link>

                                <Link to={"#"} className='w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer'>
                                    <FiLinkedin className='text-[var(--main)] text-sm' />
                                </Link>

                                <Link to={"#"} className='w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer'>
                                    <SlSocialFacebook className='text-[var(--main)] text-sm' />
                                </Link>

                                <Link to={"#"} className='w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer'>
                                    <FiTwitter className='text-[var(--main)] text-sm' />
                                </Link>
                            </div>
                       </div>

                </div>

                <div className='flex items-center justify-between pt-6 border-t border-t-white text-white w-full'>
                <img  src={logo} alt='financier buddy logo' />
<span>© 2024 Financier Bubby. All rights reserved.</span>
                </div>
            </div>
            
        </section>
    )
}

export default Footer
