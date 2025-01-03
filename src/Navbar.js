import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import the Logo component
import './Navbar.css'; // Import custom CSS for styling



const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Updated Logo */}
          <Link className="navbar-brand" to="/">
            <Logo /> {/* Use the new Logo Component */}
          </Link>

          {/* Toggle button for sidebar */}
          <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links for Desktop */}
          <div className="collapse navbar-collapse justify-content-center d-none d-lg-block">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Buttons on the right */}
          <div className="d-flex d-none d-lg-block">
            <Link className="btn-primary me-2" to="/login">Login</Link>
            <Link className="btn-primary me-2" to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/services" onClick={toggleSidebar}>Services</Link></li>
          <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
          <li><Link to="/login" className="btn btn-outline-primary" onClick={toggleSidebar}>Login</Link></li>
          <li><Link to="/signup" className="btn btn-primary" onClick={toggleSidebar}>Sign Up</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
