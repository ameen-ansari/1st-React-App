import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar container-fluid navbar-expand-md navbar-light bg-light">
      <div className='container-fluid'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="/">
            {props.name}
          </a>
          <a className="navbar-brand" href="/">
            {props.about}
          </a>
          <a className="navbar-brand" href="/">
            contact us
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
// Navbar.propsTypes = {
//     name : PropsTypes.string,
//     about:PropsTypes.string
//   }
  
Navbar.propsTypes = {
    name: PropsTypes.string
  };