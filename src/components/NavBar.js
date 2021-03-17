import '../NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
            <div className="container-fluid text-center w-75">
                <a className="navbar-brand w-20">
                    <img src="logo2.png" alt="Logo Tienda Virtual" width="84px"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse m-3" id="navbarSupportedContent">
                    <form className="d-flex w-100">
                        <input className="form-control" type="search" placeholder="Buscar productos" aria-label="Search"/>
                        <button className="btn" type="submit">
                            <i className="bi bi-search text-dark"></i>
                        </button>
                    </form>
                    <ul className="navbar-nav w-25">
                        <li className="nav-item p-1">
                            <a className="nav-link active text-center" aria-current="page">Registrate</a>
                        </li>
                        <li className="nav-item dropdown p-1">
                            <a className="nav-link active dropdown-toggle text-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mi cuenta</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="m-1">
                                    <div className="text-center">
                                        <button type="button" className="btn btn-danger w-100">Ingresar</button>
                                    </div>
                                </li>
                                <hr className="dropdown-divider"/>
                                <li className="m-1">
                                    <div className="text-center">
                                        <button type="button" className="btn btn-danger w-100">
                                            <i className="bi bi-google text-light"></i>
                                        </button>
                                    </div>
                                </li>
                                <li className="m-1">
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary w-100">
                                            <i className="bi bi-facebook text-light"></i>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <CartWidget/>
                    </ul>
                </div>
            </div>
        </nav>
    )
};


export default NavBar;