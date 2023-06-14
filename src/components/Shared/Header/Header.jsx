import { useContext } from "react";
import { Link } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css';
import { FaUser } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <li><Link className='font-bold' to="/">Home</Link></li>
        <li><Link className='font-bold' to="/allToy">All Toy</Link></li>
        <li><Link className='font-bold' to="/addToy">Add Toy</Link></li>
        <li><Link className='font-bold' to="/myToy">My Toy</Link></li>
        <li><Link className='font-bold' to="/blog">Blog</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 px-36 py-3 mt-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case  text-primary font-bold text-3xl italic">
                        <Link to="/">
                            Action Toys
                        </Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex flex-row items-center gap-5">
                            <label
                                className="tooltip"
                                data-tip={`${user.displayName ? user.displayName : ""}`}
                            >
                                <div className="w-10 ">
                                    {user.photoURL ? (
                                        <img
                                            src={`${user?.photoURL}`}
                                            alt=""
                                            className="rounded-full w-10"
                                        />
                                    ) : (
                                        <FaUser className="text-primary" size={30} />
                                    )}
                                </div>
                            </label>
                            <button
                                className="btn btn-primary btn-outline text-white font-bold"
                                onClick={handleLogOut}
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-primary text-white rounded-md font-bold"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;