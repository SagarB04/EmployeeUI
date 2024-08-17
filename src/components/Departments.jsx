import { useEffect, useState } from "react"

const Departments = () => {

  const [num, setNum] = useState(0);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setNum(Number.parseInt(e.target.value) );
  }
  useEffect(() => {
    
    setMsg("");
    if(num<0){
      setMsg("");
      setMsg("enter positive number")
    } else {
      setMsg("");
      setMsg(`${num+2} ${num+4} ${num+6}`)
    }


  }, [num])

  return (
    <>
      <input type="number" onChange={(e) => { handleChange(e) }} />
      <p>{msg}</p>
    </>
  )
}

export default Departments
