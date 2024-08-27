import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dkklpdvouwvfndlirksi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRra2xwZHZvdXd2Zm5kbGlya3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNDg5OTYsImV4cCI6MjAzNjcyNDk5Nn0.O7tZe0z-NDgYjaG7plC8MNdgRlNRzOmuqe86BUmieW0";
const supabase = createClient(supabaseUrl, supabaseKey);

export const checkLogin = () => {
  supabase.auth.onAuthStateChange((_, session) => {
    if (session && session.user) {
      localStorage.setItem("isLoggedIn", session?.user.aud);
    } else {
      localStorage.removeItem("isLoggedIn");
    }
  });
}

export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn");
}

export default supabase;


