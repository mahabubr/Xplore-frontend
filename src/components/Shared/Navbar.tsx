"use client";

import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { CSSTransition } from "react-transition-group";
import logo from "../../assets/brand.png";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartDrawer from "../UI/CartDrawer";

import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);

  const [menuVisible, setMenuVisible] = useState(false);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
    <nav className="bg-primary  p-4 sticky top-0 z-50 backdrop-blur-xl backdrop:bg-primary bg-white/30">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <Image src={logo} width={100} height={30} alt="" />
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-sunset hover:text-passion transition duration-500"
            >
              {route.name}
            </Link>
          ))}
          <Link href={"/login"}>
            <Button type="primary">Login</Button>
          </Link>
          <ShoppingCartOutlined className="text-lg" onClick={showDrawer} />
        </div>
        <div className="md:hidden">
          <MenuOutlined
            className="text-nature text-3xl cursor-pointer"
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
        <div className="md:hidden mt-5 ">
          <Menu mode="vertical">
            {routes.map((route) => (
              <Menu.Item key={route.path}>
                <Link href={route.path}>{route.name}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key="login">
              <Link href={"/login"}>
                <Button type="primary">Login</Button>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </CSSTransition>
      <CartDrawer open={open} onClose={onClose} />
    </nav>
  );
};

export default Navbar;
