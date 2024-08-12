
import { useEffect, useState } from 'react';

function App() {

  const [emp, setEmp] = useState({});


  async function fetchEmp(){

    let a = await fetch("http://localhost:8091/employee");
    let data = await a.json();
    setEmp(data);

  }
  
  useEffect(() => {
    
    fetchEmp();
    
  }, [])
  
  console.log(emp);

  return (
    <>
      <h1 className=' text-blue-800' >{emp.id}</h1>
      <h1 >{emp.name}</h1>
      <div className='bg-red-500' >helo</div>
    </>
  )
}

export default App
