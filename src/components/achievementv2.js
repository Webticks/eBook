import React from "react";

import data from "../data/achievements.json";
import service1 from "../assets/images/service1.jpg"
import service2 from "../assets/images/service2.jpg"

const Achievementv2 = ({ isBg }) => {
  const { achievements } = data;
  return (
    <section
      id="achievements"
      className={`section-padding achievement ${isBg === "yes" ? "bg-one" : ""
        }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{achievements.title}</span>
              <h2 className="display-6">{achievements.subtitle}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {achievements?.awards?.map((data, i) => (
            <div
              key={data.id}
              className="m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <div className="card h-100 translateEffect1">
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="achievement__content">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="m-15px-tb"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card h-100 translateEffect1">
              <img src={service2} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="achievement__content">
                  <h3>Explore More</h3>
                  <p>International Thriller Writers Award for Best Novel (These Toxic Things)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievementv2;
