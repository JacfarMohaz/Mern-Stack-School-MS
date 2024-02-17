import { Link } from "react-router-dom"

function StudentData(props) {
    return <tbody>
    <tr className="text-center">
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.address}</td>
        <td>{props.className}</td>
        <td>{props.gender}</td>
        <td>{props.status}</td>
        <td>{props.date}</td>
        <td>
            <div className="flex items-center pl-6 cursor-pointer gap-5">
                <Link to={`/updateStudent/${props.updateID}`}><i className="fa-solid text-xl text-green-400 fa-pen-to-square"></i></Link> 
                <i onClick={props.deleteStudent} className="fa-solid text-xl text-red-500 fa-trash"></i>
            </div>
        </td>
    </tr>
</tbody>
}

export default StudentData