import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <>
      <main className="layout-main">
        <div className="layout-header">
          <Link to="/">
            <button className="btn-back">Inicio</button>
          </Link>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;