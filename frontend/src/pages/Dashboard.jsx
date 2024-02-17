import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Dashboard() {

    const [alltechers, setAllteachers] = useState([])
    const [allstudents, setAllStudents] = useState([])
    const [totalSalary, setTotalSalary] = useState([])

    const getTotalTechears = () => {
        axios.get("http://localhost:3000/teacher/total").then((res) => {
            setAllteachers(res.data.total)
        }).catch((error) => console.log(error))
    }

    const getTotalStuddent = () => {
        axios.get("http://localhost:3000/student/total").then((res) => {
            setAllStudents(res.data.total)
        }).catch((error) => console.log(error))
    }

    const getTotalSalary = () => {
        axios.get("http://localhost:3000/totalsalary").then((res) => {
            setTotalSalary(res.data[0].salary)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getTotalTechears()
        getTotalStuddent()
        getTotalSalary()
    }, [])

    return <div>
        <div className="flex gap-10 justify-center pt-10">
            <Link to="/teachers"><div className="border-b-8 text-center border-yellow-300 w-[300px] h-[200px] bg-red-300">
                <i class="fa-solid text-4xl text-cyan-300 mt-5 fa-user"></i>
                <h1 className="text-5xl pt-5 "> {alltechers > 0 ? alltechers : 0} </h1>
                <h1 className="text-4xl">Total Teachers</h1>
            </div></Link> 
            <Link to="/students"><div className="border-b-8 text-center border-yellow-300 w-[300px] h-[200px] bg-green-300">
                <i class="fa-solid text-4xl text-cyan-400 mt-5 fa-chalkboard-user"></i>
                <h1 className="text-5xl pt-5 "> {allstudents} </h1>
                <h1 className="text-4xl">Total Student</h1>
            </div> </Link> 
            <Link to="/teachers"><div className="border-b-8 text-center border-yellow-300 w-[300px] h-[200px] bg-gray-400">
            <i class="fa-solid text-5xl text-cyan-300 pt-5 fa-dollar-sign"></i>
                <h1 className="text-5xl pt-5 "> ${totalSalary > 0 ? totalSalary : 0} </h1>
                <h1 className="text-2xl">Total Salary Teachers</h1>
            </div> </Link> 
        </div>
    </div>
}

export default Dashboard
