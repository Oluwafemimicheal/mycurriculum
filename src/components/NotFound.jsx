import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="lg:text-4xl">Oops Page not found</h1>
      <Link to={'/'} className="py-2 px-4 bg-blue-900 hover:bg-blue-900/80 text-white rounded-lg">Back Home</Link>
    </div>
  )
}

export default NotFound
