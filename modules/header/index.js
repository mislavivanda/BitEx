import { useState, useEffect } from "react";
import { Navigation, Button } from "../../components";
import Image from "next/image";
import LogoImage from "../../assets/logo.png";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 px-12 py-2 flex items-center justify-between sm:justify-start bg-white">
      <div className="flex items-center z-20">
        <Image
          src={LogoImage}
          height={40}
          width={40}
          layout="fixed"
          alt="BitEx logo"
        />
        <span className="pl-1 text-primary-color text-2xl">BitEx</span>
      </div>
      <Navigation isOpen={isBurgerOpen} />
      <div className="hidden sm:flex items-center justify-end flex-grow">
        <Button
          onClick={(e) => console.log("clicked1")}
          type="classic"
          style={{ marginRight: "1rem" }}
        >
          Login
        </Button>
        <Button onClick={(e) => console.log("clicked2")} type="filled">
          Register
        </Button>
      </div>
      {/*hamburger bar sa 3 komponente */}
      <div
        className="sm:hidden flex flex-col items-center justify-evenly h-10 w-10 z-20 bg-white hover:cursor-pointer"
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      >
        <div
          id="burger-top"
          className={`w-8 h-1 rounded-md bg-primary-color transition-all duration-500 ease-in-out ${
            isBurgerOpen ? "transform rotate-45  translate-y-[0.6875rem]" : ""
          }`}
        />
        <div
          id="burger-middle"
          className={`w-8 h-1 rounded-md bg-primary-color transition-all duration-500 ease-in-out ${
            isBurgerOpen ? "transform translate-x-10 bg-transparent" : ""
          }`}
        />
        <div
          id="burger-bottom"
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
