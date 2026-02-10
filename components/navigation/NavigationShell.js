"use client";

import { useState } from "react";
import DesktopMenu from "@/components/navigation/DesktopMenu";
import MobileNavHeader from "@/components/navigation/MobileNavHeader";
import MobileNavMenu from "@/components/navigation/MobileNavMenu";

export default function NavigationShell({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <MobileNavHeader toggleMenu={toggleMenu} />
      {isMenuOpen && <MobileNavMenu toggleMenu={toggleMenu} />}
      <DesktopMenu />
      {children}
    </div>
  );
}
