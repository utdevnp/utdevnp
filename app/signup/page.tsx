"use client";
import LandingPageLayout from "@/views/layouts/landingPage";
import SignupView from "@/views/signup";
import { Container, Typography } from "@mui/material";
import React from "react";

const SignupPage = () => {
  return (
    <Container>
      <LandingPageLayout>
        <SignupView />
      </LandingPageLayout>
    </Container>
  );
};

export default SignupPage;
