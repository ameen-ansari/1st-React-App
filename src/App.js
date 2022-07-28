import './App.css'
var name = "<h2>M.Ameen<h2>"
function App() {
  return (
    <>
    <nav className="navbar container-fluid navbar-expand-md navbar-light bg-light">
      <div className='container-fluid'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <a className="navbar-brand" href="/">
            About
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
    <h2>{name}</h2>
    </>
  )
}

export default App
