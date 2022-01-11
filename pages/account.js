import React, { useState, useMemo } from "react";
import {
  mockPortfolioData,
  mockTradesData,
  mockAnalyticsData,
  mockCreditCards,
} from "../mockData";
import {
  Button,
  ChevronRight,
  Widget,
  Pagination,
  Popup,
  Label,
} from "../components";
import Image from "next/image";
import FakeImage from "../assets/cash_register.png";

const pageSize = 5;

const Account = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [analyticsPeriodData, setAnalyticsPeriodData] = useState({
    deposit: mockAnalyticsData.today.deposit,
    profit: mockAnalyticsData.today.profit,
    feesAcrrued: mockAnalyticsData.today.feesAcrrued,
  });
  const [analayticsPeriod, setAnalyticsPeriod] = useState("Today"); //today,last week, last month
  const [analyticsPeriodDropwdownOpen, setAnalyticsPeriodDropdownOpen] =
    useState(false);
  const [currentPortfolioPage, setCurrentPortfolioPage] = useState(1);
  const [currentTradesPage, setCurrentTradesPage] = useState(1);
  const [creditCardPopupOpen, setCreditCardPopupOpen] = useState(false);
  const [creditCardPopupData, setCreditCardPopupData] = useState({});

  const handleCreditCardClick = (card) => {
    setCreditCardPopupData(card);
    setCreditCardPopupOpen(true);
  };

  const handleTradeClick = (event, trade) => {
    console.log(event.target);
    let arrowicon = event.target.firstChild;
    let parent = event.target.parentElement;
    arrowicon.classList.toggle("chevron-icon-active");
    parent.classList.toggle("trade-row-active");
    if (arrowicon.classList.contains("chevron-icon-active")) {
      //aktivan redak, ispuni prazni <tr> dio
      //ispuni prazni <tr> dio
      parent.nextSibling.innerHTML = `
      <td colSpan='6'>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;vertical-align:bottom;white-space:nowrap;padding:0.75rem;border-bottom:3px solid #f6f6f7;">Transaction number</th>
              <th style="text-align:center;vertical-align:bottom;white-space:nowrap;padding:0.75rem;border-bottom:3px solid #f6f6f7;">Approval number</th>
              <th style="text-align:center;vertical-align:bottom;white-space:nowrap;padding:0.75rem;border-bottom:3px solid #f6f6f7;">Time</th>
              <th style="text-align:center;vertical-align:bottom;white-space:nowrap;padding:0.75rem;border-bottom:3px solid #f6f6f7;">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;vertical-align:middle;padding:0.75rem;border-top:1px solid #f6f6f7;">${trade.transactionNumber}</td>
              <td style="text-align:center;vertical-align:middle;padding:0.75rem;border-top:1px solid #f6f6f7;">${trade.approvalNumber}</td>
              <td style="text-align:center;vertical-align:middle;padding:0.75rem;border-top:1px solid #f6f6f7;">${trade.time}</td>
              <td style="text-align:center;vertical-align:middle;padding:0.75rem;border-top:1px solid #f6f6f7;font-weight:bold;">$${trade.feePrice}</td>
            </tr>
          </tbody>
        </table>
      </td>`;
    } else parent.nextSibling.innerHTML = ""; //isprazni prazni <tr> dio
  };

  const handleAnalyticsPeriodArrowClick = () => {
    let arrowIcon = document.getElementById(
      "analyticsPeriodArrowContainer"
    ).firstChild;
    arrowIcon.classList.toggle("chevron-icon-active");
    //open dropwdown menu
    if (arrowIcon.classList.contains("chevron-icon-active")) {
      setAnalyticsPeriodDropdownOpen(true);
    } else setAnalyticsPeriodDropdownOpen(false);
  };

  const handleAnalyticsPeriodSelect = (period) => {
    document
      .getElementById("analyticsPeriodArrowContainer")
      .firstChild.classList.toggle("chevron-icon-active");
    setAnalyticsPeriodDropdownOpen(false);
    if (analayticsPeriod !== period) {
      setAnalyticsPeriod(period);
      if (period === "Today") {
        setAnalyticsPeriodData({
          deposit: mockAnalyticsData.today.deposit,
          profit: mockAnalyticsData.today.profit,
          feesAcrrued: mockAnalyticsData.today.feesAcrrued,
        });
      } else if (period === "Last week") {
        setAnalyticsPeriodData({
          deposit: mockAnalyticsData.lastWeek.deposit,
          profit: mockAnalyticsData.lastWeek.profit,
          feesAcrrued: mockAnalyticsData.lastWeek.feesAcrrued,
        });
      } else {
        setAnalyticsPeriodData({
          deposit: mockAnalyticsData.lastMonth.deposit,
          profit: mockAnalyticsData.lastMonth.profit,
          feesAcrrued: mockAnalyticsData.lastMonth.feesAcrrued,
        });
      }
    }
  };

  const currentPortfolioTableData = useMemo(() => {
    const firstPageIndex = (currentPortfolioPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return mockPortfolioData.slice(firstPageIndex, lastPageIndex);
  }, [currentPortfolioPage]);

  const currentTradesTableData = useMemo(() => {
    const firstPageIndex = (currentTradesPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return mockTradesData.slice(firstPageIndex, lastPageIndex);
  }, [currentTradesPage]);

  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 459 459"
              style={{ width: 60, height: 60 }}
              className="mr-2"
            >
              <g fill="#642dfd">
                <path
                  d="M229.5,0C102.53,0,0,102.845,0,229.5C0,356.301,102.719,459,229.5,459C356.851,459,459,355.815,459,229.5
                  C459,102.547,356.079,0,229.5,0z M347.601,364.67C314.887,393.338,273.4,409,229.5,409c-43.892,0-85.372-15.657-118.083-44.314
                  c-4.425-3.876-6.425-9.834-5.245-15.597c11.3-55.195,46.457-98.725,91.209-113.047C174.028,222.218,158,193.817,158,161
                  c0-46.392,32.012-84,71.5-84c39.488,0,71.5,37.608,71.5,84c0,32.812-16.023,61.209-39.369,75.035
                  c44.751,14.319,79.909,57.848,91.213,113.038C354.023,354.828,352.019,360.798,347.601,364.67z"
                />
              </g>
            </svg>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-font-color">
                Matej Dražić Balov
              </h3>
              <h4 className="text-md font-bold text-font-color-light">
                matejdrazic123@gmail.com
              </h4>
            </div>
          </div>
          <div />
          <div className="inline-flex flex-col ">
            <div className="inline-flex">
              <h2 className="mb-6 inline-block border-b-primary-color border-b-[3px] border-solid mt-10 text-lg font-extrabold text-font-color-dark">
                Registered credit cards:
              </h2>
            </div>
            <div className="inline-flex flex-col items-center">
              {mockCreditCards.map((card, index) => (
                <div
                  key={index}
                  className="mb-2 pr-2 flex items-center border-primary-color border-[2px] border-solid rounded-[3px] hover:cursor-pointer hover:scale-105 sm:hover:scale-[1.02] transition-all duration-300 ease-in-out"
                  onClick={() => handleCreditCardClick(card)}
                >
                  <div className="relative w-[60px] h-[40px]">
                    <Image
                      layout="fill"
                      alt="credit card provider logo"
                      src={card.image}
                    />
                  </div>
                  <div className="ml-2 flex-grow text-center text-md font-extrabold text-font-color-dark">
                    {card.number}
                  </div>
                </div>
              ))}
              <Button type="filled" classes="mt-2">
                <div className="flex items-center">
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 16 16"
                    style={{ width: 20, height: 20 }}
                  >
                    <g>
                      <path
                        fill="#ffffff"
                        d="M8,0C3.589,0,0,3.589,0,8s3.589,8,8,8s8-3.589,8-8S12.411,0,8,0z M8,14c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6
                        S11.309,14,8,14z"
                      />
                      <polygon
                        fill="#ffffff"
                        points="9,4 7,4 7,7 4,7 4,9 7,9 7,12 9,12 9,9 12,9 12,7 9,7 		"
                      />
                    </g>
                  </svg>
                  <span className="ml-1">Add card</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full mt-16 flex flex-col justify-center">
          <div className="flex items-center">
            {["Portfolio", "Trades", "Analytics"].map((item, index) => (
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
            <div className="w-full overflow-x-auto mt-8 rounded-[0.5rem] p-5 shadow-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {selectedOptionIndex === 0 ? (
                      <>
                        {["Asset", "Amount", "Price", "Holdings"].map(
                          (item, index) => (
                            <th
                              key={index}
                              className="text-center align-bottom whitespace-nowrap p-[0.75rem] border-b-hover-select border-b-[3px] border-solid"
                            >
                              {item}
                            </th>
                          )
                        )}
                      </>
                    ) : (
                      <>
                        <th className="align-bottom text-center p-[0.75rem] border-b-hover-select border-b-[3px] border-solid">
                          <ChevronRight classes="invisible" />
                        </th>
                        {["Asset", "Amount", "Arrow", "Asset", "Amount"].map(
                          (item, index) => (
                            <th
                              key={index}
                              className={`${
                                index === 2 ? "invisible" : "visible"
                              } text-center align-bottom whitespace-nowrap p-[0.75rem] border-b-hover-select border-b-[3px] border-solid`}
                            >
                              {item}
                            </th>
                          )
                        )}
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="border-b-hover-select border-b-[1px]">
                  {selectedOptionIndex === 0 ? (
                    <>
                      {currentPortfolioTableData.map((data, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid">
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
                            <td className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid">
                              {data.amount}
                            </td>
                            <td className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid">
                              <div className="inline-flex items-center">
                                <span>{`$${data.price}`}</span>
                                {data.growthSign !== 0 ? (
                                  <>
                                    <svg
                                      viewBox="0 0 12 14"
                                      style={{ width: 12, height: 14 }}
                                      className="ml-2"
                                    >
                                      {data.growthSign === 1 ? (
                                        //green arrow
                                        <g>
                                          <path
                                            style={{
                                              stroke: "none",
                                              fillRule: "nonzero",
                                              fill: "rgb(61,244,61)",
                                              fillOpacity: 1,
                                              transform:
                                                "rotate(180deg) translate(-14px,-13px)",
                                            }}
                                            d="M 12.0625 8.828125 L 10.730469 7.53125 C 10.640625 7.445312 10.496094 7.445312 10.40625 7.535156 L 8.167969 9.730469 L 8.167969 0.234375 C 8.167969 0.105469 8.0625 0 7.933594 0 L 6.066406 0 C 5.9375 0 5.832031 0.105469 5.832031 0.234375 L 5.832031 9.730469 L 3.59375 7.535156 C 3.503906 7.445312 3.359375 7.445312 3.269531 7.53125 L 1.9375 8.828125 C 1.890625 8.871094 1.867188 8.933594 1.867188 8.996094 C 1.867188 9.058594 1.890625 9.117188 1.9375 9.164062 L 6.835938 13.933594 C 6.882812 13.976562 6.941406 14 7 14 C 7.058594 14 7.117188 13.976562 7.164062 13.933594 L 12.0625 9.164062 C 12.109375 9.117188 12.132812 9.058594 12.132812 8.996094 C 12.132812 8.933594 12.109375 8.871094 12.0625 8.828125 Z M 12.0625 8.828125 "
                                          />
                                        </g>
                                      ) : (
                                        //red arrow
                                        <g id="surface1">
                                          <path
                                            style={{
                                              stroke: "none",
                                              fillRule: "nonzero",
                                              fill: "rgb(240,45,45)",
                                              fillOpacity: 1,
                                            }}
                                            d="M 12.0625 8.828125 L 10.730469 7.53125 C 10.640625 7.445312 10.496094 7.445312 10.40625 7.535156 L 8.167969 9.730469 L 8.167969 0.234375 C 8.167969 0.105469 8.0625 0 7.933594 0 L 6.066406 0 C 5.9375 0 5.832031 0.105469 5.832031 0.234375 L 5.832031 9.730469 L 3.59375 7.535156 C 3.503906 7.445312 3.359375 7.445312 3.269531 7.53125 L 1.9375 8.828125 C 1.890625 8.871094 1.867188 8.933594 1.867188 8.996094 C 1.867188 9.058594 1.890625 9.117188 1.9375 9.164062 L 6.835938 13.933594 C 6.882812 13.976562 6.941406 14 7 14 C 7.058594 14 7.117188 13.976562 7.164062 13.933594 L 12.0625 9.164062 C 12.109375 9.117188 12.132812 9.058594 12.132812 8.996094 C 12.132812 8.933594 12.109375 8.871094 12.0625 8.828125 Z M 12.0625 8.828125 "
                                          />
                                        </g>
                                      )}
                                    </svg>
                                    <span
                                      className="ml-1 font-bold"
                                      style={{
                                        color:
                                          data.growthSign === 1
                                            ? "#3df43d"
                                            : "#f02d2d",
                                      }}
                                    >{`${data.growthValue}%`}</span>
                                  </>
                                ) : (
                                  <>
                                    <hr className="ml-2 w-[12px] h-[3px] bg-font-color-light" />
                                    <span className="ml-1 font-bold text-font-color-light">
                                      0.00%
                                    </span>
                                  </>
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid font-extrabold">{`$${data.holding}`}</td>
                          </tr>
                          <tr></tr>
                        </React.Fragment>
                      ))}
                      {
                        //padding da visina tablica ostane konstanta prilikom promjene stranica iako nema dovoljno redaka
                        currentPortfolioTableData.length < pageSize ? (
                          <>
                            {new Array(
                              pageSize - currentPortfolioTableData.length
                            )
                              .fill(0)
                              .map(() => (
                                <tr className="invisible">
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                </tr>
                              ))}
                          </>
                        ) : null
                      }
                    </>
                  ) : (
                    <>
                      {currentTradesTableData.map((data, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td
                              onClick={(e) => handleTradeClick(e, data)}
                              className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid hover:cursor-pointer hover:bg-hover-select transition-all duration-200 ease-in-out"
                            >
                              <ChevronRight classes="inline-block pointer-events-none transition-transform duration-500 ease-in-out" />
                            </td>
                            <td className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid">
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
                            <td className="p-3 text-center font-extrabold align-middle border-t-hover-select border-t-[1px] border-solid">
                              {data.amount1}
                            </td>
                            <td className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid">
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
                            <td className="p-3 text-center align-middle border-t-hover-select border-t-[1px] border-solid">
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
                            <td className="p-3 text-center font-extrabold align-middle border-t-hover-select border-t-[1px] border-solid">
                              {data.amount2}
                            </td>
                          </tr>
                          <tr></tr>
                        </React.Fragment>
                      ))}
                      {
                        //padding da visina tablica ostane konstanta prilikom promjene stranica iako nema dovoljno redaka
                        currentTradesTableData.length < pageSize ? (
                          <>
                            {new Array(pageSize - currentTradesTableData.length)
                              .fill(0)
                              .map(() => (
                                <tr className="invisible">
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                  <td className="p-3 text-center align-middle">
                                    H
                                  </td>
                                </tr>
                              ))}
                          </>
                        ) : null
                      }
                    </>
                  )}
                </tbody>
              </table>
              {selectedOptionIndex === 0 ? (
                <Pagination
                  currentPage={currentPortfolioPage}
                  totalCount={mockPortfolioData.length}
                  pageSize={pageSize}
                  onPageChange={(page) => setCurrentPortfolioPage(page)}
                />
              ) : (
                <Pagination
                  currentPage={currentTradesPage}
                  totalCount={mockTradesData.length}
                  pageSize={pageSize}
                  onPageChange={(page) => setCurrentTradesPage(page)}
                />
              )}
            </div>
          ) : (
            <div className="mt-8 text-3xl font-extrabold text-font-color">
              <div
                className="relative z-40 inline-flex items-center px-5 py-2 rounded-full"
                style={{ backgroundColor: "#EFEFEF" }}
              >
                <span className="text-font-color-dark font-extrabold text-xl">
                  {analayticsPeriod}
                </span>
                <div
                  id="analyticsPeriodArrowContainer"
                  className="hover:cursor-pointer"
                  onClick={handleAnalyticsPeriodArrowClick}
                >
                  <ChevronRight
                    stroke="#141414"
                    classes="pointer-events-none transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div
                  className={`absolute z-40 w-max top-12 left-0 text-lg rounded-md bg-white shadow-md ${
                    analyticsPeriodDropwdownOpen ? "opacity-1" : "opacity-0"
                  } transition-opacity duration-500 ease-in-out`}
                >
                  <div
                    className="w-full px-5 py-2 hover:cursor-pointer hover:hover:bg-hover-select transition-all duration-200 ease-in-out"
                    onClick={() => handleAnalyticsPeriodSelect("Today")}
                  >
                    Today
                  </div>
                  <div
                    className="w-full px-5 py-2 hover:cursor-pointer hover:hover:bg-hover-select transition-all duration-200 ease-in-out"
                    onClick={() => handleAnalyticsPeriodSelect("Last week")}
                  >
                    Last week
                  </div>
                  <div
                    className="w-full px-5 py-2 hover:cursor-pointer hover:hover:bg-hover-select transition-all duration-200 ease-in-out"
                    onClick={() => handleAnalyticsPeriodSelect("Last month")}
                  >
                    Last month
                  </div>
                </div>
              </div>
              {/* TODO: dodaj png ikone za depozit, profit i fee i odaberi boje widgeta */}
              <div className="mt-10 w-full max-w-screen-lg mx-auto flex flex-wrap items-center justify-evenly">
                <Widget
                  classes="my-2"
                  color="#642dfd"
                  icon={FakeImage}
                  value={`$${analyticsPeriodData.deposit}`}
                  description="DEPOSIT"
                />
                <Widget
                  classes="my-2"
                  color="#642dfd"
                  icon={FakeImage}
                  value={`$${analyticsPeriodData.profit}`}
                  description="PROFIT"
                />
                <Widget
                  classes="my-2"
                  color="#642dfd"
                  icon={FakeImage}
                  value={`$${analyticsPeriodData.feesAcrrued}`}
                  description="FEES ACRUED"
                />
              </div>
            </div>
          )}
        </div>
        <Popup isOpen={creditCardPopupOpen} closeModal={setCreditCardPopupOpen}>
          <div className="flex flex-col">
            <Label classes="mb-1">Card holder</Label>
            <div className="px-2 mb-1 text-lg border-2 border-font-color-dark border-solid rounded-md">
              <h2>{creditCardPopupData.cardHolder}</h2>
            </div>
            <Label classes="mb-1">Expiration date</Label>
            <div className="px-2 mb-1 text-lg border-2 border-font-color-dark border-solid rounded-md">
              <h2>{creditCardPopupData.expirationDate}</h2>
            </div>
            <Label classes="mb-1">Security code</Label>
            <div className="px-2 mb-1 text-lg border-2 border-font-color-dark border-solid rounded-md">
              <h2>{creditCardPopupData.securityCode}</h2>
            </div>
            <Label classes="mb-1">Date added</Label>
            <div className="px-2 mb-1 text-lg border-2 border-font-color-dark border-solid rounded-md">
              <h2>{creditCardPopupData.dateAdded}</h2>
            </div>
          </div>
        </Popup>
      </section>
    </>
  );
};

Account.needsAuthentication = true;

export default Account;
