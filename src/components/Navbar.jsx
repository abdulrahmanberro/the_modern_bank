import React, { useState } from "react";
import logo from "../assets/logo.svg";
import styles from "../style";

import { close, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="z-50 flex flex-row justify-between pt-5 bg-transparent">
      <img src={logo} className="w-[124px]" />
      <ul className="sm:flex hidden">
        {navLinks.map((link, i) => (
          <li
            key={link.id}
            className={`fony-poppins font-normal cursor-pointer text-[16px] text-white ${
              i === link.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isOpen ? close : menu}
          onClick={handleMenuClick}
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`z-50 ${
            isOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 r-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                className={`fony-poppins font-normal cursor-pointer text-[16px] text-white mt-3`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
