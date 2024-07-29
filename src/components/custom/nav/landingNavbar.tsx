import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { cn } from "../../../lib";
import { AppInfo } from "../../../data";
import { useEffect, useState } from "react";

const routes = [
  {
    id: 1,
    name: "For Individuals",
    path: "/",
  },
  {
    id: 2,
    name: "For Business",
    path: "/business",
  },
  {
    id: 3,
    name: "Developers",
    path: "/developers",
  },
  {
    id: 4,
    name: "Resources",
    path: "/resources",
  },
  {
    id: 5,
    name: "Pricing",
    path: "/pricing",
  },
];

function LandingNavbar() {
  const [pathname, setPathname] = useState<string>(
    window?.location?.href ?? ""
  );

  useEffect(() => {
    setPathname(window.location.href);
  }, []);

  return (
    <Navbar
      className="w-full min-w-full md:px-8 bg-gradientB text-black text-[20px] h-[80px] font-medium flex items-center gap-4"
      maxWidth="full"
      isBlurred={false}
    >
      <NavbarBrand>
        <img
          src={"/logo.svg"}
          alt={AppInfo.name}
          height={44}
          width={230}
          className={"object-fit"}
        />
      </NavbarBrand>
      <NavbarContent
        className="hidden md:flex gap-2 sm:gap-8 items-center"
        justify="center"
      >
        {routes.map((e: { id: number; name: string; path: string }) => {
          const isActive = pathname === e.path;
          return (
            <NavbarItem key={e.id} isActive={isActive} aria-current="page">
              <Link
                className={cn(
                  isActive &&
                    "font-bold relative after:absolute after:-bottom-0.5 after:w-full after:left-0 after:h-0.5 after:bg-black",
                  "text-black"
                )}
                href={e.path}
              >
                {e.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="hidden md:flex gap-2 sm:gap-8 items-center"
      >
        <NavbarItem>
          <Link
            className={cn(
              "text-white bg-black px-6 py-2 rounded-sm font-semibold"
            )}
            href="/login"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/register"
            className={cn(
              pathname === "/register" &&
                "font-bold relative after:absolute after:-bottom-0.5 after:w-full after:left-0 after:h-0.5 after:bg-black",
              "text-black"
            )}
          >
            Register
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="flex md:hidden">
        <NavbarItem>
          <NavbarMenuToggle className="w-[40px] h-[40px]" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="p-6 py-8 text-white flex gap-4 flex-col">
        {routes.map((e: { id: number; name: string; path: string }) => {
          const isActive = pathname === e.path;
          return (
            <NavbarMenuItem key={e.id} isActive={isActive} aria-current="page">
              <Link
                className={cn(
                  isActive &&
                    "font-bold relative after:absolute after:-bottom-0.5 after:w-full after:left-0 after:h-0.5 after:bg-white text-primary",
                  "text-white"
                )}
                href={e.path}
              >
                {e.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem>
          <Link
            className={cn(
              "text-black bg-white px-6 py-2 rounded-sm font-semibold"
            )}
            href="/login"
          >
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/register"
            className={cn(
              pathname === "/register" &&
                "font-bold relative after:absolute after:-bottom-0.5 after:w-full after:left-0 after:h-0.5 after:bg-white text-primary",
              "text-white"
            )}
          >
            Register
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default LandingNavbar;
