import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.myMode} bg-${props.myMode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="About">about</Link>
        </li>
      </ul>
            <div className='d-flex'>
              <div  className="bg-primary rounded mx-2" onClick={()=>{props.togglMode('primary');}} style={{height:'30px', width: '30px', cursor:'pointer' }}></div>
              <div  className="bg-danger rounded mx-2" onClick={()=>{props.togglMode('danger');}} style={{height:'30px', width: '30px', cursor:'pointer' }}></div>
              <div  className="bg-warning rounded mx-2" onClick={()=>{props.togglMode('warning');}} style={{height:'30px', width: '30px', cursor:'pointer' }}></div>
              <div  className="bg-success rounded mx-2" onClick={()=>{props.togglMode('success');}} style={{height:'30px', width: '30px', cursor:'pointer' }}></div>
            
            
            </div>  

        <div className={`form-check form-switch text-${props.myMode==="light"?"dark":"light"}`}>
          <input className="form-check-input" onClick={()=>{props.togglMode(null);  }} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode </label>
        </div> 
    </div>
  </div>
</nav>
  )
}

  //  Navbar.propTypes ={
  //     title:PropTypes.string.isRequired,
  //     aboutText:PropTypes.string.isRequired
  // }
  // Navbar.defaultProps ={
  //     title: "webnew",
  //     aboutText:"about web"
  // }; 