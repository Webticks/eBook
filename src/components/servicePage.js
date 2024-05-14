/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import ServicesTabs from "./pages/services/servicesTabs";

const ServicePage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Header header={header} />
            <ServicesTabs isBg="" />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default ServicePage;
