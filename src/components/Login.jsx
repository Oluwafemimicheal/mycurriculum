
const Login = () => {
  return (
    <div className="bg-black/30 flex justify-center items-center fixed z-50 w-full h-screen">
      <div className="w-[400px] h-auto bg-white text-black rounded-2xl p-10 flex flex-col gap-5">
        <h1 className="font-bold text-blue-950 text-3xl">Curriculum</h1>
        <form className="flex flex-col w-full gap-5">
          <input type="text" name="name" placeholder="user name" className="w-full border-2 border-gray-800 focus:border-blue-500 p-2 rounded-md outline-none" />
          <input type="password" name="name" placeholder="password" className="w-full border-2 border-gray-800 focus:border-blue-500 p-2 rounded-md outline-none" />
          <button className="px-6 py-2 bg-blue-800 hover:bg-blue-500 text-white hover:text-white transition rounded-lg font-semibold cursor-pointer">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
