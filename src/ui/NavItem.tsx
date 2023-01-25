import Link from "next/link";
import React, { useEffect, useState } from "react";

interface NavItemProps {
  href: string;
  text: string;
  active: string;
}

const NavItem = (props: NavItemProps) => {
  const { href, text, active } = props;
  const [linkActive, setLinkActive] = useState("");

  useEffect(() => setLinkActive("active"), []);

  return (
    <Link href={href} className={`nav__link ${linkActive}`}>
      {text}
    </Link>
  );
};

export default NavItem;
