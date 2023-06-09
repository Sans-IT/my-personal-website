import { Metadata } from "next";
import React from "react";
import PortofolioPage from "./portofolioPage";

export const metadata: Metadata = {
  title: "Portofolio | Steven Jaya Profile",
  description: "Explore my portofolio project",
};

export default async function Portofolio() {
  return (
    <React.Fragment>
      <PortofolioPage />
    </React.Fragment>
  );
}
