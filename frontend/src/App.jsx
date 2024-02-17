import { Routes, Route, useNavigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Student/Students"
import Teachers from "./pages/Teacher/Teachers"
import Documents from "./pages/Documents"
import SideNav from "./components/Sidenav"
import RegisterTeacher from "./components/Teacher Compnents/RegisterTeacher"
import UpdateTeacher from "./pages/Teacher/updateTeacher"
import RegisterStudent from "./components/Student Components/RegisterStudent"
import UpdateStudent from "./pages/Student/UpdateStudent"
import LogIn from "./pages/Login"
import { useEffect } from "react"
import UploadFile from "./components/UploadFile"

function App() {

  const isAuth = localStorage.getItem("admin")

  const navigate = useNavigate()

  const handlRefresh = () => {
    if(!isAuth){
      navigate("/")
    }
  }

  useEffect(() => {
    handlRefresh()
  },[])

  return <> {isAuth ?
    <SideNav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/registerTeacher" element={<RegisterTeacher />} />
        <Route path="/updateTeacher/:id" element={<UpdateTeacher />} />
        <Route path="/registerStudent" element={<RegisterStudent />} />
        <Route path="/updateStudent/:id" element={<UpdateStudent />} />
        <Route path="/uploadfile" element={<UploadFile />} />
      </Routes>
    </SideNav>
    :
    <Routes>
      <Route path="/" element={<LogIn />} />
    </Routes>
  }
  </>

}

export default App
