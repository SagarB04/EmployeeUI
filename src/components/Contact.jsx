const Contact = () => {
  return (
    <div className="h-[88vh] flex flex-col justify-evenly">
      <div className="text-slate-800 text-6xl text-center font-bold">Get In Touch</div>
      <div className="flex items-center justify-evenly ">

        <div className="flex flex-col items-center justify-evenly ">
          <svg className="h-24 w-24 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-slate-800" >Address</h1>
          <h4 className="text-xl font-semibold text-slate-700">BLR PG 2</h4>
          <h5 className="font-medium text-slate-700">Laxmi Chowk, Hinjewadi Phase 1</h5>
          <h5 className="font-medium text-slate-700">Pune, 411057</h5>
        </div>
        
        <div className="flex flex-col items-center justify-evenly ">
          <svg className="h-24 w-24 text-slate-800" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>
          <h1 className="text-2xl font-bold text-slate-800" >Phone</h1>
          <h4 className="text-xl font-semibold text-slate-700">Primary</h4>
          <h5 className="font-medium text-slate-700">+917247467282</h5>
          <h4 className="text-xl font-semibold text-slate-700">Other</h4>
          <h5 className="font-medium text-slate-700">+917974140785</h5>
        </div>
        
        <div className="flex flex-col items-center justify-evenly ">
          <svg className="h-24 w-24 text-slate-800" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
          <h1 className="text-2xl font-bold text-slate-800" >Email</h1>
          <h4 className="text-xl font-semibold text-slate-700">Primary</h4>
          <h5 className="font-medium text-slate-700">barmansagar01@gmail.com</h5>
          <h4 className="text-xl font-semibold text-slate-700">Other</h4>
          <h5 className="font-medium text-slate-700">7247467282s@gmail.com</h5>
        </div>

      </div>
    </div>
  )
}

export default Contact
