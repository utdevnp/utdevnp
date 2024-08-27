"use client";
import LandingPageLayout from "@/views/layouts/landingPage";
import LoginView from "@/views/login/login";
import { Container } from "@mui/material";
import React from "react";
import { isLoggedIn } from "../supabase";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const loggedin = isLoggedIn();

  if (loggedin) {
    router.push("/");
  }

  return (
    <Container>
      <LandingPageLayout>
        <LoginView />
      </LandingPageLayout>
    </Container>
  );
};

export default LoginPage;
