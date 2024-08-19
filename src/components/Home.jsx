import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-5">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Employee Management App!</h1>
            <p className="text-lg font-medium text-gray-600 mb-6 w-2/3">This is a FullStack Application, Frontend is Build Using Reactjs, For Backend Technology I Have Used SpringBoot And For Storing The Employees Data I Have Utilized MySQL Database.</p>
            <p className="text-lg font-medium text-gray-600 mb-6 w-2/3">By Clicking The Buttons Below, You Can Navigate To Project Repository.</p>

            <div className="space-x-4 mb-6">

                <a target="_blank" href="https://github.com/SagarB04/EmployeeUI" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition- duraiton-300">
                    Frontend
                </a>
                <a target="_blank" href="https://github.com/SagarB04/EmployeeBE" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition- duraiton-300">
                    Backend
                </a>

            </div>
            <p className="text-md font-medium text-gray-600 w-2/3">If You Want To Connect With Me, Visit <NavLink to={`/contact`} className="text-blue-700 hover:underline"> Contact Page</NavLink>

            </p>
        </div>

    )
}

export default Home
