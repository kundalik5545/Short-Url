import React from "react";
import { copyRightYear } from "../assets/config.jsx";

function Footer() {
  return (
    <>
      <footer className="bg-blue-300 p-3 text-center font-semibold text-dark text-lg ">
        {copyRightYear} All Rights Reserved. Made with Love ❤...
      </footer>
    </>
  );
}

export default Footer;
