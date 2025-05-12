import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'

const AddEmployee = () => {
    const [employee,setEmployee]=useState({
        id:"",
        name:"",
        phone:"",
        email:"",
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        setEmployee({...employee, [e.target.name]:value})
    }


    const [isSubmitting, setIsSubmitting] = useState(false);

const saveEmployee = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // prevent double submission
    setIsSubmitting(true);
    try {
        const response = await EmployeeService.saveEmployee(employee);
        console.log("saved", response);
        navigate("/");
    } catch (error) {
        console.log(error);
    } finally {
        setIsSubmitting(false);
    }
};
 

    
    const reset=(e)=>{
        e.preventDefault();
        setEmployee({
            id:"",
            name:"",
            phone:"",
            email:"",
        });    
    }
    const navigate=useNavigate();
  return (
    <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
        <div className='text-3xl tracing-wider font-bold text-center py-4 px-8 flex items-center'>
            <p className="flex items-center">Add  
            <img src="/logo.jpg" alt="logo" className="h-7 w-7 ml-2 mr-2 rounded-full" />
                New Employee </p>
        </div>

        <div className='mx-10 my-2'>
            <input type='text' 
            name="name"
            value={employee.name}
            onChange={(e)=>handleChange(e)}
            className='w-full py-2 my-4 text-slate-800' placeholder='Name'></input>
            
            <input 
            type='number'
            name='phone'
            value={employee.phone}
            onChange={(e)=>handleChange(e)}
             className='w-full py-2 my-4 text-slate-800' placeholder='Phone'></input>
           
            <input type='email'
             name='email'
             value={employee.email}
             onChange={(e)=>handleChange(e)}
            className='w-full py-2 my-4 text-slate-800' placeholder='Email'></input>
        </div>
       

        <div className='flex my-4 space-x-4 px-20' >
            {/* <button
            onClick={saveEmployee}
            className='bg-green-600 hover:bg-green-700 py-2 px-6 rounded'> 
            Save</button> */}
            <button
                onClick={saveEmployee}
                disabled={isSubmitting}
                className={`bg-green-600 hover:bg-green-700 py-2 px-6 rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {isSubmitting ? "Saving..." : "Save"}
            </button>

            
            <button
            onClick={reset}
            className='bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded'> Clear</button>
            
            <button 
            onClick={()=>navigate("/")}
            className='bg-red-600 hover:bg-red-700 py-2 px-6 rounded'> Cancel</button>
        </div>
   
    </div>
  )
}

export default AddEmployee
