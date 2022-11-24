import React from 'react';

export default function NavBar({ currentPage, handlePageChange}) {
  return (
      <header className="">
          <div className="">
              <p className="">
                  <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                      Home
                  </a>
              </p>
              <nav className="">
                  <a href="#signUp" onClick={() => handlePageChange('SignUp')} className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}>
                      Sign Up
                  </a>
              </nav>
              <p className="">
                  <a href="#login" onClick={() => handlePageChange('Login')} className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                      Login
                  </a>
              </p>
                  <a href="#favorites" onClick={() => handlePageChange('Favorites')} className={currentPage === 'Favorites' ? 'nav-link active' : 'nav-link'}>
                      Favorites
                  </a>
          </div>
      </header>
  );
}