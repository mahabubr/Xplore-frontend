"use client";

import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { CSSTransition } from "react-transition-group";
import logo from "../../assets/brand.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <Image src={logo} width={100} height={30} alt="" />
        </div>
        <div className="hidden md:flex space-x-6 ">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-white hover:text-accent transition duration-300"
            >
              {route.name}
            </Link>
          ))}
          <Button type="primary">Login</Button>
        </div>
        <div className="md:hidden">
          <MenuOutlined
            className="text-white text-3xl cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>
      </div>
      <CSSTransition
        in={menuVisible}
        timeout={500}
        classNames="mobile-menu"
        unmountOnExit
      >
        <div className="md:hidden mt-5">
          <Menu mode="vertical">
            {routes.map((route) => (
              <Menu.Item key={route.path}>
                <Link href={route.path}>{route.name}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key="login">
              <Button type="primary">Login</Button>
            </Menu.Item>
          </Menu>
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
