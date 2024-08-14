import React from 'react';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          HRS
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <FaUser className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/login"
          className="btn btn-primary flex items-center gap-2"
        >
          <FaSignInAlt />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
