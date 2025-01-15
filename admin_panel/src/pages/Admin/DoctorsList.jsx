import React, { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'

const DoctorsList = () => {

  const { doctors, atoken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {
    if (atoken) {
      getAllDoctors()
    }
  }, [atoken])

  return (
    <div>
      <p className='text-3xl text-blue-800 font-serif'>All Doctors</p>
      <div className='flex gap-4'>
        {
          doctors.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <p className='text-black text-xl'>{item.name}</p>
                  <p className='text-black text-xl'>{item.title}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DoctorsList
