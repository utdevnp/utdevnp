"use client";
import LandingPageLayout from "@/views/layouts/landingPage";
import LoginView from "@/views/login/login";
import { Container } from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <Container>
      <LandingPageLayout>
        <LoginView />
      </LandingPageLayout>
    </Container>
  );
};

export default LoginPage;
