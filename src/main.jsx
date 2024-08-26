import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddEmployee from "./components/AddEmployee"
import Contact from "./components/Contact"
import Employees from "./components/Employees"
import Home from "./components/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import EmployeeData from './components/EmployeeData.jsx'


const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "addemployee/:id?",
        element: <AddEmployee />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "employee/:id",
        element: <EmployeeData/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
