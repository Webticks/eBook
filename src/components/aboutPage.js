/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import AboutUs from "./pages/aboutUs/aboutus";
import AboutContent from "./pages/aboutUs/aboutContent";
import MeetTheTeam from "./pages/aboutUs/meetTheTeam";

const AboutPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Header header={header} />
            <AboutUs isBg="Yes" />
            <AboutContent isBg="" />
            <MeetTheTeam isBg="yes" />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default AboutPage;
