"use client";
import React from "react";
import Link from "next/link";
import CherryIcon from "@/assets/icons/cherryIcon";

const Navbar = () => {
  const handleClickMenu = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="bg-background px-4 py-3 shadow-sm md:px-6 lg:px-8">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <CherryIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Cherry Ventures</span>
      </Link>
      <nav className="hidden space-x-6 md:flex">
        <p className="cursor-pointer text-md font-medium hover:text-primary transition-colors">
          Home
        </p>
        <p
          onClick={() => handleClickMenu("about")}
          className="cursor-pointer text-md font-medium hover:text-primary transition-colors"
        >
          About
        </p>
        <p
          onClick={() => handleClickMenu("portfolio")}
          className="cursor-pointer text-md font-medium hover:text-primary transition-colors"
        >
          Portfolio
        </p>
        <p
          onClick={() => handleClickMenu("contact")}
          className="cursor-pointer text-md font-medium hover:text-primary transition-colors"
        >
          Contact
        </p>
      </nav>
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors">
        Get Started
      </button>
    </div>
    </header>
  );
};

export default Navbar;
