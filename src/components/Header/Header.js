import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { user, logOut, auth } = useAuth();
    const showUser = () => {
        console.log(user);
        console.log(auth.currentUser);
    }
    return (
        <div className="sticky md:w-full top-0">
            <nav className=" relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/home"
                        >
                            <i className=" fa-language mr-4"></i><span className="">Impel Language Center</span>
                        </NavLink>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/home"
                                >
                                    <span className="ml-2">Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/about"
                                >
                                    <span className="ml-2">About</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/courses"
                                >
                                    <span className="ml-2">Courses</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/mycourses"
                                >
                                    <span className="ml-2">My Courses</span>
                                </NavLink>
                            </li>
                            {
                                !user ? <li className="nav-item">
                                    <NavLink
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        to="/signin"
                                    >
                                        <span className="ml-2">Sign in</span>
                                    </NavLink>
                                </li>
                                    :
                                    <li>
                                        <NavLink
                                            onClick={logOut}
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            to="/home"
                                        >
                                            <span className="ml-2"><span className="text-red-500">Sign Out</span> ({user.displayName})</span>
                                        </NavLink>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;