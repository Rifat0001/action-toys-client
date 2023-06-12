import { Link } from "react-router-dom";
const Header = () => {
    const navLinks = <>
        <li><Link className='font-bold' to="/">Home</Link></li>
        <li><a className='font-bold  '>All Toys</a></li>
        <li><Link className='font-bold' to="/blog">Blog</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 px-36">
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
                    <button className='btn btn-primary text-white'>
                        <Link to='/login'>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;