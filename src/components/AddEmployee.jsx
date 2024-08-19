import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {

  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  const [toggleId, setToggle] = useState(false);
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();

  //getting the employee details by id
  const fetchEmployee = async () => {

    try {
      let resp = await fetch(`http://localhost:8090/employee?id=${id}`);
      let b = await resp.json();
      if (resp.ok) {
        console.log(b);
        setEmployee(b);
      }

    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  useEffect(() => {

    if (id != null) {
      setToggle(true)
      fetchEmployee();
    }
  }, [id]);

  //saving the employee details
  const onSubmit = async (data) => {

    console.log(data)
    try {
      let resp = await fetch('http://localhost:8090/employee/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (resp.ok) {
        const result = await resp.json();
        console.log('Employee saved:', result);
        navigate("/employees");
      } else {
        console.log('Error saving employee-', resp.statusText);
        alert("Employee not added");
      }

    } catch (error) {
      console.log('Error saving employee:', error);
      alert("Server is Down");
    }
  };

  return (
    <div className="p-5">


      <h1 className="max-w-md md:max-w-screen-lg m-auto px-2 py-5 text-lg font-bold text-left rtl:text-right text-gray-600 bg-gray-200">Add New Employee</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md md:max-w-screen-lg mx-auto p-2">

        <div className="grid md:grid-cols-2 md:gap-6">

          {/* employee id */}
          <div className={`relative z-0 w-full mb-5 group ${toggleId ? "" : "hidden"}`} >
            <input type="text" id="floating_empid" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder="" disabled defaultValue={employee.id} />


            <label htmlFor="floating_empid" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employee ID</label>
          </div>

          {/* first name */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("fname", {
                required: '*First name is required',
                minLength: {
                  value: 3,
                  message: '*Length must be greater than 2'
                },
                maxLength: {
                  value: 10,
                  message: '*Length must be less than or equal to 10'
                },
                pattern: {
                  value: /^[a-zA-Z]*$/,
                  message: "*First Name can only contain alphabets",
                },
              })}
              aria-invalid={errors.fname ? "true" : "false"}
              type="text" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.fname} />

            {errors.fname?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.fname.message}</p>}

            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>

          {/* last name */}
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("lname", {
              required: '*Last name is required',
              minLength: {
                value: 3,
                message: '*Length must be greater than 2'
              },
              maxLength: {
                value: 10,
                message: '*Length must be less than or equal to 10'
              },
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: "*Last Name can only contains alphabets",
              },
            })}
              aria-invalid={errors.lname ? "true" : "false"}
              type="text" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.lname} />

            {errors.lname?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.lname.message}</p>}

            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>

          {/* email */}
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("email", {
              required: '*Email is required',
              maxLength: {
                value: 25,
                message: '*Max length must be 25'
              },
              pattern: {
                value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$/,
                message: "*Email should be like [abcs_8324@gasdf.com",
              },
            })} aria-invalid={errors.email ? "true" : "false"}
              type="text" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.email} />

            {errors.email?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.email.message}</p>}

            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>

          {/* phone */}
          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" {...register("phone",
              {
                required: '*Phone number is required',
                minLength: {
                  value: 10,
                  message: '*Phone number must be of 10 digits',
                },
                maxLength: {
                  value: 10,
                  message: '*Phone number must be of 10 digits'
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: '*Phone number must contain only digits',
                },
              })} aria-invalid={errors.phone ? "true" : "false"}
              id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.phone} />

            {errors.phone?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.phone.message}</p>}

            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
          </div>

          {/* hiredate */}
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("hireDate", {
              required: '*Hire Date is required'

            })}
              aria-invalid={errors.hireDate ? "true" : "false"}
              type="date" id="floating_hdate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.hireDate} />
            {errors.hireDate?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.hireDate.message}</p>}

            <label htmlFor="floating_hdate" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hire Date</label>
          </div>

          {/* salary */}
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("salary", {
              required: '*Salary is required',
              maxLength: {
                value: 8,
                message: '*Maximum length must be 6'
              },
              pattern: {
                value: /^[0-9.]+$/,
                message: '*Salary can contain only digits',
              },
            })}
              aria-invalid={errors.salary ? "true" : "false"}
              type="text" id="floating_salary" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.salary} />
            {errors.salary?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.salary.message}</p>}

            <label htmlFor="floating_salary" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary</label>
          </div>

          {/* jobid */}
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("jobId", {
              required: '*Job id is required',
              pattern: {
                value: /^[a-zA-Z_]*$/,
                message: "*Job id can only contains alphabets",
              },

            })}
              aria-invalid={errors.jobId ? "true" : "false"}
              type="text" id="floating_jobid" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.jobId} />
            {errors.jobId?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.jobId.message}</p>}

            <label htmlFor="floating_jobid" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job ID</label>
          </div>

          {/* manager id */}
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("managerId", {
              required: '*Manager id is required',
              maxLength: {
                value: 6,
                message: '*Maximum length must be 6'
              },
              pattern: {
                value: /^[0-9]+$/,
                message: '*Manager id can contain only digits',
              },
            })}
              aria-invalid={errors.managerId ? "true" : "false"}
              type="text" id="floating_managerid" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.managerId} />
            {errors.managerId?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.managerId.message}</p>}

            <label htmlFor="floating_managerid" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Manager ID</label>
          </div>

          {/* department id */}
          <div className="relative z-0 w-full mb-5 group">
            <input {...register("deptId", {
              required: '*Department id is required',
              maxLength: {
                value: 4,
                message: '*Maximum length must be 4'
              },
              pattern: {
                value: /^[0-9]+$/,
                message: '*Department id can contain only digits',
              },
            })}
              aria-invalid={errors.deptId ? "true" : "false"}
              type="text" id="floating_dept" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " defaultValue={employee.deptId} />
            {errors.deptId?.message && <p className="text-red-600 font-semibold text-sm" role="alert">{errors.deptId.message}</p>}

            <label htmlFor="floating_dept" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department ID</label>
          </div>
        </div>

        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:outline-none active:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto my-3 px-5 py-2.5 text-center " value={toggleId ? "Update" : "Save"} />

      </form>


    </div>
  )
}

export default AddEmployee
