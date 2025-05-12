import React, {useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const Employeelist = () => {
    const [loading,setLoading]=useState(true);
    const [employees,setEmployees]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            try{
                const response=await EmployeeService.getEmployees();
                setEmployees(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    },[]);


    const deleteEmployee=(e,id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployeeById(id)
        .then(()=>{
            if(employees){
            setEmployees((prevElement)=>{
                return prevElement.filter((employee)=>employee.id !==id);
            })
            }
        })
          
   };


   const editEmployee=(e,id)=>{
    e.preventDefault();
    navigate(`/editEmployee/${id}`)
   };

    const navigate=useNavigate();
  return (
    <div className='container mx-auto my-8'>
    <div>
      <button
       onClick={()=>navigate("/addEmployee")}
       className='text-2xl bg-slate-600 hover:bg-blue-700 my-2 font-bold px-20 py-2 rounded flex items-center'><span> Add Employee</span>
       <img src="/logo.jpg" alt='logo' className="h-6 w-6 rounded-full ml-1" />
       </button>
    </div>
    <div>
      <table className='shadow'>
        <thead className='bg-slate-600'>
        <th className='px-6 py-3 uppercase tracking-wide'>Name</th>
        <th className='px-6 py-3 uppercase tracking-wide'>Phone</th>
        <th className='px-6 py-3 uppercase tracking-wide'>Email</th>
        <th className='px-6 py-3 uppercase tracking-wide'>Action</th>
        </thead>

        {!loading && (
            <tbody>
            {employees.map((employee)=>(

          <tr className='bg-gradient-to-r from-slate-600 to-gray-500 text-white hover:from-slate-700 hover:to-gray-600 hover:bg-white hover:text-black'>
          <td className='bg-gradient-to-r from-slate-500 to-gray-400 text-white hover:from-slate-700 hover:to-gray-600 text-left px-6 py-4 whitespace-nowrap'>{employee.name}</td>
          <td className='bg-gradient-to-r from-slate-500 to-gray-400 text-white hover:from-slate-700 hover:to-gray-600 text-left px-6 py-4 whitespace-nowrap'>{employee.phone} </td>
          <td className='bg-gradient-to-r from-slate-500 to-gray-400 text-white hover:from-slate-700 hover:to-gray-600 text-left px-6 py-4 whitespace-nowrap'>{employee.email}</td>
          <td className='bg-gradient-to-r from-slate-600 to-gray-500 text-left px-6 py-4 whitespace-nowrap'>
            <button 
            onClick={(e)=>editEmployee(e,employee.id)}
               className='hover:text-green-500 hover:cursor-pointer mr-4'>
               <FontAwesomeIcon icon={faEdit} /><span className="ml-1">Edit</span>
                </button>
            <button
              onClick={(e)=>deleteEmployee(e,employee.id)}
              className='hover:text-red-500 hover:cursor-pointer'
            >  <FontAwesomeIcon icon={faTrash} /> Delete  {/* Optional: <span className="ml-1">Delete</span> */}
             </button>
            </td>
          </tr>
            ))}
        </tbody>
        )}
        
      </table>
    </div>
    </div>
  )
}

export default Employeelist
