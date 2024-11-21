
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import "./Navbar.css";

const Navbar = () => {
    const { auth, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false); // Track the open state of dropdown

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar ">
            <div className="nav-content">

                <div className="logo">
                    <NavLink to="/">Logo</NavLink>
                </div>

                <div className="nav-links">
                    <button>
                        <NavLink to="/">Home</NavLink>
                    </button>
                    <button>
                        <NavLink to="/about">About</NavLink>
                    </button>
                    <button>
                        <NavLink to="/contact">Contact</NavLink>
                    </button>


                    {!auth?.user ? (
                        <>
                            <NavLink to="/register" className="nav-link">
                                Register
                            </NavLink>
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </>
                    ) : (
                        <div className={`dropdown ${isOpen ? 'show' : ''}`}>
                            <NavLink
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                aria-expanded={isOpen ? 'true' : 'false'}
                                onClick={handleToggleDropdown}
                            >
                                {auth?.user?.name}
                            </NavLink>
                            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                                <li>
                                    <NavLink
                                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                        className="dropdown-item"
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={logout}
                                        to="/login"
                                        className="dropdown-item logout"
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
