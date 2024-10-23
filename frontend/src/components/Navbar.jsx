import React from "react";
import { linkLogo } from "../assets/icons/Icons.jsx";
import { WebsiteName } from "../assets/config.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-blue-500 h-14 p-2 ">
        <div className="container-fluid">
          <Link className="navbar-brand flex items-center text-white" to="/">
            <span className="m-2">
              <img src={linkLogo} alt="Link Logo" />
            </span>
            <span className="text-xl font-semibold">{WebsiteName}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
