

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4"> News App</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-5 mb-lg-0 ">
        <li className="nav-item">
            <button className="nav-link" onClick={()=>setCategory('technology')}>Technology</button>
        </li>
        <li className="nav-item">
            <button className="nav-link" onClick={()=>setCategory('business')}>Business</button>
        </li>
        <li className="nav-item">
            <button className="nav-link" onClick={()=>setCategory('health')}>Health</button>
        </li>
        <li className="nav-item">
            <button className="nav-link" onClick={()=>setCategory('sports')}>Sports</button>
        </li>
      </ul> 
    </div>
  </div>
</nav>
  )
}

export default Navbar