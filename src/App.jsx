import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Curriculum from "./layouts/Curriculum";
import Course from "./components/Course";
import ReadFile from "./components/ReadFile";
import Login from "./components/Login";
import { LoginContext } from "./context/LoginContext";



function App() {
  const { pop } = useContext(LoginContext)

  return (
    <div>
      {pop ? <Login /> : null}
      <Routes>
        <Route index path="/" element={<Curriculum />}></Route>
        <Route path="course/:id" element={<Course />}></Route>
        <Route path="/text/:id" element={<ReadFile />}></Route>
      </Routes>
    </div>
  )
}

export default App;