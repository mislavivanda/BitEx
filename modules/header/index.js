import { useState } from "react";
import { Navigation, Button } from "../../components";
import Dropdown from "./dropdown";
import Image from "next/image";
import LogoImage from "../../assets/logo.png";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <header className="border-b-2 border-primary-color fixed w-full top-0 px-12 py-2 flex items-center justify-between sm:justify-start bg-white">
      <div className="relative flex items-center z-20">
        <Image
          src={LogoImage}
          height={40}
          width={40}
          layout="fixed"
          alt="BitEx logo"
        />
        <span className="pl-1 text-primary-color text-2xl">BitEx</span>
      </div>
      <Navigation isOpen={isBurgerOpen} isUserLoggedIn={isUserLoggedIn} />
      <div className="hidden sm:flex items-center justify-end flex-grow">
        {isUserLoggedIn ? (
          <>
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
          </>
        ) : (
          <>
            <Button
              onClick={(e) => console.log("clicked2")}
              type="filled"
              classes="mr-[1rem]"
            >
              Register
            </Button>
            <Button onClick={(e) => console.log("clicked1")} type="classic">
              Login
            </Button>
          </>
        )}
      </div>
      {/*hamburger bar sa 3 komponente */}
      <div
        className="sm:hidden flex flex-col items-center justify-evenly h-10 w-10 z-20 bg-white hover:cursor-pointer"
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      >
        <div
          className={`w-8 h-1 rounded-md bg-primary-color transition-all duration-500 ease-in-out ${
            isBurgerOpen ? "transform rotate-45  translate-y-[0.6875rem]" : ""
          }`}
        />
        <div
          className={`w-8 h-1 rounded-md bg-primary-color transition-all duration-500 ease-in-out ${
            isBurgerOpen ? "transform translate-x-10 bg-transparent" : ""
          }`}
        />
        <div
          className={`w-8 h-1 rounded-md bg-primary-color transition-all duration-500 ease-in-out ${
            isBurgerOpen
              ? "transform -rotate-45 -translate-y-[0.6875rem]  "
              : ""
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
