import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section id="stats" className={`${styles.paddingY}`}>
      <div
        className={`text-white flex flex-col flex-wrap lg:flex-row flex-1 justify-between font-poppins`}
      >
        {stats.map((stat, i) => (
          <div
            className="flex flex-row justify-center items-center"
            key={stat.id}
          >
            <h2 className="ss:text-[41px] text-[30px] font-semibold pr-3">
              {stat.value}
            </h2>
            <p className="text-[21px] font-normal text-gradient">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
