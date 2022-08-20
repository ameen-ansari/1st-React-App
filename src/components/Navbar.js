import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar container-fluid navbar-expand-md navbar-dark bg-dark mb-3">
      <div className='container-fluid'>
        <div className='container-fluid'>
          <Link className="px-2 navbar-brand" to='/'>
            Welcome
          </Link>
          <Link className="px-2 navbar-brand" to='/textarea'>
            Textarea
          </Link>
          <Link className="px-2 navbar-brand" to='/Bg'>
            Backgrounds
          </Link>
        </div>
      </div>
      <div
        className=" collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  name:PropTypes.string,
  about:PropTypes.string,
}

Navbar.defaultProps = {
  name:'Navbar',
  contactus:'Contact us',
  about:'About'
}