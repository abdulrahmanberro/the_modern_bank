import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`${styles.paddingY} text-white `}>
      <div className="flex md:flex-row flex-col w-full relative bg-black-gradient p-20 rounded-[20px]">
        <div className="flex flex-col">
          <h2 className={`md:text-[44px] text-[35px] font-semibold`}>
            Let's try our service now!
          </h2>
          <p className={`${styles.paragraph} max-w-[445px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="md:absolute right-20">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default CTA;
