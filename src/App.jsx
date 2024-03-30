import './index.css'
import logo from './assets/logo.png'
import { useEffect,useRef } from 'react'

function App() {
  const usernameRef = useRef(null);
  useEffect(() =>{
    usernameRef.current.focus();
  },[])
  return (    
    <div className='grid h-screen bg-slate-300'>
      <div className='grid grid-flow-col grid-cols-2 m-12'>
        <div className='grid justify-items-center items-center bg-green-500 border-y-2 border-white border-l-2'>
          <div className='grid justify-items-center w-10/12 gap-5'>
            <img src={logo} alt="" className='pr-12' />
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus amet ullam eveniet quasi quidem quae nobis in ratione corporis fuga?</p>
          </div>
        </div>
        <div className='grid bg-white items-center justify-items-center border-y-2 border-green-500 border-r-2'>
          <div className='w-7/12 grid gap-4 px-10 py-3 rounded-md'>
            <h2 className='text-3xl font-semibold text-center'>Login Admin</h2>
            <input ref={usernameRef} type="text" placeholder='username' className='h-8 py-2 outline-none border-green-500 border-b-2' />
            <input type="password" placeholder='password' className='h-8 py-2 outline-none border-green-500 border-b-2' />
            <button className='bg-green-500 w-1/2 justify-self-center h-7 font-semibold'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
