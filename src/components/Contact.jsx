const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="text-slate-800 text-6xl text-center font-bold p-6">Get In Touch</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 place-items-center p-4 bg-slate-300">

        <div className="flex flex-col items-center justify-center space-y-1.5 text-center size-72">
          <svg className="h-24 w-24 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-slate-800" >Address</h1>
          <h4 className="text-xl font-semibold text-slate-700">BLR PG 2</h4>
          <h5 className="font-medium text-slate-700">Laxmi Chowk, Hinjewadi Phase 1</h5>
          <h5 className="font-medium text-slate-700">Pune, 411057</h5>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1.5 text-center size-72">
          <svg className="h-24 w-24 text-green-900" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>
          <h1 className="text-2xl font-bold text-slate-800" >Phone</h1>
          <h4 className="text-xl font-semibold text-slate-700">Primary</h4>
          <h5 className="font-medium text-slate-700">+917247467282</h5>
          <h4 className="text-xl font-semibold text-slate-700">Other</h4>
          <h5 className="font-medium text-slate-700">+917974140785</h5>
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-1.5 size-72">
          <svg className="h-24 w-24 text-rose-900" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
          <h1 className="text-2xl font-bold text-slate-800" >Email</h1>
          <h4 className="text-xl font-semibold text-slate-700">Primary</h4>
          <h5 className="font-medium text-slate-700">barmansagar01@gmail.com</h5>
          <h4 className="text-xl font-semibold text-slate-700">Other</h4>
          <h5 className="font-medium text-slate-700">7247467282s@gmail.com</h5>
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-1.5 size-72 lg:col-span-3 md:col-span-3">
          <svg className="h-24 w-24 text-blue-900 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <h1 className="text-2xl font-bold text-slate-800" >Social</h1>

          <div className="flex space-x-4 p-2">
            <a target="_blank" href="https://www.linkedin.com/in/sagar-barman-156695245/"><svg className="h-10 w-10 text-blue-700 rounded-lg hover:bg-blue-300 active:bg-blue-400 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
            <a target="_blank" href="https://github.com/SagarB04"><svg className="h-10 w-10 text-slate-700 rounded-lg hover:bg-slate-400 active:bg-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a>
            <a target="_blank" href="https://www.instagram.com/__sagar_barman__/"><svg className="h-10 w-10 text-pink-600 rounded-lg hover:bg-pink-300 active:bg-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
