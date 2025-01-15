import React, { useContext } from 'react'
import doc1 from '../assets/doc1.svg'
import doc2 from '../assets/doc2.svg'
import doc3 from '../assets/doc3.svg'
import doc4 from '../assets/doc4.svg'
import doc5 from '../assets/doc5.svg'
// import Docs from './Docs'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDocs = () => {
    const navigate = useNavigate()
    const { docs } = useContext(AppContext)
    // const docs = [
    //     {
    //         _id: 'doc1',
    //         img: doc1,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc2',
    //         img: doc2,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc3',
    //         img: doc3,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc4',
    //         img: doc4,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc5',
    //         img: doc5,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc1',
    //         img: doc1,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc2',
    //         img: doc2,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc3',
    //         img: doc3,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc4',
    //         img: doc4,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    //     {
    //         _id: 'doc5',
    //         img: doc5,
    //         status: 'Available',
    //         name: 'Dr. Richard James',
    //         title: 'General physician'
    //     },
    // ]
    return (
        <div className='w-full flex flex-col items-center gap-14'>
            <div className='w-full'>
                <p className='font-medium text-4xl font-poppins text-[#1F2937] text-center'>Top Doctors to Book</p>
                <p className='text-lg font-poppins text-[#4B5563] text-center'>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            <div className='mx-auto'>

                <div className='grid grid-cols-5 gap-4 gap-x-4'>
                    {docs.map((item, index) => {
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
                    })}

                </div>
            </div>
            <button onClick={() => navigate('/doctors')} className='bg-[#EAEFFF] text-[#4B5563] text-xl px-20 py-3 rounded-3xl'>more</button>
        </div>
    )
}
export default TopDocs
