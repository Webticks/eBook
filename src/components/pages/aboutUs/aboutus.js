/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../../../data/aboutUs.json"

const AboutUs = ({ isBg }) => {
    const { aboutUs } = data;

    return (
        <section
            id="author"
            className={`section-padding authorv3 ${isBg === "yes" ? "bg-one" : ""}`}
            style={{ marginTop: '50px' }}
        >
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="author-image">
                            <img className="img-fluid" src={aboutUs.image} alt="" />
                        </div>
                    </div>
                    <div
                        className="col-lg-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="authorv3__content">
                            <div className="authorv3__content--badge">
                                {aboutUs.subtitle}
                            </div>
                            <h3 className="display-5 mb-0">{aboutUs.title}</h3>
                            <p className="m-30px-b text-muted fs-5">{aboutUs.text}</p>
                            <p className="m-30px-b">{aboutUs.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
