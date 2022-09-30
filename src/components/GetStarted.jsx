import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] 
      rounded-full bg-blue-gradient p-[2px] cursor-pointer
      `}
    >
      <div
        className={`${styles.flexCenter}  
        transition-all
        hover:w-[105px]
        flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leadng-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="" className="object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leadng-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
