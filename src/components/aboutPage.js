/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import AboutContent from "./aboutContent";

const AboutPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Header header={header} />
            <AboutContent isBg="" />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default AboutPage;
