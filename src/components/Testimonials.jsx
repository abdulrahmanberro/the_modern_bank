import React from "react";
import styles from "../style";
import Button from "./Button";
import { feedback } from "../constants/index";
import clinetsCardIcon from "../assets/clinetsCardIcon.png";

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <div className="flex flex-col md:flex-row text-white items-center justify-between font-poppins">
        {feedback.map((feedback) => (
          <div className="bg-black-gradient-2 flex flex-col relative py-14  px-7 rounded-[20px]">
            <img
              src={clinetsCardIcon}
              className="w-[42.6px] h-[27.6px] mb-10"
            />
            <h4 className={`md:max-w-[290px] max-w-[400px]`}>
              {feedback.content}
            </h4>
            <div className="mt-7 flex flex-row">
              <img src={feedback.img} className="w-[50px] mr-5" />
              <div className="">
                <h4 className="text-[20px]">{feedback.name}</h4>
                <p className={`${styles.paragraph} text-[16px]`}>
                  {feedback.title}
                </p>
              </div>
            </div>
            <div
              style={{
                height: "50%",
                background: "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)",
                filter: "blur(325px)",
                borderRadius: "200px",
                transform: "rotate(47.46deg)",
              }}
              className="absolute sm:w-[370px] md:block hidden w-[210.52px]"
            />
            <div
              style={{
                height: "50%",
                left: "20%",
                background: "linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)",
                filter: "blur(450px)",
                borderRadius: "200px",
                transform: "rotate(94.82deg)",
              }}
              className="absolute sm:w-[270px] w-[190px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
