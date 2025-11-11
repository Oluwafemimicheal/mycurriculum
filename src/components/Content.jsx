import { FaChevronRight } from "react-icons/fa"

const Content = ({ contentTopic = "Enter Course Name", topicNum = "0", courseLevel = "Basic" }) => {
  return (
    <div className="h-[200px] cursor-pointer hover:bg-blue-500 hover:border-blue-500 transition flex flex-col justify-between p-5 border-2 border-gray-500 rounded-2xl hover:shadow-md shadow-gray-950">
      <div >
        <h1 className="font-semibold text-[18px] lg:text-2xl text-gray-100 mb-3">{contentTopic}</h1>
        <p>{topicNum} topics</p>
      </div>
      <div className="w-full flex justify-between items-center mt-5">
        <p className="px-4 rounded-lg bg-gray-300 text-gray-900">{courseLevel}</p>
        <div><FaChevronRight /></div>
      </div>
    </div>
  )
}

export default Content
