import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AppLayout.style.css";

const AppLayout = ({ auth, setAuth }) => {
  return (
    <>
      <header>
        <Link to="/">
          <div>JW's Library</div>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/my-books">My Books</Link>
          {auth ? (
            <Link to="/" onClick={() => setAuth(false)}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default AppLayout;
