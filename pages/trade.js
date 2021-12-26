import { useState } from "react";
import { Label, Button } from "../components";
import Header from "../modules/header";
import Footer from "../modules/footer";
import BTCLogo from "../assets/BTC_logo.png";
import Image from "next/image";

const Trade = () => {
  const [paymentMod, setPaymentMod] = useState("hidden");
  const [cryptoMod, setCryptoMod] = useState("hidden");

  const trade = () => {
    console.log("trade happened");
  };

  const paymentModal = () => {
    setPaymentMod((prev) => {
      return prev === "hidden" ? "block" : "hidden";
    });
  };

  const cryptoModal = () => {
    setCryptoMod((prev) => {
      return prev === "hidden" ? "block" : "hidden";
    });
  };

  return (
    <>
      <div className="relative min-h-screen">
        <Header />
        <main className="pt-5 pb-20 sm:pb-15 px-5 sm:px-10 md:px-12 lg:px-14 mt-24 text-font-color-dark">
          {/* MODAL */}
          <div
            id="modal"
            className={`${paymentMod} fixed top-0 left-0 z-10 h-full w-full overflow-auto bg-indigo-500 bg-opacity-75`}
          >
            <div
              id="modalContent"
              className="animate-[fade_0.5s_ease-in-out] bg-gray-200 mt-32 p-5 mx-auto w-1/2 rounded-3xl border-2 border-primary-color shadow-xl"
            >
              <span
                onClick={paymentModal}
                className="float-right text-lg hover:font-bold focus:font-bold no-underline cursor-pointer"
              >
                &times;
              </span>
              <Label classes="text-base">Select payment type</Label>
              <div className="grid grid-cols-1 gap-4 border-gray-900 sm:grid-cols-2 md:grid-cols-4 mt-8 ml-10">
                {[BTCLogo, BTCLogo, BTCLogo, BTCLogo, BTCLogo].map(
                  (element, index) => {
                    return (
                      <Image
                        src={element}
                        width={100}
                        height={100}
                        layout="fixed"
                        alt="Asset icon"
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* MODAL - KRIPTOVALUTE */}
          <div
            id="modal"
            className={`${cryptoMod} fixed top-0 left-0 z-10 h-full w-full overflow-auto bg-indigo-500 bg-opacity-75`}
          >
            <div
              id="modalContent"
              className="animate-[fade_0.5s_ease-in-out] bg-white mt-32 p-5 mx-auto w-1/2 rounded-3xl border-2 border-primary-color shadow-xl"
            >
              <span
                onClick={cryptoModal}
                className="float-right text-lg hover:font-bold focus:font-bold no-underline cursor-pointer"
              >
                &times;
              </span>
              <Label classes="text-base">Select payment type</Label>
              <div className="pt-2 flex justify-center text-gray-600">
                <input
                  className="w-[300px] border-2 border-gray-200 bg-white h-10 px-5 rounded-3xl text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mt-8 ml-10">
                {[
                  BTCLogo,
                  BTCLogo,
                  BTCLogo,
                  BTCLogo,
                  BTCLogo,
                  BTCLogo,
                  BTCLogo,
                  BTCLogo,
                ].map((element, index) => {
                  return (
                    <Image
                      src={element}
                      width={100}
                      height={100}
                      layout="fixed"
                      alt="Asset icon"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
            Trade
          </h1>
          <section className="mt-10 flex flex-wrap items-center justify-evenly">
            <div className="mt-10 w-full max-w-2xl">
              <div className="flex justify-between content-center">
                <table className="w-full border-separate">
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
                  <tr>
                    <td className="text-center">
                      <Image
                        onClick={paymentModal}
                        src={BTCLogo}
                        width={100}
                        height={100}
                        layout="fixed"
                        alt="Asset icon"
                      />
                    </td>
                    <td className="text-center">
                      <Image
                        onClick={cryptoModal}
                        src={BTCLogo}
                        width={100}
                        height={100}
                        layout="fixed"
                        alt="Asset icon"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="text-center">
                <Button type="filled" onClick={trade}>
                  Trade
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Trade;
