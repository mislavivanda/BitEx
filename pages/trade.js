import { useState, useRef, useEffect } from "react";
import {
  Label,
  Button,
  Stepper,
  Popup,
  InputField,
  Spinner,
} from "../components";
import Image from "next/image";
import {
  mockCreditCards,
  mockCryptoOffer,
  mockPaymentOptions,
} from "../mockData";
import { useRouter } from "next/router";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Trade = () => {
  const [paymentModal, setPaymentModal] = useState(false);
  const [cryptoModal, setCryptoModal] = useState(false);
  const [creditCardModal, setCreditCardModal] = useState(false);
  const [currentCreditCard, setCurrentCreditCard] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(mockCryptoOffer[0]);
  const [selectedPayment, setSelectedPayment] = useState(mockPaymentOptions[0]);
  const [activeStep, setActiveStep] = useState(1);
  const [searchedCryptos, setSearchedCryptos] = useState("");
  const [buyingCrypto, setBuyingCrypto] = useState(true);
  const [receivedAmount, setReceivedAmount] = useState("0.00");
  const [insertAmount, setInsertAmount] = useState("0.00");
  const [trading, setTrading] = useState(false);
  const [widthh, setWidth] = useState(null);
  const [heightt, setHeight] = useState(null);

  const { width, height } = useWindowSize();

  const confettiRef = useRef(null);

  const router = useRouter();

  const isTrading = () => {
    setTrading(true);
    setTimeout(() => {
      setTrading(false);
      setActiveStep(3);
    }, 2000);
  };

  useEffect(() => {
    setWidth(width);
    setHeight(height);
  }, []);

  return (
    <>
      {/* MODAL - PLACANJE*/}
      <Popup isOpen={paymentModal} closeModal={setPaymentModal}>
        <Label classes="text-base">Select payment type</Label>
        <div className="grid grid-cols-1 gap-4 border-gray-900 sm:grid-cols-2 md:grid-cols-4 mt-8">
          {mockPaymentOptions.map((element, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedPayment(element);
                  if (element.name == "Credit card") {
                    setCreditCardModal(true);
                  } else {
                    setPaymentModal(false);
                  }
                }}
                className="hover:cursor-pointer"
              >
                <Image
                  src={element.image}
                  key={index}
                  width={100}
                  height={100}
                  layout="fixed"
                  alt="Asset icon"
                />
                <Label forName="text" classes="text-center">
                  {element.name}
                </Label>
              </div>
            );
          })}
        </div>
      </Popup>

      {/* MODAL - KRIPTOVALUTE */}
      <Popup isOpen={cryptoModal} closeModal={setCryptoModal}>
        <Label classes="text-base">Select payment type</Label>
        <div className="pt-2 flex justify-center text-gray-600">
          <input
            className="w-[300px] border-2 border-gray-200 bg-white h-10 px-5 rounded-3xl text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            onChange={(e) => {
              setSearchedCryptos(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mt-8">
          {mockCryptoOffer
            .filter((element) =>
              element.name.toLowerCase().includes(searchedCryptos)
            )
            .map((element, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedCrypto(element);
                    setSearchedCryptos("");
                    setCryptoModal(false);
                  }}
                  className="hover:cursor-pointer"
                >
                  <Image
                    key={index}
                    src={element.icon}
                    width={100}
                    height={100}
                    layout="fixed"
                    alt="Asset icon"
                  />
                  <Label forName="text" classes="text-center">
                    {element.name}
                  </Label>
                </div>
              );
            })}
        </div>
      </Popup>

      {/* MODAL - KREDITNE */}
      <Popup isOpen={creditCardModal} closeModal={setCreditCardModal}>
        <Label classes="text-base">Select credit card</Label>
        {mockCreditCards.map((card, index) => (
          <div
            key={index}
            className="mb-2 pr-2 flex items-center border-primary-color border-[2px] border-solid rounded-[3px] hover:cursor-pointer hover:scale-105 sm:hover:scale-[1.02] transition-all duration-300 ease-in-out"
            onClick={() => {
              setPaymentModal(false);
              setCurrentCreditCard(mockCreditCards[index]);
              setCreditCardModal(false);
            }}
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
      </Popup>

      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        Trade
      </h1>
      <Stepper
        classes="mt-6 mx-auto w-full md:max-w-screen-md"
        activeStep={activeStep}
        stepLabels={[
          "Select pay method and crypto",
          "Select amount and trade",
          "Trade info",
        ]}
      />
      {activeStep == 1 ? (
        <section className="flex flex-wrap items-center justify-evenly">
          <div className="mt-10 w-full h-40 max-w-2xl">
            <div className="flex justify-between content-center">
              <table className="w-full border-separate">
                <thead>
                  <tr>
                    <th className="w-1/3">
                      {buyingCrypto ? (
                        <Label classes="text-base" forName="payment">
                          Select payment method
                        </Label>
                      ) : (
                        <Label classes="text-base" forName="payment">
                          Select cryptocurrency
                        </Label>
                      )}
                    </th>
                    <th className="w-1/3"></th>
                    <th className="w-1/3">
                      {buyingCrypto ? (
                        <Label classes="text-base" forName="payment">
                          Select cryptocurrency
                        </Label>
                      ) : (
                        <Label classes="text-base" forName="payment">
                          Select payment method
                        </Label>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {buyingCrypto ? (
                      <td
                        onClick={() => {
                          setPaymentModal(true);
                        }}
                        className="text-center hover:cursor-pointer"
                      >
                        <Image
                          src={selectedPayment.image}
                          width={100}
                          height={100}
                          layout="fixed"
                          alt="Asset icon"
                        />
                        <Label classes="text-base" forName="text">
                          {selectedPayment.name}
                        </Label>
                      </td>
                    ) : (
                      <td
                        onClick={() => {
                          setCryptoModal(true);
                        }}
                        className="text-center hover:cursor-pointer"
                      >
                        <Image
                          src={selectedCrypto.icon}
                          width={100}
                          height={100}
                          layout="fixed"
                          alt="Asset icon"
                        />
                        <Label classes="text-base" forName="text">
                          {selectedCrypto.name}
                        </Label>
                      </td>
                    )}
                    <td
                      className="hover:cursor-pointer"
                      onClick={() => {
                        setBuyingCrypto((prev) => !prev);
                      }}
                    >
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
                    {buyingCrypto ? (
                      <td
                        onClick={() => {
                          setCryptoModal(true);
                        }}
                        className="text-center hover:cursor-pointer"
                      >
                        <Image
                          src={selectedCrypto.icon}
                          width={100}
                          height={100}
                          layout="fixed"
                          alt="Asset icon"
                        />
                        <Label classes="text-base" forName="text">
                          {selectedCrypto.name}
                        </Label>
                      </td>
                    ) : (
                      <td
                        onClick={() => {
                          setPaymentModal(true);
                        }}
                        className="text-center hover:cursor-pointer"
                      >
                        <Image
                          src={selectedPayment.image}
                          width={100}
                          height={100}
                          layout="fixed"
                          alt="Asset icon"
                        />
                        <Label classes="text-base" forName="text">
                          {selectedPayment.name}
                        </Label>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {activeStep == 2 ? (
        <section className="flex flex-wrap items-center justify-evenly">
          <div className="mt-10 w-full h-40 max-w-2xl">
            <div className="flex justify-between content-center">
              <table className="w-full border-separate">
                <thead>
                  <tr>
                    <th className="w-1/3">
                      {buyingCrypto ? (
                        <Label classes="text-base" forName="payment">
                          Payment method
                        </Label>
                      ) : (
                        <Label classes="text-base" forName="payment">
                          Cryptocurrency
                        </Label>
                      )}
                    </th>
                    <th className="w-1/3"></th>
                    <th className="w-1/3">
                      {buyingCrypto ? (
                        <Label classes="text-base" forName="payment">
                          Cryptocurrency
                        </Label>
                      ) : (
                        <Label classes="text-base" forName="payment">
                          Payment method
                        </Label>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {buyingCrypto ? (
                      <td className="pb-10">
                        <div className="p-2 w-32 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color text-black my-0 mx-auto">
                          <p className="text-center">{selectedPayment.name}</p>
                        </div>
                      </td>
                    ) : (
                      <td className="pb-10">
                        <div className="flex justify-between p-2 w-32 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color my-0 mx-auto">
                          <Image
                            src={selectedCrypto.icon}
                            width={20}
                            height={20}
                            layout="fixed"
                            alt="Asset icon"
                          />
                          <p className="text-center">{selectedCrypto.name}</p>
                        </div>
                      </td>
                    )}
                    <td></td>
                    {buyingCrypto ? (
                      <td className="pb-10">
                        <div className="flex justify-between p-2 w-32 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color text-black my-0 mx-auto">
                          <Image
                            src={selectedCrypto.icon}
                            width={20}
                            height={20}
                            layout="fixed"
                            alt="Asset icon"
                          />
                          <p className="text-center">{selectedCrypto.name}</p>
                        </div>
                      </td>
                    ) : (
                      <td className="pb-10">
                        <div className="p-2 w-32 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color my-0 mx-auto">
                          <p className="text-center">{selectedPayment.name}</p>
                        </div>
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InputField
                        id="payment"
                        type="number"
                        placeholder="0.00"
                        classes="w-48 bg-gray-50"
                        step=".01"
                        min="0"
                        onInput={(e) => {
                          if (e.target.value == "") {
                            setReceivedAmount("0.00");
                          } else {
                            setReceivedAmount(parseInt(e.target.value) * 8);
                          }
                          setInsertAmount(e.target.value);
                        }}
                      />
                    </td>
                    <td>
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
                    <td className="text-center">
                      <InputField
                        id="crypto"
                        placeholder="0.00"
                        classes="w-48 bg-gray-200"
                        disable={true}
                        value={receivedAmount}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {activeStep == 3 ? (
        <section className="flex flex-wrap items-center justify-evenly">
          <div className="mt-10 w-full h-40 max-w-2xl" ref={confettiRef}>
            <div className="flex justify-between content-center">
              <table className="w-full border-separate">
                <thead>
                  <tr>
                    <th className="pb-8 w-1/3">
                      {buyingCrypto ? (
                        <div className="p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color float-right">
                          <p className="text-center">${receivedAmount}</p>
                        </div>
                      ) : (
                        <div className="flex justify-between p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color float-right">
                          <Image
                            src={selectedCrypto.icon}
                            width={25}
                            height={22}
                            layout="fixed"
                            alt="Asset icon"
                          />
                          <p className="mr-2">{insertAmount}</p>
                        </div>
                      )}
                    </th>
                    <th className="pb-8 w-1/3">
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
                    </th>
                    <th className="pb-8 w-1/3">
                      {buyingCrypto ? (
                        <div className="flex justify-between p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color">
                          <Image
                            src={selectedCrypto.icon}
                            width={25}
                            height={22}
                            layout="fixed"
                            alt="Asset icon"
                          />
                          <p className="mr-2">{insertAmount}</p>
                        </div>
                      ) : (
                        <div className="p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color">
                          <p className="text-center">${receivedAmount}</p>
                        </div>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {["Transaction number", "Approval number", "Time"].map(
                      (element, index) => {
                        return (
                          <td key={index} className="text-center">
                            <Label classes="text-base">{element}</Label>
                          </td>
                        );
                      }
                    )}
                  </tr>

                  <tr>
                    {[
                      "15fss148saxf",
                      "ssw33gghs2342a",
                      "04.01.2022. 16:35:43",
                    ].map((element, index) => {
                      return <td className="text-center">{element}</td>;
                    })}
                  </tr>
                </tbody>
                <Confetti
                  recycle={false}
                  numberOfPieces={200}
                  width={widthh}
                  height={heightt}
                />
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <div className="text-center">
        {activeStep == 2 ? (
          <>
            <Button
              onClick={() => {
                setActiveStep(1);
              }}
              type="filled"
              classes="mt-6 mr-2"
            >
              Back
            </Button>{" "}
            <Button
              onClick={() => {
                isTrading();
              }}
              type="filled"
              classes="mt-6 ml-2 relative"
            >
              <span className={`${trading ? "invisible" : ""}`}>Trade</span>{" "}
              {trading && (
                <Spinner
                  width={"0.875rem"}
                  height={"0.875rem"}
                  color="#ffffff"
                  classes="absolute top-[0.5625rem] left-[calc(50%-0.4375rem)]"
                />
              )}
            </Button>
          </>
        ) : activeStep == 1 ? (
          <Button type="filled" classes="mt-6" onClick={() => setActiveStep(2)}>
            Next
          </Button>
        ) : (
          <Button
            type="filled"
            classes="mt-6"
            onClick={() => router.push("/account")}
          >
            Go to account
          </Button>
        )}
      </div>
    </>
  );
};

Trade.needsAuthentication = false;

export default Trade;
