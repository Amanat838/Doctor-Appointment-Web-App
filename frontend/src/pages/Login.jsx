import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  return (
    <form action="">
      <p className='text-5xl'>{state === 'Sign Up'? 'Create Account': 'Login'}</p>
      {
        state === 'Sign Up' ? 
        <div className='flex flex-col w-[25%]'>
        <label htmlFor="">Full name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='border border-gray-300' />
      </div> : ''
      }
      
      <div className='flex flex-col w-[25%]'>
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-gray-300' />
      </div>
      <div className='flex flex-col w-[25%]'>
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e)=>setPass(e.target.value)} value={pass} className='border border-gray-300' />
      </div>
      <button className='bg-blue-700 text-white px-2'>{state === 'Sign Up'? 'Create Account' : 'Login'}</button>
      {
        state === 'Sign Up' ? 
        <p>Already have an account? <span onClick={()=> setState('Login')} className='text-blue-700 cursor-pointer'>Login here</span></p>:
        <p>Create a new account? <span onClick={()=> setState('Sign Up')} className='text-blue-700 cursor-pointer'>click here</span></p>
      }
      
    </form>
  )
}

export default Login
