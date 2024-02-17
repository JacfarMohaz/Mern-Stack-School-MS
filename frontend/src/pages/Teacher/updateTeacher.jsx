import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateTeacher() {

    const[teacherId, setTeacherId] = useState()
    const[name, setName] = useState()
    const[address, setAddress] = useState()
    const[email, setEmail] = useState()
    const[gender, setGender] = useState()
    const[salary, setSalary] = useState()

    const params = useParams()

    const navigate = useNavigate()

    const handlsingleTeacher = () => {
        axios.get(`http://localhost:3000/teacherID/${params.id}`).then((res) => {
            setTeacherId(res.data[0].Id)
            setName(res.data[0].name)
            setAddress(res.data[0].address)
            setEmail(res.data[0].email)
            setGender(res.data[0].gender)
            setSalary(res.data[0].salary)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handlsingleTeacher()
    },[])

    const handlUpdateTeacher = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/updateTeacher/${params.id}`, {
            "Id": teacherId,
            "name": name,
            "email": email,
            "address": address,
            "gender": gender,
            "salary": salary
        }).then(() => {
            toast(`${name} Updated`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                onClose: () => navigate("/teachers")
            })
        }).catch((error) => console.log(error))
    }

    return <div>
    <h1 className="text-4xl font-semibold pb-20">Teacher Registration</h1>

    <form className="bg-blue-500 w-[80%] h-[450px] rounded-lg px-4 pt-10">
        <label className="text-xl pr-4 font-bold">ID:</label>
        <input value={teacherId} onChange={(e) => setTeacherId(e.target.value)} className="w-52 h-8 rounded-lg p-2 mb-8 outline-none" type="text" placeholder="Id" />
        <label className="text-xl pr-4 pl-20 font-bold">Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-52 h-8 rounded-lg p-2 mb-8 outline-none" type="text" placeholder="Name" /><br />
        <label className="text-xl pr-4 font-bold">Address:</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-52 h-8 rounded-lg p-2 outline-none" type="text" placeholder="Address" />
        <label className="text-xl pr-4 pl-20 font-bold">Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-52 h-8 rounded-lg p-2 mb-8 outline-none" type="text" placeholder="Email" /><br />
        <label className="text-xl pr-4 font-bold">Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-52 h-10 rounded-lg p-2 mb-8 outline-none">
            <option value="">Please select one…</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select> 
        <label className="text-xl pr-4 pl-20 font-bold">Salary:</label>
        <input value={salary} onChange={(e) => setSalary(e.target.value)} className="w-52 h-8 rounded-lg p-2 mb-8 outline-none" type="text" placeholder="Salary" /><br />
        <button onClick={handlUpdateTeacher} className="px-12 rounded-lg text-xl py-2 ml-60 mt-12 bg-blue-400 text-white">Update</button>
    </form>

    <ToastContainer/>
</div>
} 


export default UpdateTeacher