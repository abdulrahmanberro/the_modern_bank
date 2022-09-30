import React from "react";
import styles from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section
      className={`${styles.paddingY} flex flex-col md:flex-row flex-wrap text-white font-poppins`}
    >
      {/* Left Side */}
      <div className="flex flex-col flex-1">
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] font-poppins`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div>
          <Button />
        </div>
      </div>
      {/* Rigght Side */}
      <div className="flex-1">
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
