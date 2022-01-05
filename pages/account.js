import { useState } from "react";
import {
  mockDashboardData,
  mockTradesData,
  mockAnalyticsData,
  mockCreditCards,
} from "../mockData";
import UserIcon from "../assets/user_icon.png";
import Image from "next/image";

const Account = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  return (
    <>
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <div className="flex items-center">
            <div className="relative w-[60px] h-[60px] rounded-[50%]">
              <Image layout="fill" alt="profile picture" src={UserIcon} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-font-color">
                Matej Dražić Balov
              </h3>
              <h4 className="text-md font-bold text-font-color-light">
                matejdrazic123@gmail.com
              </h4>
            </div>
          </div>
          <h2 className="inline-block border-b-primary-color border-b-[3px] border-solid mt-10 text-lg font-extrabold text-font-color-dark">
            Registered credit cards:
          </h2>
          <div className="mt-10 flex flex-col items-start">
            {mockCreditCards.map((card, index) => (
              <div
                key={index}
                className="mb-2 pr-2 flex items-center border-primary-color border-[2px] border-solid rounded-[3px] hover:cursor-pointer hover:scale-105 sm:hover:scale-[1.02] transition-all duration-300 ease-in-out"
              >
                <div className="relative w-[60px] h-[40px]">
                  <Image
                    layout="fill"
                    alt="credit card provider logo"
                    src={card.image}
                  />
                </div>
                <div className="ml-2 text-md font-extrabold text-font-color-dark">
                  {card.number}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-16 flex flex-col justify-center lg:flex-grow lg:ml-10">
          <div className="flex items-center">
            {["Dashboard", "Trades", "Analytics"].map((item, index) => (
              <div
                key={index}
                className={`pt-2 mr-12 text-lg hover:cursor-pointer
                ${
                  selectedOptionIndex === index
                    ? "text-primary-color border-b-primary-color border-b-[3px] border-solid"
                    : "text-font-color"
                }`}
                onClick={() => setSelectedOptionIndex(index)}
              >
                {item}
              </div>
            ))}
          </div>
          {selectedOptionIndex < 2 ? (
            <div className="w-full overflow-x-auto mt-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {selectedOptionIndex === 0 ? (
                      <>
                        {["Asset", "Amount", "Price", "Holdings"].map(
                          (item, index) => (
                            <th
                              key={index}
                              className="text-center align-bottom whitespace-nowrap p-[0.75rem] border-b-font-color-light border-b-[3px] border-solid"
                            >
                              {item}
                            </th>
                          )
                        )}
                      </>
                    ) : (
                      <>
                        {["Asset", "Amount", "Arrow", "Asset", "Amount"].map(
                          (item, index) => (
                            <th
                              key={index}
                              className={`${
                                index === 2 ? "invisible" : "visible"
                              } text-center align-bottom whitespace-nowrap p-[0.75rem] border-b-font-color-light border-b-[3px] border-solid`}
                            >
                              {item}
                            </th>
                          )
                        )}
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="border-b-font-color-light border-b-[1px] border-l-font-color-light border-l-[2px] border-r-font-color-light border-r-[1px]">
                  {selectedOptionIndex === 0 ? (
                    <>
                      {mockDashboardData.map((data, index) => (
                        <tr key={index}>
                          <td className="p-3 text-center align-middle border-t-font-color-light border-t-[1px] border-solid">
                            <div className="flex items-center justify-center">
                              <Image
                                src={data.assetIcon}
                                width={20}
                                height={20}
                                layout="fixed"
                                alt="Asset icon"
                              />
                              <span className="ml-2">{data.asset}</span>
                            </div>
                          </td>
                          <td className="p-3 text-center align-middle border-t-font-color-light border-t-[1px] border-solid">
                            {data.amount}
                          </td>
                          <td className="p-3 text-center align-middle border-t-font-color-light border-t-[1px] border-solid">{`$${data.price}`}</td>
                          <td className="p-3 text-center align-middle border-t-font-color-light border-t-[1px] border-solid font-extrabold">{`$${data.holding}`}</td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {mockTradesData.map((data, index) => (
                        <tr key={index}>
                          <td className="p-3 text-center align-middle border-t-font-color-light border-t-[1px] border-solid">
                            <div className="flex items-center justify-center">
                              <Image
                                src={data.asset1Icon}
                                width={20}
                                height={20}
                                layout="fixed"
                                alt="Asset icon"
                              />
                              <span className="ml-2">{data.asset1}</span>
                            </div>
                          </td>
                          <td className="p-3 text-center font-extrabold align-middle border-t-font-color-light border-t-[1px] border-solid">
                            {data.amount1}
                          </td>
                          <td className="p-3 text-center align-middle border-t-font-color-light border-t-[1px] border-solid">
                            <svg
                              style={{ width: "100%" }}
                              height="20"
                              viewBox="0 0 52 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M51.7071 8.70711C52.0976 8.31658 52.0976 7.68342 51.7071 7.29289L45.3431 0.928932C44.9526 0.538408 44.3195 0.538408 43.9289 0.928932C43.5384 1.31946 43.5384 1.95262 43.9289 2.34315L49.5858 8L43.9289 13.6569C43.5384 14.0474 43.5384 14.6805 43.9289 15.0711C44.3195 15.4616 44.9526 15.4616 45.3431 15.0711L51.7071 8.70711ZM0 9H51V7H0V9Z"
                                fill="#D3D3D3"
                              />
                            </svg>
                          </td>
                          <td className="p-3 text-center align-middle border-t-font-color-light border-t-[1px] border-solid">
                            <div className="flex items-center justify-center">
                              <Image
                                src={data.asset2Icon}
                                width={20}
                                height={20}
                                layout="fixed"
                                alt="Asset icon"
                              />
                              <span className="ml-2">{data.asset2}</span>
                            </div>
                          </td>
                          <td className="p-3 text-center font-extrabold align-middle border-t-font-color-light border-t-[1px] border-solid">
                            {data.amount2}
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-8 text-3xl font-extrabold text-font-color">
              <h2 className="p-5">{`Deposit: $${mockAnalyticsData.lastWeek.deposit}`}</h2>
              <h2 className="p-5">{`Profit: $${mockAnalyticsData.lastWeek.profit}`}</h2>
              <h2 className="p-5">{`Fees accrued: ${mockAnalyticsData.lastWeek.feesAcrrued}`}</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Account;
