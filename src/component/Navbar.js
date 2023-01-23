import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(p) {

  const box={
    color :'white',
    fontSize : 40 ,
    fontFamily: 'Lemon'
  }
  return (
    <div className='header' id='myDIV'>

      
    <nav className='navbar navbar-expand-lg navbar-light' id="NAV">
  <div className="container-fluid">

    <a className={`navbar-brand }`}  style={box} href="/">{p.title}</a>
    
    <button style={{color :  p.set==='light'?'black':'white'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"  ></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-2" style={{fontSize:15}}>
        <li className="nav-item" style={ {fontSize: 20}}>
          <Link className={`nav-link active text-${p.set==='light'?'dark':'light'}`} aria-current="page"  to="/">Home</Link>
        </li>
        <li className="nav-item" style={ {fontSize: 20}}>
          <Link className={`nav-link active text-${p.set==='light'?'dark':'light'}`} to="/About">About</Link>
        </li>
        
      
      </ul>
     
     
      <div className={`form-check form-switch text-${p.set==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={p.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
