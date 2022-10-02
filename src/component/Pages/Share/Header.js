import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar  bg-white ">
  <div className="navbar-start  mx-auto">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-blue-900 rounded-box w-52">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/addUser">Add User</NavLink>
        <NavLink to="#">About</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl text-orange-300">Hasan Builders</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal p-0 mr-4 text-blue-900">
    <NavLink to="/home" className="ml-4 text-xl font-semibold">Home</NavLink>
        <NavLink to="/addUser" className="ml-4 text-xl font-semibold">Add User</NavLink>
        <NavLink to="#" className="ml-4 text-xl font-semibold">About</NavLink>
    </ul>
  </div>
</div>
    );
};

export default Header;