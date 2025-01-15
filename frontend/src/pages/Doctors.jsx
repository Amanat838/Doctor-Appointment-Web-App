import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const navigate = useNavigate()
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const { docs } = useContext(AppContext)
  const applyFilter = () => {
    if(speciality){
      setFilterDoc(docs.filter(doc => doc.title === speciality))
    } else {
      setFilterDoc(docs)
    }
  }

  useEffect(()=> {
    applyFilter()
  },[docs, speciality])


  return (
    <div className='w-full space-y-4 mt-10'>
      <p className='text-xl text-[#4B5563] font-poppins'>Browse through the doctors specialist.</p>
      <div className='w-full flex gap-6'>
        <div className='w-[20%] space-y-4'>
          <p onClick={()=> speciality === 'General physician' ? navigate(`/doctors`) : navigate(`/doctors/General physician`)} className={`text-base cursor-pointer text-[#4B5563] font-poppins border border-[#B4B4B4] rounded-lg py-3 pl-3 ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate(`/doctors`) : navigate(`/doctors/Gynecologist`)} className={`text-base cursor-pointer text-[#4B5563] font-poppins border border-[#B4B4B4] rounded-lg py-3 pl-3 ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate(`/doctors`) : navigate(`/doctors/Dermatologist`)} className={`text-base cursor-pointer text-[#4B5563] font-poppins border border-[#B4B4B4] rounded-lg py-3 pl-3 ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate(`/doctors`) : navigate(`/doctors/Pediatricians`)} className={`text-base cursor-pointer text-[#4B5563] font-poppins border border-[#B4B4B4] rounded-lg py-3 pl-3 ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''}`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate(`/doctors`) : navigate(`/doctors/Neurologist`)} className={`text-base cursor-pointer text-[#4B5563] font-poppins border border-[#B4B4B4] rounded-lg py-3 pl-3 ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate(`/doctors`) : navigate(`/doctors/Gastroenterologist`)} className={`text-base cursor-pointer text-[#4B5563] font-poppins border border-[#B4B4B4] rounded-lg py-3 pl-3  ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='w-[80%] grid grid-cols-4 gap-y-4'>
          {
            filterDoc.map((item, index) => {
              return (
                <div onClick={() => navigate(`/appointment/${item._id}`)} className='h-90 w-60 hover:-translate-y-[10px] transition-all duration-500 rounded-xl space-y-4 border border-gray-300'>
                  <div className='bg-[#EAEFFF] flex justify-center rounded-t-xl h-64'>
                    <img src={item.img} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 px-4'>
                    <div className='flex items-center gap-1'>
                      <div className='w-2 h-2 bg-[#0FBF00] rounded-full'></div>
                      <p className='text-[#0FBF00] text-sm font-poppins'>{item.status}</p>
                    </div>
                    <p className='font-medium text-xl font-poppins text-[#1F2937]'>{item.name}</p>
                    <p className='text-sm font-poppins text-[#4B5563]'>{item.title}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
