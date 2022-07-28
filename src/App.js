import './App.css'

function App() {
  return (
    <nav className="navbar container-fluid navbar-expand-md navbar-light bg-light">
      <div className='container-fluid'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <a className="navbar-brand" href="#">
            About
          </a>
          <a className="navbar-brand" href="#">
            Contact Us
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

export default App
