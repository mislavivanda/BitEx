import React from "react";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 flex justify-center sm:justify-between items-center flex-wrap bg-primary-color py-0 px-12 text-base text-white">
      <div className="flex items-center">
        {["About Us", "Contact"].map((item, index) =>
          index < 1 ? (
            <React.Fragment key={item}>
              <div className="p-2 text-center">{item}</div>
              <div className="after:content-['•']"></div>
            </React.Fragment>
          ) : (
            <div key={item} className="p-2 text-center">
              {item}
            </div>
          )
        )}
      </div>
      <div className="p-2 text-center">@BitEx 2021. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
