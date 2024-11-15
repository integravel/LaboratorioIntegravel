import Logo from '../Imgs/logo_primaria.png'
import '../Components/Navbar.css'

const Nav =()=>{
    return(<nav className="navbar custom-navbar m-0">
        <div className="container-fluid">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              width="30"
              height="30"
              className="me-2"
            />
            <span>Laboratório Integrável</span>
          </a>
        </div>
      </nav>)
}
export default Nav