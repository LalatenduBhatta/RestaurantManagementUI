import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className="navbar bg-slate-400 font-semibold sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="employeelist">Employees</Link></li>
                        <li>
                            <Link>Food Menu</Link>
                            <ul className="p-2">
                                <li><Link to={"vegmenu"}>Veg Menu</Link></li>
                                <li><Link to={"nonvegmenu"}>Non Veg Menu</Link></li>
                            </ul>
                        </li>
                        <li><Link to={"revenue"}>Revenue</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">My Hotel</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"employeelist"}>Employees</Link></li>
                    <li>
                        <details>
                            <summary>Food Menu</summary>
                            <ul className="p-2">
                                <li><Link to={"vegmenu"}>Veg Menu</Link></li>
                                <li><Link to={"nonvegmenu"}>Non Veg Menu</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to={"revenue"}>Revenue</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"} className="btn p-2 px-4 me-4 bg-red-300 hover:bg-red-400 hover:text-white rounded-[40px]">Logout</Link>
            </div>
        </div>
    )
}
export default Navbar