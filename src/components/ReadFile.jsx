import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { frontend, backend } from "../curriculumData"
import { motion } from "framer-motion";

const ReadFile = () => {
  const [topic, setTopic] = useState([])
  const [text, setText] = useState("")
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

    fetch(`${fileResult}`)
      .then((res) => res.text())
      .then((data) => setText(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full lg:w-[1100px] mx-auto lg:py-10 lg:px-0 relative">
      <h1 className="bg-blue-500 text-white font-bold p-4 text-[18px] sticky top-0">{topic.map((topic) => topic.title)} Curriculum </h1>
      <motion.div initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.2 }} className="overflow-hidden bg-gray-900 flex p-4">
        <pre>{text}</pre>
      </motion.div>
    </div>
  )
}

export default ReadFile
