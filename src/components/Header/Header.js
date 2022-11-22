import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <nav className="navbar navbar-expand-lg bg-light ms-5 me-5 ps-5">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>Twist Quiz</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto me-5 pe-5">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/statistics'>Statistics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/blog'>Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </div >
    );
};

export default Header;