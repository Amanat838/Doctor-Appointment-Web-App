import React from 'react'
import general from '../assets/general.svg'
import gyno from '../assets/gyno.svg'
import derma from '../assets/derma.svg'
import pedi from '../assets/pedi.svg'
import neuro from '../assets/neuro.svg'
import gastro from '../assets/gastro.svg'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    const doctors = [
        {
            img: general,
            title: 'General physician'
        },
        {
            img: gyno,
            title: 'Gynecologist'
        },
        {
            img: derma,
            title: 'Dermatologist'
        },
        {
            img: pedi,
            title: 'Pediatricians'
        },
        {
            img: neuro,
            title: 'Neurologist'
        },
        {
            img: gastro,
            title: 'Gastroenterologist'
        },
    ]
    return (
        <div id='speciality' className='py-32 flex flex-col gap-20'>
            <div className='flex flex-col gap-4'>
                <p className='text-4xl font-medium font-poppins text-[#1F2937] text-center'>Find by Speciality </p>
                <p className='text-[#4B5563] text-lg font-poppins text-center'>Simply browse through our extensive list of trusted doctors, schedule <br /> your appointment hassle-free.</p>
            </div>
            <div className='flex justify-center gap-8'>
                {doctors.map((item, index) => {
                    return (
                        <Link onClick={scrollTo(0,0)} key={index} to={`/doctors/${item.title}`} className='flex flex-col items-center gap-3 hover:translate-y-[-10px] transition-all duration-500'>
                            <img className='w-28 h-28' src={item.img} alt="" />
                            <p className='text-[#4B5563] text-base font-poppins'>{item.title}</p>
                        </Link>
                    )
                })}
                
            </div>
        </div>
    )
}

export default SpecialityMenu
