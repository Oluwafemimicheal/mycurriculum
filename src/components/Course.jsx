import { useParams } from "react-router-dom"
import { frontend } from "../curriculumData"
import { backend } from "../curriculumData"
import { useEffect, useState } from "react"
import { FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";


const Course = () => {
  const [front, setFront] = useState([])
  const [back, setBack] = useState([])
  const { id } = useParams()



  useEffect(() => {
    const course = frontend.filter(course => course.id === Number(id))
    setFront(course)
    const backendCourse = backend.filter(course => course.id === Number(id))
    setBack(backendCourse)
  }, [])


  return (
    <motion.div initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.2 }} className="p-5 relative overflow-hidden">
      <Link to={"/"} className="opacity-75 hover:opacity-100 transition mb-10 inline-flex items-center gap-1 bg-blue-500 lg:fixed p-3 rounded-md text-sm"> <FaChevronLeft /></Link>
      {/* <div className="w-[500px] h-[500px] rounded-full bg-gray-400 -right-40 -top-30 absolute"></div> */}
      <div className="w-full lg:w-[1000px] mx-auto bg-gray-900/70 backdrop-blur-lg py-10 rounded-2xl">
        {front.map((data) => {
          return <div key={data?.id} className=" flex lg:flex-row md:flex-row flex-col justify-around items-center">
            <div>
              <h1 className="font-bold text-2xl underline mb-4"><span className="text-blue-500">{data?.title}</span> Curriculum</h1>
              {data?.topic?.map((list, index) => {
                return <ul key={index} className="list-disc pl-5">
                  <li className="mb-2">{list}</li>
                </ul>
              })}
              <div>
                <Link to={`/text/${data?.id}`} className="underline text-[16px] font-semibold text-blue-500 animate-pulse">View Details</Link>
              </div>
            </div>
            <div className="hidden w-[300px] h-[300px] lg:flex md:flex justify-center items-center border-2 border-gray-500 rounded-lg overflow-hidden">
              <img src={data?.image} alt={data?.title} width={"100%"} />
            </div>
          </div>
        })}

        {back.map((data) => {
          return <div key={data?.id} className=" flex lg:flex-row md:flex-row flex-col justify-around items-center">
            <div>
              <h1 className="font-bold text-2xl underline mb-4"><span className="text-blue-500">{data?.title}</span> Curriculum</h1>
              {data?.topic?.map((list, index) => {
                return <ul key={index} className="list-disc pl-5">
                  <li className="mb-2">{list}</li>
                </ul>
              })}
              <div className="mt-5">
                <Link to={`/text/${data?.id}`} className="underline text-[16px] font-semibold text-blue-500 animate-pulse">View Details</Link>
              </div>
            </div>
            <div className="hidden w-[300px] h-[300px] lg:flex md:flex justify-center items-center border-2 border-gray-500 rounded-lg overflow-hidden">
              <img src={data?.image} alt={data?.title} />
            </div>
          </div>
        })}
      </div >

    </motion.div >
  )
}

export default Course
