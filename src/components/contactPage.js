/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import ContactContent from "./contactContent";

const ContactPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Header header={header} />
            <ContactContent isBg="" />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default ContactPage;
