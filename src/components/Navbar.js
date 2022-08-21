import React from 'react';
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    // <nav className="w-100 navbar navbar-expand navbar-dark bg-dark mb-3">
    //   <div className='container-fluid'>
    //     <div className='container-fluid'>
    //       <a className="px-2 navbar-brand" to='/'>
    //         Welcome
    //       </a>
    //       <a className="px-2 navbar-brand" to='/textarea'>
    //         Textarea
    //       </a>
    //       <a className="px-2 navbar-brand" to='/Bg'>
    //         Backgrounds
    //       </a>
    //     </div>
    //   </div>
    // </nav> 
      
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand px-2 py-2" to="/">React-App</Link>
    {/* <Link className="navbar-brand" to="/Notes">{props.b}</Link> */}
    {/* <Link className="navbar-brand" to="/Change-Background">{props.c}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="navbar-brand px-2 py-2" to="/Notes">{props.b}</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand px-2 py-2" to="/Change-Background">{props.c}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

/* Navbar.propTypes = {
  name:PropTypes.string,
  about:PropTypes.string,
} */

/* Navbar.defaultProps = {
  name:'Navbar',
  contactus:'Contact us',
  about:'About'
} */