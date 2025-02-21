import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { signOut } = useAuth();

  const navLink = (
    <>
      
    </>
  );

  return (
    <div className="navbar bg-primary shadow-sm text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </div>
        </div>
        <Link to="/" className="btn btn-ghost text-xl uppercase">
          Task Manager
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 flex gap-8">{navLink}</div>
      </div>
      <div className="navbar-end flex gap-2">
        <button onClick={signOut} className="font-bold uppercase btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
