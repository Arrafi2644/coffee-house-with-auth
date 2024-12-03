import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/more/logo1.png'
import './MainTemplate.css'
import { AuthContext } from '../AuthProvider';


const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext)
  // console.log(user);

  const userName = user?.email?.split('@')[0]
  // console.log(userName);
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to={'/addCoffee'}>Add Coffee</NavLink></li>
    <li><NavLink to={'/users'}>Users</NavLink></li>
    <li><NavLink to={'/addUser'}>Add User</NavLink></li>
  </>

  return (
    <div className='bg-[#130f0d] text-white'>
    <div className="navbar max-w-7xl w-11/12 mx-auto">
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
            {
              links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className='w-10 h-10' src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-1">
        {
          user && <span>{userName}</span>
        }
        {
          user ?  <Link onClick={logOutUser} className='btn'>Logout</Link> :  <Link className='btn' to='/login'>Login</Link>
        } 
       
      </div>
    </div>
    </div>
  );
};

export default Navbar;