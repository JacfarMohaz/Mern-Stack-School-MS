import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterStudent() {

    const [studentId, setStudentId] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [className, setClassName] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")


    const navigate = useNavigate()

    const handlestudentRegister = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/create/student", {
            "Id": studentId,
            "name": name,
            "address": address,
            "className": className,
            "gender": gender,
            "status": status
        }).then((res) => {
            toast(`${name} Registered`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                onClose: () => navigate("/students")
            })
        }).catch((error) => console.log(error))
    }

    return <div>
    <h1 className="text-4xl font-semibold pb-20">Student Registration</h1>

    <form className="bg-blue-500 w-[80%] h-[450px] rounded-lg px-4 pt-10">
        <label className="text-xl pr-4 font-bold">ID:</label>
        <input value={studentId} onChange={(e) => setStudentId(e.target.value)} className="w-52 h-8 rounded-lg p-2 mb-8 outline-none" type="text" placeholder="Id" />
        <label className="text-xl pr-4 pl-20 font-bold">Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-52 h-8 rounded-lg p-2 mb-8 outline-none" type="text" placeholder="Name" /><br />
        <label className="text-xl pr-4 font-bold">Address:</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-52 h-8 rounded-lg p-2 outline-none" type="text" placeholder="Address" />
        <label className="text-xl pr-4 pl-20 font-bold">ClassName:</label>
        <input value={className} onChange={(e) => setClassName(e.target.value)} className="w-52 h-8 rounded-lg p-2 mb-8 outline-none" type="text" placeholder="ClassName" /><br />
        <label className="text-xl pr-4 font-bold">Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-52 h-10 rounded-lg p-2 mb-8 outline-none">
            <option value="">Please select one…</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select> 
        <label className="text-xl pr-4 pl-20 font-bold">Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-52 h-10 rounded-lg p-2 mb-8 outline-none">
            <option value="">Please select one…</option>
            <option value="Active">Active</option>
            <option value="Graduated">Graduated</option>
            <option value="Leave">Leave</option>
        </select>

        <button onClick={handlestudentRegister} className="px-12 rounded-lg text-xl py-2 ml-60 mt-12 bg-blue-400 text-white">Register</button>
    </form>

    <ToastContainer/>
</div>
}

export default RegisterStudent