import React, { useState } from "react";
import { Link } from "react-router-dom";
import { home, link, chart, setting, add } from "../assets/icons/Icons";

function VerticleNavbar() {
  return (
    <>
      <div className="verticalNav w-[10vw] bg-[#194064] text-white h-[100%] ">
        <div className="createLink p-3">
          <button className="m-5 mb-4 ml-2">
            <a href="/createlink" className=" ">
              <span className="block sm:hidden ">
                <img src={add} alt="create link button" />
              </span>
              <span className="hidden sm:block p-3 text-xl rounded-xl text-white bg-blue-500 hover:bg-blue-700">
                Create Link
              </span>
            </a>
          </button>
        </div>
        <hr />
        <div className="flex flex-col mt-2">
          <button className="bg-blue-500 mb-2">
            <Link to="/" className="flex p-3">
              <span className="mx-2">
                <img src={home} alt="" />
              </span>
              <span className="mx-1 d-none d-sm-inline">Home</span>
            </Link>
          </button>

          <button className=" bg-blue-500 mb-2">
            <Link to="/link" className="flex p-3 ">
              <span className="mx-2 ">
                <img src={link} alt="" className=" d-inline  " />
              </span>
              <span className="mx-1 d-none d-sm-inline">Link</span>
            </Link>
          </button>

          <button className=" bg-blue-500 mb-2">
            <Link to="/analytics" className="flex p-3">
              <span className="mx-2">
                <img src={chart} alt="" />
              </span>
              <span className="mx-1 d-none d-sm-inline">Analytics</span>
            </Link>
          </button>
        </div>

        <hr className="mt-2" />

        <button className="flex items-center w-full p-3 bg-blue-500 mb-2 mt-2">
          <span className=" mr-2">
            <img src={setting} alt="setting icon" />
          </span>
          <span className="mx-1 d-none d-sm-inline">Settings</span>
        </button>
        <hr className="mt-2" />
      </div>
    </>
  );
}

export default VerticleNavbar;
