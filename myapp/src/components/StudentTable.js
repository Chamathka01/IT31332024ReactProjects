import '..assests/css/compo.css';
import Profile from './Profile';
import {useState} from 'react';
export default function StudentTable(props){
    const [stu,setStu]=useState(props,students[0]);
    return(
        <div className="outerDiv">
            <div className="leftDiv">
            <table border="1">
        <thread>
        <tr>
            <td>First name</td>
            <td>Last name</td>
            <td>Course</td>
            <td>Country</td>
            <td>Profile</td>
        </tr>
        </thread>
        <tbody>
           {
            props.students.map( student=>
                <tr>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>  
                    <td>{student.course}</td>  
                    <td>{student.gender}</td>
                    <td>{student.address.country}</td>
                    <td><button id = {student.studentId}onClick = {()=>{setStu(student)}}>view</button></td>
                     
                </tr>
            )
           } 
        </tbody>

    
       
    </table>
    </div>
            <div classNmae='rightdev'>
                <Profile stu={stu}/>
            </div>

        </div>
    );
    
}