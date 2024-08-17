import { useState } from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleFunction = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full sticky top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
          <a href="https://github.com/SagarB04/EmployeeUI" target="_blank" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Employee Management</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"
            onClick={toggleFunction}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to={"/"} onClick={toggleFunction} className="block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500" aria-current="page">Home</NavLink>
                {/* className={(e)=>{return e.isActive?"red":""}} > */}
              </li>
              <li>
                <NavLink to={"/employees"} onClick={toggleFunction} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Employees</NavLink>
              </li>
              <li>
                <NavLink to={"/departments"} onClick={toggleFunction} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Department</NavLink>
              </li>
              <li>
                <NavLink to={"/addemployee"} onClick={toggleFunction} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Add Employee</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} onClick={toggleFunction} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
