import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { frontend, backend } from "../curriculumData"
import Loading from "./Loading";
import { div } from "framer-motion/client";

const ReadFile = () => {
  const [topic, setTopic] = useState([])
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const { id } = useParams()


  // console.log(result)

  useEffect(() => {
    const course = [
      ...frontend.filter(course => course.id === Number(id)),
      ...backend.filter(course => course.id === Number(id))
    ];
    setTopic(course)
    const filePath = `${import.meta.env.BASE_URL}${course.map(data => data.note)}`
    const fileResult = filePath.replaceAll(",", "")

    const fetchFile = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${fileResult}`)
        const data = await response.text()
        setText(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFile()

  }, []);


  return (
    <div className="w-full lg:w-[1100px] mx-auto lg:py-10 lg:px-0 relative">
      <h1 className="bg-blue-500 text-white font-bold p-4 text-[18px] sticky top-0">{topic.map((topic) => topic.title)} Curriculum </h1>
      {
        loading ? <div className="w-full h-[450px] flex justify-center items-center">
          <Loading />
        </div> : <div className="overflow-hidden bg-gray-900 flex p-4">
          <pre>{text}</pre>
        </div>
      }

    </div>
  )
}

export default ReadFile
