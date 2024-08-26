
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const EmployeeData = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    //getting the employee details by id
    const fetchEmployee = async () => {

        try {
            let resp = await fetch(`http://localhost:8090/employee?id=${id}`);
            if (resp.ok) {
                let b = await resp.json();
                setEmployee(b);
            } else {
                setMessage('Employee not fetched, Try again!')
                setError(true)
            }

        } catch (error) {
            console.error('Error fetching employee:', error);
            setMessage('Server Down, Try again later!')
            setError(true)
        }
    };

    useEffect(() => {
        fetchEmployee();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const deleteEmployee = async (id) => {
        try {
            let resp = await fetch(`http://localhost:8090/employee/delete?id=${id}`, {
                method: 'DELETE'
            })
            if (!resp.ok) {
                setMessage("Delete not Successful")
                setError(true)
            }
            navigate("/employees");
        } catch (error) {
            setMessage("Error Occured")
            setError(true)
        }


    }

    return (
        <div className="lg:w-2/3 mx-auto my-2">

            <div onClick={() => navigate("/employees")} className="flex w-fit space-x-1 font-semibold text-blue-800 hover:text-blue-900 hover:cursor-pointer active:font-bold p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                <span>Back</span>
            </div>
            <div className={`max-w-md md:max-w-screen-lg m-auto bg-gray-500 font-semibold h-auto text-gray-100 text-center p-5 ${error ? '' : 'hidden'}`}>
                {message}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 w-3/4 m-auto text-center">
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Employee Id</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.id}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">First Name</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.fname}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Last Name</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.lname}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Email Id</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.email}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Phone No.</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.phone}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Hire Date</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.hireDate}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Salary</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.salary}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Job Id</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.jobId}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Manager Id</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.managerId}</div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <div className="font-semibold text-sm text-slate-500">Department Id</div>
                    <div className="font-semibold text-lg text-slate-700">{employee.deptId}</div>
                </div>

            </div>
            <div className="w-3/4 m-auto text-center group space-x-5">
                <NavLink to={`/addemployee/${employee.id}`} className="bg-green-700 outline font-semibold text-sm rounded text-gray-100 p-2 hover:outline-green-300 active:outline-green-500">Update</NavLink>
                <button onClick={() => deleteEmployee(employee.id, close)} className="bg-rose-700 font-semibold text-sm rounded text-gray-100 p-2 outline hover:outline-red-300 active:outline-red-500">Delete</button>
            </div>

        </div>
    )
}

export default EmployeeData
