import React from 'react';
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar container-fluid navbar-expand-md navbar-dark bg-dark mb-3">
      <div className='container-fluid'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="/">
            {props.name}
          </a>
          <a className="navbar-brand" href="/">
            {props.about}
          </a>
          <a className="navbar-brand" href="/">
            {props.contactus}
          </a>
        </div>
      </div>
      <div
        className=" collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
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