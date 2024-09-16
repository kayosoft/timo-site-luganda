import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import TutukilireForm from "@/components/Tutukilire/TutukilireForm";
import TutukilireInfo from "@/components/Tutukilire/TutukilireInfo";
import FooterStyleTwo from "@/components/_App/FooterStyleTwo";

const Tutukilire = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Tutukilile"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Tutukilile"
      />

      <TutukilireForm />

      <TutukilireInfo />

      <FooterStyleTwo />
    </>
  );
};

export default Tutukilire;
