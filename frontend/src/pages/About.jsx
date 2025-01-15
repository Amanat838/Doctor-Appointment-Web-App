import React from 'react'
import aboutImg from '../assets/about_image.svg'

const About = () => {
  return (
    <div className='space-y-20 w-full'>
      <div className='w-full space-y-20 mt-14'>
        <p className='text-3xl text-center font-poppins text-[#4B5563] font-semibold'>ABOUT <span className='text-[#1F2937] font-semibold'>US</span></p>
        <div className='w-full flex gap-10'>
          <div className='w-[30%]'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='w-[60%] space-y-10'>
            <p className='text-base text-[#4B5563] font-poppins'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p className='text-base text-[#4B5563] font-poppins'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <p className='text-[#4B5563] font-bold font-poppins'>Our Vision</p>
            <p className='text-base text-[#4B5563] font-poppins'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
      </div>
      <div className='space-y-10'>
        <p className='font-poppins text-[#4B5563] text-2xl'>WHY <span className='text-[#1F2937]'>CHOOSE US</span></p>
        <div className='w-full flex'>
          <div className='w-[33%] text-[#4B5563] border border-[#ABABAB] py-20 px-10 space-y-8 hover:bg-[#5F6FFF] hover:text-white transition-all duration-300'>
            <b>Efficiency:</b>
            <p className='text-lg font-poppins'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='w-[33%] hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 border border-[#ABABAB] text-[#4B5563]  py-20 px-10 space-y-8'>
            <b>Convenience:</b>
            <p className='text-lg font-poppins'>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='w-[33%] text-[#4B5563] hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 border border-[#ABABAB] py-20 px-10 space-y-8'>
            <b>Personalization:</b>
            <p className=' text-lg font-poppins'>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
