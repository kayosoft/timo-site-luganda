import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import FooterStyleTwo from "@/components/_App/FooterStyleTwo";

const Contact = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Tutukilile"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Tutukilile"
      />

      <ContactForm />

      <ContactInfo />

      <FooterStyleTwo />
    </>
  );
};

export default Contact;
