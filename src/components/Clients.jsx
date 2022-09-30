import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <div className="flex-col md:flex-row flex justify-between items-center">
        {clients.map((client) => (
          <div key={client.id} className="flex justify-between">
            <img
              src={client.logo}
              alt="client"
              className="ss:w-[192.25px] w-[120px] mb-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
