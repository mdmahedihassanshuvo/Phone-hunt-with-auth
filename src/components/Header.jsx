import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider/UserProvider';
import Swal from 'sweetalert2';

const Header = () => {

  const { user, logOut } = useContext(AuthProvider)

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      Swal.fire('Logged out successfully')
    })
  }

  return (
    <div className='flex justify-between mx-20 bg-slate-100 h-16 items-center p-5'>
      <h2 className='text-3xl text-orange-600 font-bold'>Hunt</h2>
      <nav>
        <ul className='flex'>
          <li className='hover:text-blue-600 font-medium uppercase mr-4'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className='hover:text-blue-600 font-medium uppercase mr-4'>
            <NavLink
              to='/Stor'
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : ""
              }
            >
              Stor
            </NavLink>
          </li>
          <li className='hover:text-blue-600 font-medium uppercase mr-4'>
            <NavLink
              to='/StorDetails'
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : ""
              }
            >
              Stor details
            </NavLink>
          </li>
          {
            user ?
              <li className='hover:text-blue-600 font-medium uppercase mr-4'>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600"
                      : ""
                  }
                >
                  <button className='uppercase' onClick={handleLogOut}>Log out</button>
                </NavLink>
              </li> :
              <li className='hover:text-blue-600 font-medium uppercase mr-4'>
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Header;