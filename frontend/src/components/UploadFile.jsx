import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadFile() {

    const [file, setFile] = useState(null)

    const navigate = useNavigate()

    const handleRegisterDocument = (e) => {
        const formData = new FormData()
        formData.append("file", file)

        e.preventDefault()
        axios.post("http://localhost:3000/teacher/file", formData).then(() => {
            toast(`Document has ben saved successfully`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                onClose: () => navigate("/documents")
            })
        }).catch((error) => console.log(error))
    }

    return <div>
        <div className="pt-20">
            <form className="bg-blue-400 w-[25em] h-40 p-4 rounded-lg shadow-xl ml-52">
                <input onChange={(e) => setFile(e.target.files[0])} className="border-2 p-2 file:bg-cyan-300 file:border-none" type="file" accept=".pdf" />
                <button onClick={handleRegisterDocument} className="bg-cyan-400 px-5 py-2 text-white text-xl rounded-lg mt-8">Upload Data</button>
            </form>
        </div>

        <ToastContainer/>

    </div>
}

export default UploadFile