import { useState } from "react";
import { useRouter } from "next/router";

const Dropdown = () => {
  const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();
  return (
    <>
      <div
        className="relative hover:cursor-pointer"
        onClick={() => setIsOpened(!isOpened)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#642dfd"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-500 ease-in-out ${
            isOpened ? "rotate-90" : ""
          }`}
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <ul
          className={`py-1 absolute list-none right-0 top-[calc(100%+1rem)] bg-white shadow-md rounded-md z-40
                    ${
                      isOpened ? "opacity-1" : "opacity-0"
                    } transition-opacity duration-500 ease-in-out
                `}
        >
          <li
            className="flex items-center hover:cursor-pointer py-2 px-6"
            onClick={() => {
              setIsOpened(false);
              router.push("/account");
            }}
          >
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#642dfd"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-primary-color">Account</span>
          </li>
          <li
            className="flex items-center hover:cursor-pointer py-2 px-6"
            onClick={() => {
              setIsOpened(false);
              router.push("/login");
            }}
          >
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#642dfd"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span className="text-primary-color">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Dropdown;
