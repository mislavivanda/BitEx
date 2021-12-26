import React, { useState } from "react";
import { Button } from "../../components";
import Dropdown from "../../modules/header/dropdown";

const Navigation = ({ isOpen, isUserLoggedIn }) => {
  const [clickedNavItem, setClickedNavItem] = useState(0);

  return (
    <React.Fragment>
      {/*horizontal navbar, ukljucen na width>=sm */}
      <nav className="ml-6 hidden sm:flex align-center flex-nowrap font-bold text-lg list-none">
        {["Crypto offer", "Trade", "Blog"].map((item, index) => (
          <li
            key={index}
            className={`py-1 px-3 ${
              clickedNavItem === index ? "text-primary-color" : "border-none"
            } hover:cursor-pointer`}
            onClick={(e) =>
              clickedNavItem !== index && setClickedNavItem(index)
            }
          >
            {item}
          </li>
        ))}
      </nav>
      {/*burger menu -> ukljucen na <= sm + mora bit isopen true */}
      <section
        className={`transform ${
          !isOpen ? "translate-x-full" : "translate-x-0"
        } mb-2 sm:hidden flex flex-col items-center justify-center fixed top-0 right-0 w-screen h-screen transition-transform duration-500 ease-in-out bg-white z-10`}
      >
        {!isUserLoggedIn ? (
          <>
            <Button
              onClick={(e) => console.log("clicked2")}
              type="filled"
              classes="mr-[2rem]"
            >
              Register
            </Button>
            <Button onClick={(e) => console.log("clicked1")} type="classic">
              Login
            </Button>
          </>
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
          <div
            key={index}
            className={`my-2 py-1 px-3 ${
              clickedNavItem === index
                ? "bg-primary-color text-white"
                : "text-font-color-dark"
            } hover:bg-primary-color cursor-pointer hover:text-white`}
            onClick={(e) =>
              clickedNavItem !== index && setClickedNavItem(index)
            }
          >
            {item}
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Navigation;
