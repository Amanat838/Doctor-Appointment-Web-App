import React, { useContext, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddDoctor = () => {

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('title', title)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('degree', degree)

            formData.forEach((value, key)=> {
                console.log(`${key}: ${value}`)
            })

            const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData, {headers:{atoken}})
            if(data.success){
                toast.success(data.message)
                setName('')
                setEmail('')
                setPassword('')
                // setTitle('')
                setDegree('')
                // setExperience('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            
        }
    }

    
    const { atoken, backendUrl } = useContext(AdminContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('General Physician')
    const [degree, setDegree] = useState('')
    const [experience, setExperience] = useState('1 year')
    const [about, setAbout] = useState('')
    const [fees, setFees] = useState('')
    return (
        <div>
            <div>
                <p>Doctor Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter doctor name' className='border border-gray-700 text-sm' />
            </div>
            <div>
                <p>Doctor Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter doctor email' className='border border-gray-700 text-sm' />
            </div>
            <div>
                <p>Doctor Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter doctor password' className='border border-gray-700 text-sm' />
            </div>
            <div>
                <p>Doctor title</p>
                <select onChange={(e) => setTitle(e.target.value)} value={title} name="" id="" className='border border-gray-900'>
                    <option value="General physician">General physician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatricians">Pediatricians</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
            </div>
            <div>
                <p>Degree</p>
                <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder='Enter doctor degree' className='border border-gray-700 text-sm' />
            </div>
            <div>
                <p>Experience</p>
                <select onChange={(e) => setExperience(e.target.value)} value={experience} name="" id="" className='border border-gray-900'>
                    <option value="1 year">1 year</option>
                    <option value="2 year">2 year</option>
                    <option value="3 year">3 year</option>
                    <option value="4 year">4 year</option>
                    <option value="5 year">5 year</option>
                </select>
            </div>
            <div>
                <p>Fees</p>
                <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder='Enter doctor fees' className='border border-gray-700 text-sm' />
            </div>
            <div>
                <p>About</p>
                <textarea onChange={(e) => setAbout(e.target.value)} value={about} rows={5} placeholder='Enter doctor about' className='border border-gray-700 text-sm' />
            </div>
            <button type='submit' onClick={onSubmitHandler} className='px-8 py-4 bg-blue-700 rounded-xl text-white'>Add Doctor</button>
        </div>
    )
}

export default AddDoctor
