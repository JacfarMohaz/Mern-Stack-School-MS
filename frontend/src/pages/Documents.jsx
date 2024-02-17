import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import DocumentData from "../components/DocumentData"
function Documents() {

    const [getFile, setGetFile] = useState([])

    const handleGetDocument = () => {
        axios.get("http://localhost:3000/read/file").then((res) => {
            setGetFile(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleGetDocument()
    },[])

    return <div>
        <div className="pt-5">
            <Link to="/uploadfile" className="bg-blue-400 text-white px-6 py-3 ">Upload Document</Link>
        </div>

        <div className="grid grid-cols-3 gap-5 pt-20">

        {
            getFile.map((data) => {
                return <DocumentData fileName={`http://localhost:3000/alldocs/${data.file}`} />
            })
        }

        </div>
        
    </div>
}

export default Documents