import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Home from './Home';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Favorites from '../components/Favorites';

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Favorites') {
      return <Favorites />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
