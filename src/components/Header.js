const Header = () => {
  return (
    
    <div className="m-4">
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">BearcatE</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="https://bearcatevents.herokuapp.com/" className="nav-item nav-link active">Home</a>
                    <a href="https://bearcatevents.herokuapp.com/list" className="nav-item nav-link active">Events</a>
                </div>
                <div className="navbar-nav ms-auto">
                    <a href="https://hellobeareve.herokuapp.com/admin/login/" className="nav-item nav-link">Login</a>
                </div>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Header
