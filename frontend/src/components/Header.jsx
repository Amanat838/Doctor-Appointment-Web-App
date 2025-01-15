import React from 'react'
import docHeader from '../assets/docHeader.svg'
import person1 from '../assets/person1.svg'
import person2 from '../assets/person2.svg'
import person3 from '../assets/person3.svg'
import group from '../assets/group_profiles.svg'
import { FaArrowRight } from "react-icons/fa6"; 

const Header = () => {
    return (
        <div className='flex bg-[#5F6FFF] items-center w-full px-10 pt-32'>
            <div className='flex flex-col gap-12 w=[40%]'>
                <p className='text-5xl font-semibold font-poppins text-white leading-tight'>Book Appointment <br /> With Trusted Doctors</p>
                <div className='flex gap-4 w-full'>
                    <div className='w-60'>
                        <img src={group} alt="" />
                    </div>
                    <p className='text-base text-white font-poppins'>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='flex w-[42%] hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] text-[#595959] text-base font-poppins gap-4 bg-white items-center rounded-3xl py-4 px-6 hover:scale-105 transition-all duration-300'>
                    Book appointment
                    <FaArrowRight />
                </a>
            </div>
            <div className='w-[100%] h-[500px]'>
                <img className='w-full h-full rounded-lg object-cover' src={docHeader} alt="" />
            </div>
        </div>
    )
}

export default Header
