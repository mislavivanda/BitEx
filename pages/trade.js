import { useState, useRef, useEffect } from "react";
import {
  Label,
  Button,
  Stepper,
  Popup,
  InputField,
  Spinner,
} from "../components";
import { parseDate } from "../helpers";
import Image from "next/image";
import { useRouter } from "next/router";
import Confetti from "react-confetti";
import Bi from "../assets/bidirectional-arrow.png";
import {
  getPaymentOptions,
  getCreditCards,
  getCryptoOffer,
} from "../lib/dataSource";

const Trade = ({ paymentOptions, creditCards, cryptoOffer }) => {
  const router = useRouter();

  const [paymentModal, setPaymentModal] = useState(false);
  const [cryptoModal, setCryptoModal] = useState(false);
  const [creditCardModal, setCreditCardModal] = useState(false);
  const [currentCreditCard, setCurrentCreditCard] = useState(null);
  //gledamo jesmo li dobili parametar koji coin po defaultu odabrat ako smo stisli trade now
  const [selectedCrypto, setSelectedCrypto] = useState(
    router.query.linkedCrypto
      ? cryptoOffer.find((crypto) => crypto.slug === router.query.linkedCrypto)
      : cryptoOffer[0]
  );
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0]);
  const [activeStep, setActiveStep] = useState(1);
  const [searchedCryptos, setSearchedCryptos] = useState("");
  const [buyingCrypto, setBuyingCrypto] = useState(true);
  const [receivedAmount, setReceivedAmount] = useState("0.00");
  const [insertAmount, setInsertAmount] = useState("0.00");
  const [trading, setTrading] = useState(false);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const confettiRef = useRef(null);

  const isTrading = () => {
    if (insertAmount !== "0.00" && receivedAmount !== "0.00") {
      setTrading(true);
      setTimeout(() => {
        setTrading(false);
        setActiveStep(4);
      }, 2000);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth - 50);
    setHeight(window.innerHeight - 50);
  }, []);

  return (
    <>
      {/* MODAL - PLACANJE*/}
      <Popup isOpen={paymentModal} closeModal={setPaymentModal}>
        <Label classes="text-base">Select payment type</Label>
        <div className="md:grid md:grid-cols-4 md:gap-6 mt-6">
          {paymentOptions.map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (element.name == "Credit card") {
                    setCreditCardModal(true);
                  } else {
                    setPaymentModal(false);
                    setSelectedPayment(element);
                  }
                }}
                className="hover:cursor-pointer"
              >
                <div className="text-center">
                  <Image
                    src={element.iconUrl}
                    width={100}
                    height={100}
                    layout="fixed"
                    alt="Asset icon"
                  />
                </div>
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
        <Label classes="text-base">Select cryptocurrency</Label>
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
        <div className="mt-5 overflow-y-auto max-h-[50vh] grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cryptoOffer
            .filter((element) =>
              element.name.toLowerCase().includes(searchedCryptos)
            )
            .map((element, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCrypto(element);
                    setSearchedCryptos("");
                    setCryptoModal(false);
                  }}
                  className="hover:cursor-pointer justify-center"
                >
                  <div className="text-center mt-2">
                    <Image
                      src={element.iconPictureUrl}
                      width={100}
                      height={100}
                      layout="fixed"
                      alt="Asset icon"
                    />
                  </div>
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
        {creditCards.map((card, index) => (
          <div
            key={index}
            className="mb-2 pr-2 flex items-center border-primary-color border-[2px] border-solid rounded-[3px] hover:cursor-pointer hover:scale-105 sm:hover:scale-[1.02] transition-all duration-300 ease-in-out"
            onClick={() => {
              setPaymentModal(false);
              setCurrentCreditCard(creditCards[index]);
              setCreditCardModal(false);
              setSelectedPayment(paymentOptions[1]);
            }}
          >
            <div className="relative w-[60px] h-[40px]">
              <Image
                layout="fill"
                alt="credit card provider logo"
                src={card.iconUrl}
              />
            </div>
            <div className="ml-2 flex-grow text-center text-md font-extrabold text-font-color-dark">
              {card.cardNumber}
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
                          src={selectedPayment.iconUrl}
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
                          src={selectedCrypto.iconPictureUrl}
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
                      <div className="text-center">
                        <Image src={Bi} width={50} height={50} />
                      </div>
                    </td>
                    {buyingCrypto ? (
                      <td
                        onClick={() => {
                          setCryptoModal(true);
                        }}
                        className="text-center hover:cursor-pointer"
                      >
                        <Image
                          src={selectedCrypto.iconPictureUrl}
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
                          src={selectedPayment.iconUrl}
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
                        <div className="flex justify-center p-2 w-32 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color my-0 mx-auto">
                          <Image
                            src={selectedCrypto.iconPictureUrl}
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
                        <div className="flex justify-center p-2 w-32 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color text-black my-0 mx-auto">
                          <Image
                            src={selectedCrypto.iconPictureUrl}
                            width={20}
                            height={20}
                            layout="fixed"
                            alt="Asset icon"
                          />
                          <p className="text-center ml-2">
                            {selectedCrypto.name}
                          </p>
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
                        classes="md:w-48 w-26 bg-gray-50"
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
                        classes="md:w-48 w-26 bg-gray-200"
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

      {activeStep == 4 ? (
        <section className="flex flex-wrap items-center justify-evenly">
          <div className="mt-10 w-full h-40 max-w-2xl" ref={confettiRef}>
            <div className="w-full items-center">
              <div className="w-full flex justify-evenly items-center">
                <div className="pb-8 w-1/3">
                  {buyingCrypto ? (
                    <div className="p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color float-right">
                      <p className="text-center">${insertAmount}</p>
                    </div>
                  ) : (
                    <div className="flex justify-between p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color float-right">
                      <Image
                        src={selectedCrypto.iconPictureUrl}
                        width={25}
                        height={22}
                        layout="fixed"
                        alt="Asset icon"
                      />
                      <p className="mr-2">{insertAmount}</p>
                    </div>
                  )}
                </div>
                <div className="pb-8 w-1/3">
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
                </div>
                <div className="pb-8 w-1/3">
                  {buyingCrypto ? (
                    <div className="flex justify-between p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color">
                      <Image
                        src={selectedCrypto.iconPictureUrl}
                        width={25}
                        height={22}
                        layout="fixed"
                        alt="Asset icon"
                      />
                      <p className="mr-2">{receivedAmount}</p>
                    </div>
                  ) : (
                    <div className="p-2 w-24 h-10 bg-violet-100 rounded-3xl border-2 border-primary-color">
                      <p className="text-center">${receivedAmount}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="overflow-x-auto w-full">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-center align-bottom whitespace-nowrap p-3 border-b-[3px] border-solid border-b-hover-select">
                        Transaction number
                      </th>
                      <th className="text-center align-bottom whitespace-nowrap p-3 border-b-[3px] border-solid border-b-hover-select">
                        Approval number
                      </th>
                      <th className="text-center align-bottom whitespace-nowrap p-3 border-b-[3px] border-solid border-b-hover-select">
                        Time
                      </th>
                      <th className="text-center align-bottom whitespace-nowrap p-3 border-b-[3px] border-solid border-b-hover-select">
                        Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {[
                        "15fss148saxf",
                        "ssw33gghs2342a",
                        parseDate(new Date()),
                        "$7.48",
                      ].map((element, index) => {
                        return (
                          <td
                            key={index}
                            className={`text-center align-bottom whitespace-nowrap p-3 border-t-[1px] border-solid border-t-hover-select ${
                              index === 3 ? "font-bold" : ""
                            }`}
                          >
                            {element}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
              <Confetti
                recycle={false}
                numberOfPieces={200}
                width={width}
                height={height}
              />
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
                setReceivedAmount("0.00");
                setInsertAmount("0.00");
              }}
              type="filled"
              classes="mt-8 mr-2"
            >
              Back
            </Button>{" "}
            <Button
              onClick={() => {
                isTrading();
              }}
              type="filled"
              classes="mt-8 ml-2 relative"
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
          <Button type="filled" classes="mt-8" onClick={() => setActiveStep(2)}>
            Next
          </Button>
        ) : (
          <>
            <Button
              type="filled"
              classes="mt-8"
              onClick={() =>
                router.push(
                  {
                    pathname: "/account",
                    query: {
                      activeTab: 1,
                    },
                  },
                  "/account"
                )
              }
            >
              See trades
            </Button>
            <Button
              type="filled"
              classes="mt-8 ml-5"
              onClick={() => {
                setActiveStep(1);
                setReceivedAmount("0.00");
                setInsertAmount("0.00");
              }}
            >
              New trade
            </Button>
          </>
        )}
      </div>
    </>
  );
};

Trade.needsAuthentication = true;

export default Trade;

export async function getStaticProps() {
  const cryptoOffer = await getCryptoOffer(); //ime propertija se podudara s IMENOM KOJIM JE DEFINIRAN FILE SA [], A TO JE [slug]

  const creditCards = await getCreditCards();

  const paymentOptions = await getPaymentOptions();

  return {
    props: {
      paymentOptions,
      creditCards,
      cryptoOffer,
    },
  };
}
