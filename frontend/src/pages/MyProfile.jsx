import React, { useState } from 'react'
import profile from '../assets/profile_pic.svg'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Amanat Kazmi',
    image: profile,
    email: 'amanat@gmail.com',
    phone: '03095055279',
    address: {
      line1: '57th Cross, Richmond ',
      line2: 'Circle, Church Road, London'
    },
    gender: 'male',
    dob: '2000-09-14'
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit ?
          <input value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> :
          <p className='text-4xl'>{userData.name}</p>
      }
      <div>
        <p className='text-lg font-poppins text-[#797979]'>CONTACT INFORMATION</p>
        <div className='flex gap-2'>
          <p>Email:</p>
          {
            isEdit ?
              <input value={userData.email} onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))} /> :
              <p className=''>{userData.email}</p>
          }
        </div>
        <div className='flex gap-2'>
          <p>Phone:</p>
          {
            isEdit ?
              <input value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> :
              <p className=''>{userData.phone}</p>
          }
        </div>
        <div className='flex gap-2'>
          <p>Address:</p>
          {
            isEdit ?
              <p>
                <input value={userData.address.line1} type="text" onChange={(e)=> setUserData(prev => ({...prev, address:{...prev.address, line1:e.target.value}}))} />
                <br />
                <input value={userData.address.line2} onChange={(e)=> setUserData(prev => ({...prev, address:{...prev.address, line2:e.target.value}}))} type="text" />
              </p>:
              <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div className='flex gap-2'>
          <p>Gender</p>
          {
            isEdit ? 
            <select value={userData.gender} onChange={(e)=> setUserData(prev => ({...prev, gender: e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> :
            <p>{userData.gender}</p>
          }
        </div>
      </div>
      <div>
        {
          isEdit ?
          <button  onClick={()=>setIsEdit(false)} className='bg-blue-800 text-white py-2 px-4 rounded-full'>Save Info</button>:
          <button onClick={()=>setIsEdit(true)} className='bg-blue-800 text-white py-2 px-4 rounded-full'>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
