import { Link } from "react-router-dom"

function TeacherData(props) {
    return <tbody>
    <tr className="text-center">
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.address}</td>
        <td>{props.email}</td>
        <td>{props.gender}</td>
        <td>${props.salary}</td>
        <td>{props.date}</td>
        <td>
            <div className="flex items-center pl-6 cursor-pointer gap-5">
                <Link to={`/updateTeacher/${props.updateID}`}><i className="fa-solid text-xl text-green-400 fa-pen-to-square"></i></Link> 
                <i onClick={props.deleteTeacher} className="fa-solid text-xl text-red-500 fa-trash"></i>
            </div>
        </td>
    </tr>
</tbody>

}

export default TeacherData