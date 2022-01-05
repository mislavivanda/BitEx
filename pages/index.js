import Image from "next/image";
import HomeImage from "../assets/home_image.png";
import LineChart from "../assets/line_chart_up.png";
import BarChart from "../assets/bar_chart.png";
import CreditCard from "../assets/credit_card.png";
import { Button, BlogsSection } from "../components";
import BinanceCoin from "../assets/binance_coin_logo.png";
import BTCCoin from "../assets/BTC_logo.png";
import DogeCoin from "../assets/doge_logo.png";
import ETHCoin from "../assets/ETH_logo.png";
import SolanaCoin from "../assets/solana_logo.png";

const Home = () => {
  return (
    <>
      <section className="flex flex-wrap items-center justify-evenly w-full ">
        <div className="flex-grow relative w-full h-[300px] max-w-lg">
          <Image
            src={HomeImage}
            layout="fill"
            objectFit="contain"
            alt="Home page logo"
          />
        </div>
        <div className="w-full max-w-lg sm:w-auto mt-10">
          <h1 className=" text-5xl font-extrabold">
            Welcome to <span className="text-primary-color">BitEx</span>
          </h1>
          <h3 className="font-light mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id bibendum
            vitae tellus dui elit. Sit tortor ipsum eu amet scelerisque sodales.
            Sit tortor ipsum eu amet scelerisque sodales.
          </h3>
          <Button
            type="filled"
            onClick={() => console.log("get started clicked")}
            classes="mt-[0.5rem]"
          >
            Get started
          </Button>
        </div>
      </section>
      <section className="w-full mt-10 py-5 text-center">
        <h1 className="text-5xl font-extrabold">Why use BitEx?</h1>
        <div className="mt-5 flex flex-wrap justify-evenly items-center">
          <div className="w-[100px] flex flex-col justify-center items-center">
            <Image
              src={LineChart}
              width={72}
              height={72}
              layout="fixed"
              alt="Line chart icon"
            />
            <h2 className="font-bold text-xl">Easy trading</h2>
          </div>
          <div className="w-[100px] flex flex-col justify-center items-center">
            <Image
              src={CreditCard}
              width={72}
              height={72}
              layout="fixed"
              alt="Credit card icon"
            />
            <h2 className="font-bold text-xl">Wallet integration</h2>
          </div>
          <div
            className="w-[100px] flex flex-col justify-center items-center"
            style={{ zIndex: -1 }}
          >
            <Image
              src={BarChart}
              width={72}
              height={72}
              layout="fixed"
              alt="Bar chart icon"
            />
            <h2 className="font-bold text-xl">Easy trading</h2>
          </div>
        </div>
      </section>
      <section className="w-full mt-10 py-5 text-center">
        <h1 className="text-5xl font-extrabold">Most traded crypto</h1>
        <div className="flex mt-5 overflow-x-auto items-center sm:justify-evenly">
          {[ETHCoin, SolanaCoin, BTCCoin, DogeCoin, BinanceCoin].map(
            (element, index) => (
              <div key={index} className="p-4 hover:cursor-pointer">
                <Image
                  src={element}
                  width={90}
                  height={90}
                  layout="fixed"
                  alt="Cryptocurrency logo"
                />
              </div>
            )
          )}
        </div>
      </section>
      <BlogsSection type="homepage" />
    </>
  );
};

export default Home;
