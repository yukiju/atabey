import React from 'react'
import { Link } from 'react-router-dom';



const FooterComponent: React.FC = () => {

    return (
        <div className="bg-dark footer-container">
            <div className="container">
                <footer id="footer-component">
                    <div className="row">
                        <div className="col-9">
                            <nav className="nav">

                                <div className="navbar" id="navbarNavAltMarkup">
                                    <Link to="/terms" className="nav-link active">Terms & Conditions <span className="sr-only">(current)</span></Link>

                                </div>


                            </nav>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

export default FooterComponent
