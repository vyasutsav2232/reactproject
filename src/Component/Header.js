import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h1>Swiggy</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link active" to="/Contact">Contact</Link>
                            </li>
                              <li className="nav-item">

                                <Link className="nav-link active" to="/login">login</Link>
                            </li>
                         </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header