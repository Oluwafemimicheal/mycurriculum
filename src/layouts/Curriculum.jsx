import { Link } from "react-router-dom"
import Content from "../components/Content"
import { frontend } from "../curriculumData"
import { backend } from "../curriculumData"
import Slider from "../components/Slide"
import { motion } from "framer-motion";
import { useState } from "react"
import imageSecure from '/assets/images/Screenshot 2025-11-11 122727.png'
import Login from '../components/Login'


const Curriculum = ({ handleLoginPopUp }) => {
  const [login, setLogin] = useState(false)
  return (
    <div>
      <Slider />
      <motion.div initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.2 }} className="flex flex-col justify-center gap-30 lg:px-30 lg:py-10  p-10">
        <div>
          <h1 className=" text-2xl lg:text-3xl font-bold mb-8"><span className="text-blue-500">Frontend Development</span> Curriculum</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              frontend.map((course) => {
                return <Link to={`/course/${course.id}`} key={course.id}> <Content contentTopic={course.title} topicNum={course.topic.length} courseLevel={course.level} /></Link>
              })
            }

          </div>
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-8"><span className="text-blue-500">Backend Development  </span>Curriculum</h1>
          <div className="w-full h-auto">
            {
              login ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                  backend.map((course) => {
                    return <Link to={`/course/${course.id}`} key={course.id}> <Content contentTopic={course.title} topicNum={course.topic.length} courseLevel={course.level} /></Link>
                  })
                }
              </div> : <div className="relative">
                <div className="bg-linear-to-t from-[#242424] to-transparent w-full h-full absolute flex justify-center items-center group">
                    <button className="hidden group-hover:block px-6 py-2 bg-white hover:bg-blue-500 text-blue-500 hover:text-white transition rounded-lg font-semibold cursor-pointer" onClick={handleLoginPopUp}>Login</button>
                </div>
                <div>
                  <img src={imageSecure} alt="" />
                </div>
              </div>
            }
            <div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Curriculum
