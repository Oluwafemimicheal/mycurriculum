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


      <Link to={"/"} className="opacity-50 hover:opacity-100 transition lg:ml-10 mb-10 inline-flex items-center gap-1 bg-blue-500 lg:fixed py-1 px-1 lg:px-3 rounded-md text-sm"> <FaChevronLeft /> Back</Link>

      <div className="w-full lg:w-[1200px] mx-auto  py-5 px-2 lg:px-0 lg:py-16">
        {front.map((data) => {
          return <div key={data?.id} className=" flex lg:flex-row md:flex-row flex-col justify-between items-start">
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
            <div className="hidden w-[600px] h-[400px] lg:flex md:flex justify-center items-center overflow-hidden relative">
              <div className="w-[600px] h-[400px] bg-linear-to-r from-[#242424] via-[#242424]/90  to-transparent absolute"></div>
              <img src={data?.image} alt={data?.title} width={"100%"} />
            </div>
          </div>
        })}

        {back.map((data) => {
          return <div key={data?.id} className=" flex lg:flex-row md:flex-row flex-col justify-between items-start">
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
            <div className="hidden w-[600px] h-[400px] lg:flex md:flex justify-center items-center overflow-hidden relative">
              <div className="w-[600px] h-[400px] bg-linear-to-r from-[#242424] via-[#242424]/90  to-transparent absolute"></div>
              <img src={data?.image} alt={data?.title} width={"100%"} />
            </div>
          </div>
        })}
      </div >

    </motion.div >
  )
}

export default Course
