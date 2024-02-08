"use client";

import { useCallback, useState } from "react";
import { menu } from "@/constants/navigation";
import Logo from "../Icons/Logo";
import Link from "next/link";
import SearchIcon from "../Icons/Search";
import HelpIcon from "../Icons/Help";
import CartIcon from "../Icons/Cart";
import ProfileIcon from "../Icons/Profile";
import Burger from "../Icons/Burger";
import classNames from "classnames";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleOpen = useCallback(() => setShowMobileMenu(true), []);

  const handleClose = useCallback(() => setShowMobileMenu(false), []);

  const nav = (
    <nav>
      <ul className="header-list">
        {menu.map((item) => (
          <li key={item.route}>
            <Link href={item.route} className="header-item">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <div
        className={classNames("burger-container", {
          "burger-container__open": showMobileMenu,
        })}
      >
        <div className="burger-header">
          <button className="burger-close" onClick={handleClose}>
            &times;
          </button>
        </div>
        {nav}
      </div>
      <div className="container">
        <div className="banner-top">
          <Link href="/">
            Free shipping. Simple returns. Holiday shopping has never been
            easier. Shop now.
          </Link>
        </div>
      </div>
      <header className="header-container">
        <div className="header-left">
          <div className="header-logo">
            <Logo />
          </div>
          {nav}
        </div>
        <div className="header-buttons">
          <button className="header-button" aria-label="search">
            <SearchIcon />
          </button>
          <button className="header-button" aria-label="help">
            <HelpIcon />
          </button>
          <button className="header-button" aria-label="cart">
            <CartIcon />
          </button>
          <button className="header-button" aria-label="profile">
            <ProfileIcon />
          </button>
          <button
            className="header-burger"
            aria-label="burger"
            onClick={handleOpen}
          >
            <Burger />
          </button>
        </div>
      </header>
    </>
  );
}
