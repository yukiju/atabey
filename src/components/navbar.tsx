import React from 'react'
import './styles/navbar.css'
import { Link } from 'react-router-dom'



export const NavBarComponent: React.FC = () => {
    return (

        <div className="bg-dark">
            <div className="container">
                <div id="main-nav" className="row">
                    <div className="col-8">
                        <nav className="nav sticky-top">
                            <a className="navbar-brand" href="#">
                                <img src="" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                                <span className="navbar-brand mb-0 h1" id="brand">Yukaju</span>
                            </a>

                            <div className="navbar" id="navbarNavAltMarkup">
                                <Link to="/home" className="nav-link active">Home <span className="sr-only">(current)</span></Link>
                                <Link to="/about" className="nav-link" >About</Link>
                                <Link to="/tech" className="nav-link" >Tech</Link>
                                <Link to="/games" className="nav-link">Games</Link>
                                <Link to="/linux" className="nav-link disabled" tabIndex={-1} aria-disabled="true">Linux</Link>
                                <Link to="/trading" className="nav-link">Trading</Link>
                            </div>



                        </nav>
                    </div>
                    <div className="col">
                        <nav className="navbar justify-content-end">
                            <a className="nav-link" href="#">Login</a>
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBarComponent
