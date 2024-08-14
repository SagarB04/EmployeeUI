import { useState } from "react"
import Popup from "reactjs-popup";

const Employees = () => {

  const [list, setList] = useState([
    {
      employeeId: 121,
      firstName: "Lex",
      lastName: "Luthar",
      phone: 1223211,
      salary: 45000,
      departmentId: 89,
      jobId: "SA_MAN",
    },
    {
      employeeId: 131,
      firstName: "Alex",
      lastName: "Turner",
      phone: 875311,
      salary: 75000,
      departmentId: 99,
      jobId: "IT_MAN",
    }
  ]);




  return (
    <div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:m-5">
        <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-800 bg-gray-200 ">
            Employees List
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody>

            {
              list.map((emp) => {
                return <tr key={emp.employeeId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {emp.employeeId}
                  </th>
                  <td className="px-6 py-4">
                    {emp.firstName}
                  </td>
                  <td className="px-6 py-4">
                    {emp.lastName}
                  </td>
                  <td className="px-6 py-4">
                    {emp.phone}
                  </td>
                  <td className="px-6 py-4">
                  <Popup
          trigger={<button className="button font-medium text-blue-500  hover:underline"> View </button>}
          modal
          nested
        >
          {(close) => (
            <div className=" text-slate-900 bg-white rounded-lg w-96 shadow-lg shadow-neutral-700">
              <div className="flex rounded-t-lg justify-end text-red-600 font-extrabold text-2xl bg-blue-950">
                <button className="px-2" onClick={close}>
                  &times;
                </button>
              </div>

              <div className="text-center bg-blue-950 text-slate-100 pb-4 font-semibold"> Employee detail </div>

              <div className="p-4 bg-gray-200 w-full">

                <table className="m-auto w-full text-center table-fixed ">
                  <tr>
                    <td className="font-semibold text-right">Employee Id</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{emp.employeeId}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">First Name</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{emp.firstName}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Lasr Name</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{emp.lastName}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Email</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">sass</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Phone</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{emp.phone}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Hire Date</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">hiredddddddjfjfjfjfate</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Job Id</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{"dfhsd"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Salary</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{emp.salary}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Manager Id</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{"mange"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-right">Department Id</td>
                    <td className="font-semibold">:</td>
                    <td className="text-left break-all">{emp.departmentId}</td>
                  </tr>
                </table>

              </div>

              <div className="flex justify-between p-2 font-semibold rounded-b-lg space-x-2 bg-slate-300 border border-t-slate-300">
                <button className="text-green-700 hover:underline">Update</button>
                <button className="text-rose-700 hover:underline">Delete</button>
              </div>
            </div>
          )}
        </Popup>
                  </td>
                </tr>

              })

            }


          </tbody>
        </table>
       
      </div>

    </div>
  )
}

export default Employees
