import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import './Nab.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DarkMode from "../../DarkMode";


const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user);


  const handleSignOut = () => {
    logOut()
       
        .then(() => {
            console.log('logOut successfully,');
            swal("logOut successfully");
        })
        .catch(error => console.error(error))
}


  const navLinks = (
    <>
      <li>
        <NavLink  to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink  to={"/addProducts"}>
          Add Products
        </NavLink>
      </li>
      
      <li>
        <NavLink  to={"/myCart"}>
          My Cart
        </NavLink>
      </li>
      
      <li>
        <NavLink className="" to={"/login"}>
          Login
        </NavLink>
      </li>
      <li>

      </li>
      
      
      
      
    </>
  );
  return (
    <div className="navbar bg-slate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="h-10 w-28 rounded-full "
          src="/logo.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex ml-8">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        <div className="mr-20">
        <DarkMode></DarkMode>
        </div>
      </div>
      
      <div className="navbar-end">
        {user ? (
          <>
            <p className="text-sm">{user.email}</p>
            <img className="h-8 w-8 rounded-full mx-2" src={user.photoURL} alt="" />
            
            <a onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </a>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
