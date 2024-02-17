import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function LogIn() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const LoginAdmin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login/admin", {
            "userName": username,
            "password": password
        }).then((res) => {
            if(res.data.error){
                toast("Incrrect password or userName", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                })
            }
            else{
                toast("Successfully Login", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    onClose: () => navigate("/dashboard")
                })
                localStorage.setItem("admin", JSON.stringify(res.data))
            }
        })
    }

    return <div className="bg-gray-500 w-full h-screen">

        <div className="flex justify-center">
            <form className="w-[400px] h-[300px] mt-28 p-5 rounded-lg bg-blue-400 shadow-lg shadow-gray-700">
                <h1 className="text-2xl text-center font-semibold">School Management System</h1>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="mb-5 w-[20em] h-[2em] mt-10 outline-none bg-gray-300" type="text" placeholder="Enter Your UserName" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}  className="mb-5 w-[20em] h-[2em] outline-none bg-gray-300" type="text" placeholder="Enter Your Password" /><br />
                <button onClick={LoginAdmin} className="outline-blue-800 px-10 ml-20 rounded-lg py-2 bg-cyan-400">LogIn</button>
            </form>
        </div>

        <ToastContainer/>

    </div>
}

export default LogIn