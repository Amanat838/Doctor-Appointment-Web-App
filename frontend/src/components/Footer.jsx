import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='space-y-8'>
            <div className='w-full pt-36 flex gap-40'>
                <div className='w-[50%] space-y-8'>
                    <img src={logo} alt="" />
                    <p className='text-[#4B5563] text-base font-poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='space-y-12'>
                    <p className='font-semibold text-xl font-poppins text-[#4B5563]'>COMPANY</p>
                    <div className='space-y-3'>
                        <p className='text-base text-[#4B5563] font-poppins'>Home</p>
                        <p className='text-base text-[#4B5563] font-poppins'>About us</p>
                        <p className='text-base text-[#4B5563] font-poppins'>Contact us</p>
                        <p className='text-base text-[#4B5563] font-poppins'>Privacy policy</p>
                    </div>
                </div>
                <div className='space-y-12'>
                    <p className='font-semibold text-xl font-poppins text-[#4B5563]'>GET IN TOUCH</p>
                    <div className='space-y-3'>
                        <p className='text-base text-[#4B5563] font-poppins'>+1-212-456-7890</p>
                        <p className='text-base text-[#4B5563] font-poppins'>greatstackdev@gmail.com</p>
                    </div>
                </div>
            </div>
            <hr className='border border-[#BDBDBD]' />
            <p className='text-base text-[#4B5563] font-poppins text-center'>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
    )
}

export default Footer
