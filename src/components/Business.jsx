import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const Business = () => {
  return (
    <section
      id="features"
      className={`${styles.paddingY} flex md:flex-row ss:text-left flex-col mt-20 ss:mt-0 flex-wrap text-white`}
    >
      <div className="#l flex-1">
        <h2 className="font-semibold ss:text-[48px] text-[30px] mb-5 ">
          You do the business, <br /> we'll handle the money.
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] text-[15px] ss:text-[25px] `}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className={`#r flex-2`}>
        {features.map((feature, i) => (
          <div
            className="flex flex-rwo items-center feature-card rounded-[10px]"
            i={i}
            key={feature.id}
          >
            <div
              style={{
                backgroundColor: "rgba(9, 151, 124, 0.1)",
              }}
              className="flex flex-wrap justify-center items-center w-[64px] h-[64px] rounded-full my-10"
            >
              <img src={feature.icon} alt="icon" />
            </div>
            <div className={i !== feature.length - 1 ? `bg-none` : `bg-white `}>
              <h4 className="font-poppins font-semibold text-[18px]">
                {feature.title}
              </h4>
              <p className={`${styles.paragraph} max-w-[400px]`}>
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
