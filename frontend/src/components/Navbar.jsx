import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import profilePic from '../assets/profilePic.svg'
import dropdownIcon from '../assets/dropdownIcon.svg'

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false)
   const [token, setToken] = useState(true)

    const navigate = useNavigate()
    return (
        <>
            <div className='space-y-4'>
                <div className='w-full flex justify-between items-center'>
                    <img onClick={()=> navigate('/')} className='cursor-pointer' src={logo} alt="" />
                    <ul className='flex gap-6'>
                        <NavLink to='/'>
                            <li className='font-poppins font-medium'>Home</li>
                            <hr className='border-none outline-none bg-blue-900 h-0.5 w-3/5 m-auto hidden' />
                        </NavLink>
                        <NavLink to='/doctors'>
                            <li className='font-poppins font-medium'>All Doctors</li>
                            <hr className='border-none outline-none bg-blue-900 h-0.5 w-3/5 hidden m-auto' />
                        </NavLink>
                        <NavLink to='/about'>
                            <li className='font-poppins font-medium'>About</li>
                            <hr className='border-none outline-none bg-blue-900 h-0.5 w-3/5 hidden m-auto' />
                        </NavLink>
                        <NavLink to='/contact'>
                            <li className='font-poppins font-medium'>Contact</li>
                            <hr className='border-none outline-none bg-blue-900 h-0.5 w-3/5 hidden m-auto' />
                        </NavLink>
                    </ul>
                    <div>
                        {
                            token ? 
                            <div className='flex gap-2 items-center group relative cursor-pointer'>
                                <img src={profilePic} alt="" />
                                <img src={dropdownIcon} alt="" />
                                <div className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-48 flex flex-col gap-4 p-4 bg-gray-100 rounded'>
                                        <p onClick={()=> navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                        <p onClick={()=> navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                        <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button onClick={() => navigate('/login')} className='bg-[#5F6FFF] rounded-full text-white font-light px-8 py-3 font-poppins'>Create account</button>
                          
                        }
                    </div>
                </div>
                <div>
                    <hr className='' />
                </div>
            </div>
        </>

    )
}

export default Navbar
