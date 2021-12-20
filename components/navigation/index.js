import React, { useState } from "react";
import { Button } from "../../components";

const Navigation = ({ isOpen }) => {
  const [clickedNavItem, setClickedNavItem] = useState(0);

  return (
    <React.Fragment>
      {/*horizontal navbar, ukljucen na width>=sm */}
      <nav className="ml-6 hidden sm:flex align-center flex-nowrap font-bold text-lg list-none">
        {["Crypto offer", "Trade", "Blog"].map((item, index) => (
          <li
            key={index}
            className={`py-1 px-3 rounded-3xl ${
              clickedNavItem === index
                ? "bg-primary-color text-white"
                : "text-font-color-dark"
            } hover:bg-primary-color cursor-pointer`}
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
        <div className="flex items-center">
          <Button
            onClick={(e) => console.log("clicked2")}
            type="filled"
            style={{ marginRight: "2rem" }}
          >
            Register
          </Button>
          <Button onClick={(e) => console.log("clicked1")} type="classic">
            Login
          </Button>
        </div>
        {["Crypto offer", "Trade", "Blog"].map((item, index) => (
          <div
            key={index}
            className={`my-2 py-1 px-3 ${
              clickedNavItem === index
                ? "bg-primary-color text-white"
                : "text-font-color-dark"
            } hover:bg-primary-color cursor-pointer`}
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
