import React from "react";
import { useRouter } from "next/router";
import { Button } from "../../components";
import Dropdown from "../../modules/header/dropdown";
import Link from "next/link";

const Navigation = ({ isOpen, setIsBurgerOpen, isUserLoggedIn }) => {
  const router = useRouter();

  return (
    <React.Fragment>
      {/*horizontal navbar, ukljucen na width>=sm */}
      <nav className="ml-6 hidden sm:flex align-center flex-nowrap font-bold text-lg list-none">
        {["Crypto offer", "Trade", "Blog"].map((item, index) => (
          <Link key={index} href={`/${item.replace(/\s/g, "").toLowerCase()}`}>
            <li
              className={`py-1 px-3 ${
                `/${item.replace(/\s/g, "").toLowerCase()}` === router.route
                  ? "text-primary-color"
                  : "border-none"
              } hover:cursor-pointer`}
            >
              {item}
            </li>
          </Link>
        ))}
      </nav>
      {/*burger menu -> ukljucen na <= sm + mora bit isopen true */}
      <section
        className={`${
          !isOpen ? "translate-x-full" : "translate-x-0"
        } mb-2 sm:hidden flex flex-col items-center justify-center fixed top-0 right-0 w-screen h-screen transition-transform duration-500 ease-in-out bg-white z-30`}
      >
        {!isUserLoggedIn ? (
          <div className="mb-2 flex items-center">
            <Button
              onClick={() => {
                setIsBurgerOpen(false);
                router.push("/register");
              }}
              type="filled"
              classes="mr-[2rem]"
            >
              Register
            </Button>
            <Button
              onClick={() => {
                setIsBurgerOpen(false);
                router.push("/login");
              }}
              type="classic"
            >
              Login
            </Button>
          </div>
        ) : (
          <div className="fixed mx-auto top-14 flex items-center">
            <span className="my-2 py-1 px-3 text-primary-color">
              {" "}
              Matej Dražić(50$)
            </span>
            <div className="relative rounded-[50%] bg-primary-color h-[40px] w-[40px]">
              <span className="absolute text-white text-lg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                M
              </span>
            </div>
            <Dropdown />
          </div>
        )}
        {["Crypto offer", "Trade", "Blog"].map((item, index) => (
          <Link key={index} href={`/${item.replace(/\s/g, "").toLowerCase()}`}>
            <div
              key={index}
              className={`my-2 py-1 px-3 ${
                `/${item.replace(/\s/g, "").toLowerCase()}` === router.route
                  ? "bg-primary-color text-white"
                  : "text-font-color-dark"
              } hover:bg-primary-color cursor-pointer hover:text-white`}
              onClick={() => {
                setIsBurgerOpen(false);
                router.push(`/${item.replace(/\s/g, "").toLowerCase()}`);
              }}
            >
              {item}
            </div>
          </Link>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Navigation;
