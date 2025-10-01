import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        {/* Logo points to home */}
                        <Link className="navbar-brand" to="/">NewsGorilla</Link>

                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                        to="/business"
                                    >
                                        Business
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                        to="/entertainment"
                                    >
                                        Entertainment
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                        to="/health"
                                    >
                                        Health
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                        to="/science"
                                    >
                                        Science
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                        to="/sports"
                                    >
                                        Sports
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                                        to="/technology"
                                    >
                                        Technology
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
