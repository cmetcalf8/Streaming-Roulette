import React from 'react';
import "../styles/navbar.css";
import { useState } from "react";

export default function NavBar({ currentPage, handlePageChange}) {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          Home
        </a>
        <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded);}}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
          <ul>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }




// {
//   return (
//       <nav className="navigation">
//           <div className="navigation-menu">
//               <p className="brand-name">
//                   <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
//                       Home
//                   </a>
//               </p>
//               <nav className="">
//                   <a href="#signUp" onClick={() => handlePageChange('SignUp')} className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}>
//                       Sign Up
//                   </a>
//               </nav>
//               <p className="">
//                   <a href="#login" onClick={() => handlePageChange('Login')} className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
//                       Login
//                   </a>
//               </p>
//                   <a href="#favorites" onClick={() => handlePageChange('Favorites')} className={currentPage === 'Favorites' ? 'nav-link active' : 'nav-link'}>
//                       Favorites
//                   </a>
//           </div>
//       </nav>
//   );
// }