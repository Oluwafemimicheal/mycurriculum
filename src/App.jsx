import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Curriculum from "./layouts/Curriculum";
import Course from "./components/Course";
import ReadFile from "./components/ReadFile";
import Login from "./components/Login";


function App() {
  const [pop, setPop] = useState(false)
  return (
    <div>
      {pop ? <Login /> : null}
      <Routes>
        <Route index path="/" element={<Curriculum handleLoginPopUp={() => setPop(true)} />}></Route>
        <Route path="course/:id" element={<Course />}></Route>
        <Route path="/text/:id" element={<ReadFile />}></Route>
      </Routes>
    </div>
  )
}

export default App;