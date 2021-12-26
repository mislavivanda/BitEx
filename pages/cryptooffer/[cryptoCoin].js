import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "../../modules/footer";
import Header from "../../modules/header";
import { Button } from "../../components";

import BinanceCoin from "../../assets/binance_coin_logo.png";

const CryptoCoinInfo = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="pt-5 pb-20 sm:pb-15 px-5 sm:px-10 md:px-12 lg:px-14 mt-16 text-font-color-dark">
        <section className="mt-16">
          <article className="hidden sm:flex max-w-screen-lg mx-auto">
            <div className="relative mr-5">
              <Image
                src={BinanceCoin}
                layout="fixed"
                height={100}
                width={100}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl text-font-color-dark font-bold">
                Binance
              </h1>
              <p className="text-lg text-font-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                bibendum vitae tellus dui elit. Sit tortor ipsum eu amet
                scelerisque sodales. Sit tortor ipsum eu amet scelerisque
                sodales. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Id bibendum vitae tellus dui elit. Sit tortor ipsum eu
                amet scelerisque sodales. Sit tortor ipsum eu amet scelerisque
                sodales. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Id bibendum vitae tellus dui elit. Sit tortor ipsum eu
                amet scelerisque sodales. Sit tortor ipsum eu amet scelerisque
                sodales. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Id bibendum vitae tellus dui elit. Sit tortor ipsum eu
                amet scelerisque sodales. Sit tortor ipsum eu amet scelerisque
                sodales. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Id bibendum vitae tellus dui elit. Sit tortor ipsum eu
                amet scelerisque sodales. Sit tortor ipsum eu amet scelerisque
                sodales.
              </p>
              <div className="text-center">
                <Button
                  onClick={() => console.log("Load more clicked")}
                  type="filled"
                  classes="mt-5 text-xl"
                >
                  Trade now
                </Button>
              </div>
            </div>
          </article>
          <article className="sm:hidden flex flex-col items-center">
            <div className="relative">
              <Image
                src={BinanceCoin}
                layout="fixed"
                height={100}
                width={100}
              />
            </div>
            <h1 className="mt-4 text-4xl text-font-color-dark font-bold">
              Binance
            </h1>
            <p className="mt-4 text-lg text-font-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              bibendum vitae tellus dui elit. Sit tortor ipsum eu amet
              scelerisque sodales. Sit tortor ipsum eu amet scelerisque sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              bibendum vitae tellus dui elit. Sit tortor ipsum eu amet
              scelerisque sodales. Sit tortor ipsum eu amet scelerisque sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              bibendum vitae tellus dui elit. Sit tortor ipsum eu amet
              scelerisque sodales. Sit tortor ipsum eu amet scelerisque sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              bibendum vitae tellus dui elit. Sit tortor ipsum eu amet
              scelerisque sodales. Sit tortor ipsum eu amet scelerisque sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              bibendum vitae tellus dui elit. Sit tortor ipsum eu amet
              scelerisque sodales. Sit tortor ipsum eu amet scelerisque sodales.
            </p>
            <div className="mt-4 mb-4 text-center">
              <Button
                onClick={() => console.log("Load more clicked")}
                type="filled"
                classes="mt-5 text-xl"
              >
                Trade now
              </Button>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CryptoCoinInfo;
