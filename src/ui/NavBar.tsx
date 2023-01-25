"use client";

import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
];
const NavBar = () => {
  return (
    <header>
      <nav className="nav">
        <Link href={"/"}>Home</Link>

        <div className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="nav__menu-list">
          {MENU_LIST.map((menu, idx) => {
            return (
              <div key={menu.title}>
                <NavItem href={menu.href} text={menu.title} active={""} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
