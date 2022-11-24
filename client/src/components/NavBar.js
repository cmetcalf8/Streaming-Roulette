import React from 'react';

export default function NavBar({ currentPage, handlePageChange}) {
  return (
      <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <p className="title-font font-medium text-white mb-4 md:mb-0">
                  <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                      Home
                  </a>
              </p>
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                  <a href="#signUp" onClick={() => handlePageChange('SignUp')} className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}>
                      Sign Up
                  </a>
              </nav>
              <p className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
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