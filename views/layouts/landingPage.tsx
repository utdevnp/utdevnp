import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainpage";

const LandingPageLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LandingPageLayout;
