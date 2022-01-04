import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 flex justify-center sm:justify-between items-center flex-wrap bg-primary-color py-0 px-12 text-base text-white text-lg">
      <div className="flex items-center">
        {["About Us", "Contact"].map((item, index) =>
          index < 1 ? (
            <React.Fragment key={item}>
              <Link href="/about">
                <a className="p-2 text-center hover:cursor-pointer">{item}</a>
              </Link>
              <div className="after:content-['•'] pointer-events-none" />
            </React.Fragment>
          ) : (
            <Link
              key={item}
              href="/contact"
              className="p-2 text-center hover:cursor-pointer"
            >
              <a className="p-2 text-center hover:cursor-pointer">{item}</a>
            </Link>
          )
        )}
      </div>
      <div className="p-2 text-center">@BitEx 2022. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
