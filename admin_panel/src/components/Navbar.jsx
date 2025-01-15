import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const { atoken, setAToken } = useContext(AdminContext)
    const logout = () => {
        navigate('/')
        atoken && setAToken('')
        atoken && localStorage.removeItem('aToken')
    }
    return (
        <div className='flex justify-between bg-blue-700 text-2xl'>
            <div className='w-full h-[100px] text-white'>
                {atoken ? 'Admin' : 'Doctor'}
            </div>
            <button onClick={logout} className='text-white text-2xl'>Logout</button>
        </div>
    )
}

export default Navbar
