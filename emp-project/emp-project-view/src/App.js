// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom"
import AddEmployee from './components/AddEmployee';

import Employeelist from './components/Employeelist';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
   <> 
    <BrowserRouter>
    <Navbar/>

    <Routes>
     <Route index element={<Employeelist/>}/>
      <Route path="/" element={<Employeelist/>}/>
      <Route path="/addEmployee" element={ <AddEmployee/>}/>
      <Route path="/editEmployee/:id" element={ <UpdateEmployee/>}/>
    </Routes>
    </BrowserRouter>
   </>

  );
}

export default App;
