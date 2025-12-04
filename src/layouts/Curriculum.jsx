import { Link } from "react-router-dom"
import Content from "../components/Content"
import { frontend } from "../curriculumData"
import { FaBars, FaAdjust } from "react-icons/fa"
import { backend } from "../curriculumData"
import Slider from "../components/Slide"
import { useContext, useState } from "react"
import imageSecure from '/assets/images/Screenshot 2025-11-11 122727.png'
import { LoginContext } from "../context/LoginContext"

const Curriculum = () => {
  const { login, setPop } = useContext(LoginContext)
  const [grid, setGrid] = useState(false)
  return (
    <div>
      <Slider />
      <div className="flex flex-col justify-between  gap-16 lg:gap-10 lg:px-30 lg:py-5  py-10 px-3">
        <div className="flex justify-between items-center gap-5 bg-[#181717] p-2">
          <div className="flex gap-3">
            <Link to={'classes'} className="bg-[#242424] hover:bg-blue-600 transition shadow-sm shadow-black/50 text-white px-4 py-1 rounded-sm">Classes</Link>
            <Link to={'attendance'} className="bg-[#242424] hover:bg-blue-600 transition shadow-sm shadow-black/50 text-white px-4 py-1 rounded-sm">Attendance</Link>
            <Link to={'project'} className="bg-[#242424] hover:bg-blue-600 transition shadow-sm shadow-black/50 text-white px-4 py-1 rounded-sm">Project</Link>
          </div>
          <div>
            <button onClick={() => setGrid(prev => !prev)}>
              {
                grid ? <FaAdjust size={25} color="white" className="cursor-pointer" /> : <FaBars size={25} color="white" className="cursor-pointer" />
              }

            </button>
          </div>
        </div>
        <div>
          <h1 className=" text-2xl lg:text-3xl font-bold mb-8"><span className="text-blue-500">Frontend Development</span> Curriculum</h1>
          <div className={`${grid ? 'grid grid-cols-1' : 'grid md:grid-cols-2 lg:grid-cols-3'} gap-5`}>
            {
              frontend.map((course) => {
                return <Link to={`/course/${course.id}`} key={course.id}> <Content contentTopic={course.title} topicNum={course.topic.length} courseLevel={course.level} /></Link>
              })
            }
          </div>
        </div>
        <div className="my-16">
          <h1 className="text-2xl lg:text-3xl font-bold mb-8"><span className="text-blue-500">Backend Development  </span>Curriculum</h1>
          <div className="w-full h-auto">
            {
              login ? <div className={`${grid ? 'grid grid-cols-1' : 'grid md:grid-cols-2 lg:grid-cols-3'} gap-5`}>
                {
                  backend.map((course) => {
                    return <Link to={`/course/${course.id}`} key={course.id}> <Content contentTopic={course.title} topicNum={course.topic.length} courseLevel={course.level} /></Link>
                  })
                }
              </div> : <div className="relative">
                <div className="bg-linear-to-t from-[#242424] to-transparent w-full h-full absolute flex justify-center items-center group">
                    <button onClick={() => setPop(true)} className="hidden group-hover:block px-6 py-2 bg-white hover:bg-blue-500 text-blue-500 hover:text-white transition rounded-lg font-semibold cursor-pointer">Login</button>
                </div>
                  <div className="hidden lg:block">
                  <img src={imageSecure} alt="" />
                </div>
              </div>
            }
            {
              !login && <div className="lg:hidden sm:flex justify-center items-center h-auto">
                <h1>Please login to access the Backend Curriculum</h1>
                <button onClick={() => setPop(true)} className="w-full mt-3 px-6 py-2 bg-white hover:bg-blue-500 text-blue-500 hover:text-white transition rounded-lg font-semibold cursor-pointer">Login</button>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
