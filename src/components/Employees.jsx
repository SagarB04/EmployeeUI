import { useEffect, useState } from "react"
import Popup from "reactjs-popup";

const Employees = () => {

  const [list, setList] = useState([
    {
      id: 100,
      fname: "Sagar",
      lname: "Barman",
      email: "SKINGdcfvsd",
      phone: "515.123.4567",
      hireDate: "2003-06-17",
      jobId: "AD_PRES",
      salary: 24000,
      managerId: null,
      deptId: 90
    }


  ]);

  useEffect(() => {
    getAllEmployee();
  }, [list])


  const getAllEmployee = async () => {
    let a = await fetch("http://localhost:8090/employees");
    let data = await a.json();
    setList(data);
  }


  return (
    <div className="bg-gray-200 h-auto">

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center overflow-hidden shadow-xl shadow-blue-950 h-auto">
          <caption className="p-5 text-lg font-bold text-left rtl:text-right text-gray-600 bg-gray-200">
            Employees List
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Job Id
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody className="">

            {
              list.map((emp) => {
                return <tr key={emp.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {emp.id}
                  </th>
                  <td className="px-6 py-4">
                    {emp.fname + " " + emp.lname}
                  </td>
                  <td className="px-6 py-4">
                    {emp.jobId}
                  </td>
                  <td className="px-6 py-4">
                    {emp.phone}
                  </td>
                  <td className="px-6 py-4">
                    <Popup
                      trigger={<button className="button font-medium text-blue-500 hover:underline"> View </button>}
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
                                <td className="text-left break-all">{emp.id}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">First Name</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.fname}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Lasr Name</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.lname}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Email</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.email}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Phone</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.phone}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Hire Date</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.hireDate}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Job Id</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.jobId}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Salary</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.salary}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Manager Id</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.managerId}</td>
                              </tr>
                              <tr>
                                <td className="font-semibold text-right">Department Id</td>
                                <td className="font-semibold">:</td>
                                <td className="text-left break-all">{emp.deptId}</td>
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
