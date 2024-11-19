import logo from './logo.svg';
import './App.css';
import  {students}  from '.data/StudentDb';
import  StudentTable from '.components/StudentTable';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
     <h1>Students Information Portal</h1>
     <hr/>
     <table>
      <tbody>
       <tr>
        <td>
          <studentTable students={students}/>
        </td>
        </tr> 
      </tbody>
     </table>
    </div>
    </Student>
    </StudentTable/>
  );
}

export default App;
