import React from "react";
import styles from "../style";
import { apple, google, bill } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className={`${styles.paddingY} md:items-center items-start md:flex-row flex-col-reverse flex flex-wrap text-white`}
    >
      {/* Left Side */}
      <div className="flex-1 flex relative">
        <div
          style={{
            position: "absolute",
            left: "-43.93px",
            background: "rgba(255, 255, 255, 0.6)",
            filter: "blur(375px)",
            transform: "rotate(176.62deg)",
          }}
          className="sm:w-[405px] md:block hidden sm:h-[471px] h-[260px] w-[260px]"
        />
        <div
          style={{
            position: "absolute",
            height: "50%",
            left: "-50%",
            background: "linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)",
            filter: "blur(450px)",
            borderRadius: "200px",
            transform: "rotate(156.61deg)",
          }}
          className="sm:w-[345px] md:block hidden w-[360px]"
        />
        <img src={bill} alt="billing" className="sm:w-[700px] w-[500px]" />
      </div>
      {/* Right Side */}
      <div className="flex-2"></div>
      <div>
        <h2 className="text-[48px]">
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[430px] md:text-left`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row  mt-10 sm:justify-start justify-start">
          <img
            src={apple}
            alt="app_store"
            className="mr-5 cursor-pointer md:w-[100%] w-[120px]"
          />
          <img
            src={google}
            alt="play_store"
            className="cursor-pointer md:w-[100%] w-[120px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
