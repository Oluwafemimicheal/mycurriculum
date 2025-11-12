import { LoginContext } from '../context/LoginContext'
import { useState, useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Login = () => {
  const { setLogin, setPop } = useContext(LoginContext)
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };


  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.username === "michael" && input.password === "4410") {
      setPop(false)
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 4000)
    }


    setInput({ username: "", password: "" })
  }

  return (
    <motion.div initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.2 }} className="bg-gray-800/40 flex justify-center items-center fixed z-50 px-2 lg:px-0 w-full h-screen pointer-events-auto overflow-hidden">
      <div className="w-[400px] h-auto bg-gray-900 text-black rounded-2xl p-8 lg:p-10 flex flex-col relative gap-5">
        <button onClick={() => setPop(false)} className='absolute top-1 right-2 cursor-pointer p-3 '><FaTimes size={20} color='white' /></button>
        <div>
          <h1 className="font-bold text-white text-3xl mb-1">Curriculum Hub</h1>
          <p className='text-gray-300 text-sm'>Please login to access the Backend Curriculum</p>
        </div>
        <form className="flex flex-col w-full gap-5" onSubmit={handleSubmit}>
          <div>
            <input type="text" name="username" placeholder="username" value={input.username} onChange={handleChange} className="w-full text-white border-2 border-gray-400 focus:border-blue-500 p-2 rounded-md outline-none" required />
            <p className='text-[13px] text-gray-500'>{error ? "Wrong username - michael" : null}</p>

          </div>
          <div>
            <input type="password" name="password" placeholder="password" value={input.password} onChange={handleChange} className="w-full border-2 text-white border-gray-400 focus:border-blue-500 p-2 rounded-md outline-none" required />
            <p className='text-[13px] text-gray-500'>{error ? "Wrong password - 4410" : null}</p>
          </div>
          <button className="px-6 py-2 bg-blue-800 hover:bg-blue-500 text-white hover:text-white transition rounded-lg font-semibold cursor-pointer" onClick={() => setLogin(true)}>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Login
