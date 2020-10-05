import React from 'react'
import './styles/footer.css'
import { Link } from 'react-router-dom';



const FooterComponent: React.FC = () => {
    const certLogo = () => {
        let tlJsHost = ((window.location.protocol == "https:") ? "https://secure.trust-provider.com/" :
            "http://www.trustlogo.com/");
        document.write(unescape("%3Cscript src='" + tlJsHost +
            "trustlogo/javascript/trustlogo.js' type='text/javascript'%3E%3C/script%3E"));
    }
    const trustLogo = () => {
        //TrustLogo("https://www.positivessl.com/images/seals/positivessl_trust_seal_md_167x42.png", "POSDV", "none");
    }
    return (
        <div className="bg-dark fixed-bottom footer-container">
            <div className="container">
                <footer id="footer-component">
                    <div className="row">
                        <div className="col-9">
                            <nav className="nav">

                            <div className="navbar" id="navbarNavAltMarkup">
                                <Link to="/terms" className="nav-link active">Terms & Conditions <span className="sr-only">(current)</span></Link>
                                {/*<a className="nav-link" href="#">About</a>
                                <a className="nav-link" href="#">Tech</a>
                                <a className="nav-link" href="#">Games</a>
    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Linux</a>*/}
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
