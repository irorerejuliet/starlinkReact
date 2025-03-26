import React, { useState } from 'react'
import Logo from './Logo';
import { IoMenu } from "react-icons/io5";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container max-w-[1438px] mx-auto flex justify-between items-center">
      <div className="flex justify-between items-center gap-16 text-white">
        <Logo />
        <ul className="md:flex hidden justify-center gap-4 text-base font-medium text-white font-Roboto">
          <li>
            <a href="/ResidentialPage">RESIDENTAIL</a>
          </li>
          <li>
            <a href="/RoamPage">ROAM</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center gap-8 text-white">
        <ul className="md:flex hidden justify-center items-center gap-8 text-base font-medium text-white font-Roboto">
          <li>
            <a href="#">PERSONAL</a>
          </li>
          <li>
            <a href="./business.html">BUSINESS</a>
          </li>
        </ul>
        <IoMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hi"
        />

        <div
          className={`absolute xl:hidden top-16  left-0 bg-black text-white
           flex flex-col w-full h-96 items-center gap-6 font-semibold text-lg transform  
           transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 ">
            <a href="/">PRESIDENTAIL</a>
          </li>
          <li className="list-none w-full text-center p-4 ">
            <a href="/RoamPage">ROAM</a>
          </li>
          <li className="list-none w-full text-center p-4 ">
            <a href="#">PERSONAL</a>
          </li>
          <li className="list-none w-full text-center p-4 ">
            <a href="./business.html">BUSINESS</a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
