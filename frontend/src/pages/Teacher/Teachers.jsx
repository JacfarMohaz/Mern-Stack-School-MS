import { Link } from "react-router-dom"
import TeacherData from "../../components/Teacher Compnents/TeacherData"
import { useState, useEffect } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Teachers() {

    const [teacherData, setTeacherData] = useState([])

    const getTeacherData = () => {
        axios.get("http://localhost:3000/allTeachers").then((res) => {
            setTeacherData(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getTeacherData()
    },[])

    const handlSearchTeacher = (id) => {
        const data = id.target.value
       if(data){
        axios.get(`http://localhost:3000/search/teacher/${data}`).then((res) =>{
            setTeacherData(res.data)
        }).catch((error) => console.log(error))
       }
       else{
        getTeacherData()
       }
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`).then(() => {
            toast("Teacher Deleted successfully", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false
            })
            getTeacherData()
        }).catch((error) => console.log(error))
    }

    return <div>

        <div className="py-5 flex justify-between">
            <Link to="/registerTeacher" className="bg-blue-400 px-5 py-2 rounded-lg mb-3">Add Teacher</Link>
            <form className="mr-5">
                <input onChange={handlSearchTeacher} className="w-[300px] h-[50px] border-2 border-blue-400 rounded-lg p-2" type="text" placeholder="Searching Teacher" />
            </form>
        </div>

        <table className="w-full">
            <thead className="py-10 bg-blue-400 rounded-lg">
                <tr className="text-2xl text-white">
                    <th className="py-2">ID</th>
                    <th className="py-2">Name</th>
                    <th className="py-2">Address</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Gender</th>
                    <th className="py-2">Salary</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Options</th>
                </tr>
            </thead>
            {
                teacherData.length > 0 ? teacherData.map((data) => {
                    return <TeacherData updateID={data._id} deleteTeacher={() => handleDelete(data._id)} id={data.Id} name={data.name} address={data.address} email={data.email} gender={data.gender} salary={data.salary} date={new Date(data.createdAt).toDateString()} />
                })
                :
                <p>There is no data yet</p>
            }
        </table>

        <ToastContainer />
    </div>
}

export default Teachers