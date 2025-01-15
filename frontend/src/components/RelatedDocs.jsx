import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDocs = ({ docId, speciality }) => {
    const navigate = useNavigate()
    const { docs } = useContext(AppContext)
    const [relDocs, setRelDocs] = useState([])

    useEffect(() => {
        if (docs.length > 0 && speciality) {
            const doctorData = docs.filter((doc) => doc.title === speciality && doc._id !== docId)
            setRelDocs(doctorData)
            console.log(relDocs)
        }
    }, [docs, docId, speciality])


    return (
        <div className='w-full flex flex-col items-center gap-14'>
            <div className='w-full'>
                <p className='font-medium text-4xl font-poppins text-[#1F2937] text-center'>Top Doctors to Book</p>
                <p className='text-lg font-poppins text-[#4B5563] text-center'>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            <div className='mx-auto'>

                <div className='flex gap-6'>
                    {relDocs.slice(0, 5).map((item, index) => {
                        return (
                            <div onClick={() => {navigate(`/appointment/${item._id}`), scrollTo(0,0)}} className='h-90 w-60 hover:-translate-y-[10px] transition-all duration-500 rounded-xl space-y-4 border border-gray-300'>
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
                    })}

                </div>
            </div>
            <button onClick={() => navigate('/doctors')} className='bg-[#EAEFFF] text-[#4B5563] text-xl px-20 py-3 rounded-3xl'>more</button>
        </div>
    )
}

export default RelatedDocs
