import './App.css';
import  {students}  from '.data/StudentDb';
import  StudentTable from '.components/StudentTable';


function App() {
  return (
    <div className="App">
     <h1>Students Information Portal</h1>
     <hr/>
     <table width="100%">
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
