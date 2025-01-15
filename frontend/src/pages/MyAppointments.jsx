import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { docs } = useContext(AppContext)
  return (
    <div>
      <div>
        {docs.slice(0, 2).map((item, index) => {
          return(

          <div key={index}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
            <div>
              <button className='bg-blue-700 text-white py-2 px-6 rounded-full'>Pay Online</button>
              <button className='bg-blue-700 text-white py-2 px-6 rounded-full'>Cancel Appointment</button>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyAppointments
