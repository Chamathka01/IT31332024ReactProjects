import {students} from '../StudentDB';
export default function StudentTable(prosps){
    return(
        <div>

        </div>
    );
    <table>
        <tr>
            <td>First name</td>
            <td>Last name</td>
            <td>Course</td>
            <td>Country</td>
            <td>Profile</td>
        </tr>

        {students.map((student)=>(
            <tr key={student.studentId}>
             <td>{student.firstName}</td>
             <td>{student.lastName}</td>
             <td>{student.age}</td>  
             <td>{student.course}</td>  
             <td>{student.gender}</td>
             <td>{student.address.country}</td>
             <td>{student.skills}</td>
             <td>{student.profilePic}</td>
             </tr>
        ))}
    </table>
}