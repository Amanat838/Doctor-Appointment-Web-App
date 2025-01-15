import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()  //So that it will not reload the web page when form is submitted

        try {

            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl+'/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('aToken', data.token)  //So that when we refresh the web page the admin will be still logged in
                    setAToken(data.token)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {

        }


    }

    return (
        <form onSubmit={onSubmitHandler} className='items-center'>
            <div className='space-y-6'>
                <p><span> {state} </span>login</p>
                <div>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required className='border border-gray-600' />
                </div>
                <div>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required className='border border-gray-600' />
                </div>
                <button className='px-4 py-4 rounded-full bg-blue-600 text-white'>Login</button>
                {
                    state === 'Admin' ?
                        <p className='text-sm'>Doctor login <span onClick={() => setState('Doctor')} className='text-blue-700 cursor-pointer'>click here</span></p> :
                        <p className='text-sm'>Admin login <span onClick={() => setState('Admin')} className='text-blue-700 cursor-pointer'>click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login
