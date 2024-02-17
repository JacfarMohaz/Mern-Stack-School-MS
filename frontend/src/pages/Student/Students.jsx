import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import StudentData from "../../components/Student Components/StudentData"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Students() {

    const [studentData, setStudentData] = useState([])

    const [page, setPage] = useState(0)

    const handlReadStudnet = () => {
        axios.get(`http://localhost:3000/read/student?page=${page}`).then((res) => {
            setStudentData(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handlReadStudnet()
    }, [page])

    const handleNextButton = () => {
        setPage(page + 1)
    }

    const handlePrevButton = () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }

    const handleSearchStudent = (id) => {
        const key = id.target.value
        if (key) {
            axios.get(`http://localhost:3000/student/search/${key}`).then((res) => {
                setStudentData(res.data)
            }).catch((error) => console.log(error))
        }
        else {
            handlReadStudnet()
        }
    }


    const handleStudentDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/student/${id}`).then(() => {
            toast("Student Deleted", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
            })
            handlReadStudnet()
        }).catch((error) => console.log(error))
    }

    return <div>

        <div className="py-5 flex justify-between">
            <Link to="/registerStudent"><button className="bg-blue-400 px-5 py-2 rounded-lg mb-3">Add Student</button></Link>
            <form className="mr-5">
                <input onChange={handleSearchStudent} className="w-[300px] h-[50px] border-2 border-blue-400 rounded-lg p-2" type="text" placeholder="Searching Student" />
            </form>
        </div>

        <table className="w-full">
            <thead className="py-10 bg-blue-400 rounded-lg">
                <tr className="text-2xl text-white">
                    <th className="py-2">ID</th>
                    <th className="py-2">Name</th>
                    <th className="py-2">Address</th>
                    <th className="py-2">Class Name</th>
                    <th className="py-2">Gender</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Options</th>
                </tr>
            </thead>

            {
                studentData.length > 0 ? studentData.map((data) => {
                    return <StudentData updateID={data._id} deleteStudent={() => handleStudentDelete(data._id)} id={data.Id} name={data.name} address={data.address} className={data.className} gender={data.gender} status={data.status} date={new Date(data.createdAt).toDateString()} />
                })
                    :
                    <p>There is no data yet</p>
            }

        </table>

        <div className="flex gap-5 justify-end absolute bottom-2 right-2 mt-4 mr-3">
            <button onClick={handlePrevButton} className="bg-blue-500 px-4 py-2 rounded text-white">Prev</button>
            <button onClick={handleNextButton} className="bg-blue-500 px-4 py-2 rounded text-white">Next</button>
        </div>

        <ToastContainer />
    </div>
}

export default Students