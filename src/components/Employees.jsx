import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Employees = () => {


  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading...");
  const navigate = useNavigate();

  const getAllEmployee = async () => {
    try {
      let resp = await fetch("http://localhost:8090/employees");
      let data = await resp.json();
      if (!resp.ok) {
        setMessage("Something went Wrong...")
      }
      setLoading(false)
      setList(data)

    } catch (error) {
      console.log('Error fetching employees:' + error);
      setMessage(`Server Down, Try again later!`)
    }
  }

  useEffect(() => {
    getAllEmployee();
  }, [list])

  if (loading) {
    return (
      <div className="max-w-md md:max-w-screen-lg mx-auto my-5 bg-gray-500 font-semibold h-auto text-gray-100 text-center p-5">
        {message}
      </div>
    )
  }
  return (
    <div>
      <div className="flex justify-between">

        <div onClick={() => navigate("/")} className="flex w-fit space-x-1 font-semibold text-blue-800 hover:text-blue-900 hover:cursor-pointer active:font-bold p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
          <span>Back</span>
        </div>

        <div onClick={() => navigate("/addemployee")} className="flex w-fit space-x-1 font-semibold text-blue-800 hover:text-blue-900 hover:cursor-pointer active:font-bold p-2">
          <span>Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </div>

      </div>
      <div className="lg:w-2/3 lg:my-2 lg:mx-auto p-5 text-lg font-bold text-left rtl:text-right text-gray-600">
              Employees List
        </div>
      <div className="h-auto lg:w-2/3 lg:my-2 lg:mx-auto lg:rounded-xl shadow-md shadow-blue-950 lg:overflow-hidden">

        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-600 font-semibold">
            
            <thead className="text-xs text-gray-100 uppercase bg-slate-800 ">
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
                  return <tr key={emp.id} className="odd:bg-slate-100  even:bg-slate-50 border-b dark:border-gray-700 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap e">
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
                      <button onClick={() => navigate(`/employee/${emp.id}`)} className="button font-bold text-blue-500 hover:underline"> View </button>
                    </td>
                  </tr>

                })

              }


            </tbody>
          </table>

        </div>

      </div>
    </div>

  )
}

export default Employees
