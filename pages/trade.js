import { useState } from "react";
import { Label, Button, Stepper, Popup, InputField } from "../components";
import BTCLogo from "../assets/BTC_logo.png";
import Image from "next/image";
import { mockCryptoOffer } from "../mockData";

const Trade = () => {
  const [paymentModal, setPaymentModal] = useState(false);
  const [cryptoModal, setCryptoModal] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(mockCryptoOffer[0]);
  const [activeStep, setActiveStep] = useState(1);
  const [searchedCryptos, setSearchedCryptos] = useState("");

  const trade = () => {
    activeStep == 1 ? setActiveStep(2) : setActiveStep(1);
  };

  return (
    <>
      {/* MODAL */}
      <Popup isOpen={paymentModal} closeModal={setPaymentModal}>
        <Label classes="text-base">Select payment type</Label>
        <div className="grid grid-cols-1 gap-4 border-gray-900 sm:grid-cols-2 md:grid-cols-4 mt-8">
          {[BTCLogo, BTCLogo, BTCLogo, BTCLogo, BTCLogo].map(
            (element, index) => {
              return (
                <Image
                  src={element}
                  key={index}
                  width={100}
                  height={100}
                  layout="fixed"
                  alt="Asset icon"
                />
              );
            }
          )}
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
                <div>
                  <Image
                    onClick={() => {
                      setSelectedCrypto(element);
                      setSearchedCryptos("");
                      setCryptoModal(false);
                    }}
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

      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        Trade
      </h1>
      <Stepper
        classes="mt-6 mx-auto w-full md:max-w-screen-md"
        activeStep={activeStep}
        stepLabels={[
          "Select pay method and crypto",
          "Select crypto amount",
          "Finish",
        ]}
      />
      {activeStep == 1 ? (
        <section className="flex flex-wrap items-center justify-evenly">
          <div className="mt-10 w-full h-40 max-w-2xl">
            <div className="flex justify-between content-center">
              <table className="w-full border-separate">
                <thead>
                  <tr>
                    <th>
                      <Label classes="text-base" forName="payment">
                        Select payment method
                      </Label>
                    </th>
                    <th>
                      <Label classes="text-base" forName="payment">
                        Select cryptocurrency
                      </Label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <Image
                        onClick={() => {
                          setPaymentModal(true);
                        }}
                        src={BTCLogo}
                        width={100}
                        height={100}
                        layout="fixed"
                        alt="Asset icon"
                      />
                      <Label forName="text">Wallet</Label>
                    </td>
                    <td className="text-center">
                      <Image
                        onClick={() => {
                          setCryptoModal(true);
                        }}
                        src={selectedCrypto.icon}
                        width={100}
                        height={100}
                        layout="fixed"
                        alt="Asset icon"
                      />
                      <Label forName="text">{selectedCrypto.name}</Label>
                    </td>
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
                    <th>
                      <Label classes="text-base" forName="payment">
                        Payment method
                      </Label>
                    </th>
                    <th></th>
                    <th>
                      <Label classes="text-base" forName="payment">
                        Cryptocurrency
                      </Label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pb-10">
                      <div className="p-2 w-32 h-10 bg-slate-400 rounded-3xl text-white my-0 mx-auto">
                        <p className="text-center">SEPA Transfer</p>
                      </div>
                    </td>
                    <td></td>
                    <td className="pb-10">
                      <div className="flex justify-between p-2 w-32 h-10 bg-slate-400 rounded-3xl text-white my-0 mx-auto">
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
                  </tr>
                  <tr>
                    <td className="text-center">
                      <InputField
                        id="payment"
                        type="text"
                        placeholder="0.0"
                        classes="w-40"
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
                        type="text"
                        placeholder="0.0"
                        classes="w-40"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <div className="text-center">
        <Button type="filled" classes="mt-6" onClick={trade}>
          Trade
        </Button>
      </div>
    </>
  );
};

export default Trade;
