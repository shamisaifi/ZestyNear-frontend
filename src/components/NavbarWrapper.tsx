"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathName = usePathname();
  const hideNavbar = /^\/restaurant\/[^/]+$/.test(pathName);
  if (hideNavbar) return null;
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default NavbarWrapper;
