"use client";
import LandingPageLayout from "@/views/layouts/landingPage";
import SignupView from "@/views/signup";
import { Container, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../supabase";

const SignupPage = () => {
  const router = useRouter();
  const loggedin = isLoggedIn();

  if (loggedin) {
    router.push("/");
  }

  return (
    <Container>
      <LandingPageLayout>
        <SignupView />
      </LandingPageLayout>
    </Container>
  );
};

export default SignupPage;
