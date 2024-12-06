import Navbar from "@/components/ui/Navbar";
import { StreamVideoProvider } from "@/providers/StreamClientProviders";
import { Metadata } from "next";
import React, { Children, ReactNode } from "react";


export const metadata: Metadata = {
  title: "VidSync",
  description: "Video Calling App",

  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {/* <Navbar/> */}
      <StreamVideoProvider>{children}</StreamVideoProvider>
      {/* Footer */}
    </main>
  );
};

export default RootLayout;
