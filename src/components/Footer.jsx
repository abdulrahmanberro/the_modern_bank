import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const textColor = "rgba(255, 255, 255, 0.7)";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingY} font-poppins`}
      style={{
        color: textColor,
      }}
    >
      <div className="text-[18px] md:text-[16px] mb-10 flex md:flex-row flex-col justify-between md:items-start items-center text-center md:text-left">
        <div>
          <img src={logo} alt="logo" />
          <p className={` max-w-[312px] mt-8 mb-10 md:mb-0`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-5 text-[33px] md:text-[16px] text-white">
            Usefull Links
          </h4>
          <div className="flex flex-col">
            <a href="#" className="mb-[5px]">
              Content
            </a>
            <a href="#" className="my-[5px]">
              How it Works
            </a>
            <a href="#" className="my-[5px]">
              Create
            </a>
            <a href="#" className="my-[5px]">
              Explore
            </a>
            <a href="#" className="mb-10">
              Terms & Services
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-5 text-white text-[33px] md:text-[16px]">
            Community
          </h4>
          <div className="flex flex-col">
            <a href="#" className="mb-[5px]">
              Help Center
            </a>
            <a href="#" className="my-[5px]">
              Partners
            </a>
            <a href="#" className="my-[5px]">
              Suggestions
            </a>
            <a href="#" className="my-[5px]">
              Blog
            </a>
            <a href="#" className="mb-10">
              Newsletters
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-5 text-white text-[33px] md:text-[16px]">
            Partner
          </h4>
          <div className="flex flex-col">
            <a href="#" className="my-[5px]">
              Our Partner
            </a>
            <a href="#" className="mb-10">
              Become a Partner
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-[#3F3E45] opacity-[0.5] mb-10" />
      <div className="flex justify-between md:flex-row flex-col items-center">
        <span className="text-[18px]">
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </span>

        <div className="flex flex-row md:mt-0 mt-10">
          {socialMedia.map((link) => (
            <a href={link.link}>
              <img src={link.icon} alt="social_media_link" className="mx-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
