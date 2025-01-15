import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import verified from '../assets/verified.svg'
import about from '../assets/about.svg'
import RelatedDocs from '../components/RelatedDocs'

const Appointment = () => {

  const { docId } = useParams()
  const { docs, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [doctorInfo, setDoctorInfo] = useState('')
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const getAvailableSlots = async () => {
    setDocSlots([])
    let today = new Date()
    console.log(today)
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))

    }
  }

  useEffect(() => {
    const docInfo = docs.find(doc => doc._id === docId)
    setDoctorInfo(docInfo)
    console.log(docInfo)
  }, [docs, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [doctorInfo])


  // useEffect(() => {
  //   console.log(docSlots)
  // }, [docSlots])

  return doctorInfo && (
    <div>

      <div className='w-full flex gap-4'>
        <div className='bg-[#5F6FFF] w-[24%] h-96 flex justify-center rounded-xl'>
          <img src={doctorInfo.img} alt="" className='object-cover' />
        </div>
        <div className='h-96 border border-gray-500 rounded-lg w-[76%] px-8 py-8 space-y-4'>
          <div className='flex gap-2'>
            <p className='font-medium text-[#1F2937] text-4xl'>{doctorInfo.name}</p>
            <img src={verified} alt="" />
          </div>
          <div>
            <p className='text-xl text-[#4B5563] font-poppins'>{doctorInfo.degree} - {doctorInfo.title} <button className='border border-gray-500 rounded-3xl px-4 py-1 hover:underline'>{doctorInfo.experience}</button></p>
          </div>
          <div className='flex gap-1'>
            <p className='text-lg text-[#1F2937] font-poppins'>About</p>
            <img src={about} alt="" />
          </div>
          <p className='w-[85%] text-[#4B5563] text-base font-poppins'>{doctorInfo.about}</p>
          <p className='text-[#4B5563] text-xl font-medium'>Appointment fee: <span className='text-[#1F2937]'>{currencySymbol}{doctorInfo.fees}</span></p>
        </div>

      </div>
      <div className='ml-80'>
        <p className='text-2xl font-medium font-poppins text-[#565656]'>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => {
              return (

                <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#5F6FFF] text-white' : 'border border-gray-200'}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              )
            })
          }
        </div>
        <div className='flex items-center overflow-x-scroll w-full gap-4 mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item, index) => (
            <p onClick={()=> setSlotTime(item.time)} className={`text-base cursor-pointer font-poppins flex-shrink-0 py-2 px-2 rounded-full ${item.time === slotTime ? 'text-white bg-[#5F6FFF]' : 'text-[#4B5563] border border-gray-300'}`}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='text-lg text-white bg-[#5F6FFF] px-10 py-3 rounded-full font-poppins mt-6'>Book an appointment</button>
        <div>
          <RelatedDocs docId = {docId} speciality = {doctorInfo.title}/>
        </div>
      </div>
    </div>

  )
}

export default Appointment
