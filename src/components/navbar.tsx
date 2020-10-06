import React from 'react'
import './styles/navbar.css'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'



interface NavBarProps {
    history: History;
}


export const NavBarComponent: React.FC<RouteComponentProps> = (props) => {

    
    const renderOnCurrentPath = (path: string) => {
        console.log(props.location.pathname)
        return path === props.location.pathname ? <span className="sr-only">(current)</span> : <span></span>

    }
    console.log(props)
    return (

        <div className="bg-dark">
            <div className="container">
                <div id="main-nav" className="row">
                    <div className="col-8">
                        <nav className="nav sticky-top">
                            <Link to="/" className="navbar-brand">
                                <img src="" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                                <span className="navbar-brand mb-0 h1" id="brand">Yukaju</span>
                            </Link>

                            <div className="navbar" id="navbarNavAltMarkup">
                                <Link to="/home" className="nav-link active">Home {renderOnCurrentPath('/home')}</Link>
                                <Link to="/about" className="nav-link" >About {renderOnCurrentPath('/about')}</Link>
                                <Link to="/tech" className="nav-link" >Tech {renderOnCurrentPath('/tech')}</Link>
                                <Link to="/games" className="nav-link">Games {renderOnCurrentPath('/games')}</Link>
                                <Link to="/linux" className="nav-link disabled" tabIndex={-1} aria-disabled="true">Linux {renderOnCurrentPath('/linux')}</Link>
                                <Link to="/trading" className="nav-link">Trading {renderOnCurrentPath('/trading')}</Link>
                            </div>



                        </nav>
                    </div>
                    <div className="col">
                        <nav className="navbar justify-content-end">
                            <Link to="/login" className="nav-link">Login {renderOnCurrentPath('/login')}</Link>
                            <Link to="/signup" className="nav-link">Sign Up {renderOnCurrentPath('/signup')}</Link>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default withRouter(NavBarComponent)
