import { Metadata } from "next";
import React from "react";
import AboutPage from "./aboutPage";

export const metadata: Metadata = {
  title: "About | Steven Jaya Profile",
  description:
    "Hello, my name is Steven Jaya, I graduated from SMK Negeri 6 Surabaya majoring in Multimedia",
};

export default function About() {
  return (
    <React.Fragment>
      <AboutPage />
    </React.Fragment>
  );
}
