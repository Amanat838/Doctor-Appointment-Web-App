import React from 'react'
import ladyDoc from '../assets/ladyDoc.svg'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='pt-32'>

            <div className='bg-[#5F6FFF] relative py-24 px-28'>
                <div className='space-y-12 ml-8'>
                    <p className='font-bold text-white text-4xl font-poppins leading-tight'>Book Appointment <br /> With 100+ Trusted Doctors</p>
                    <button onClick={() => navigate('/login')} className='text-sm hover:scale-105 transition-all font-poppins text-[#4B5563] px-6 py-3 rounded-3xl bg-white'>Create account</button>
                </div>
                <img src={ladyDoc} className='absolute top-0 h-[435px] w-[500px] -mt-[55px] ml-[520px]' alt="" />
            </div>
        </div>
    )
}

export default Banner
