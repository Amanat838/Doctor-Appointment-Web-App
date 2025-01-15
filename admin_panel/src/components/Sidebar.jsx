import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const { atoken } = useContext(AdminContext)
    return (
        <div>
            {atoken ? <ul>
                <NavLink to={'/admin-dashboard'}>
                    <p>Dashboard</p>
                </NavLink>
                <NavLink>
                    <p>Appointments</p>
                </NavLink>
                <NavLink to={'/add-doctor'}>
                    <p>Add Doctor</p>
                </NavLink>
                <NavLink to={'/doctors-list'}>
                    <p>Doctors List</p>
                </NavLink>
            </ul>
      
           : '' }
        </div>
    )
}

export default Sidebar
