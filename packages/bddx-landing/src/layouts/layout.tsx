import React from "react";
import { CustomHelmet } from "@/src/components";
import { Footer } from "@/src/components/Site/molecules/Footer";
import { NavigationBar } from "@/src/components/Site/molecules/NavigationBar";

export const Layout: React.FC<{
  pageTitle?: string;
  children: React.ReactNode;
}> = ({ children, pageTitle }) => {
  return (
    <div
      className={`relative overflow-hidden max-w-screen min-h-screen flex flex-col`}
    >
      <CustomHelmet pageTitle={pageTitle} />
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};
