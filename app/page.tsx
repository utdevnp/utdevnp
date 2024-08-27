"use client";
import MainPage from "@/views/layouts/components/mainpage";
import LandingPageLayout from "@/views/layouts/landingPage";
import { Container } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container>
      <LandingPageLayout>
        <MainPage />
      </LandingPageLayout>
    </Container>
  );
};

export default Home;
