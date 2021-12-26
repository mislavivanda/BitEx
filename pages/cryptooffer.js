import Footer from "../modules/footer";
import Header from "../modules/header";
import { mockCryptoOffer } from "../mockData";
import CryptoCard from "../modules/cryptoCard";
import { Button } from "../components";

const CryptoOffer = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="pt-5 pb-20 sm:pb-15 px-5 sm:px-10 md:px-12 lg:px-14 mt-16 text-font-color-dark">
        <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
          Our blogs:
        </h1>
        <section className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-around justify-evenly">
          {mockCryptoOffer.map((crypto) => (
            <CryptoCard
              key={crypto.name}
              icon={crypto.icon}
              title={crypto.name}
              description={crypto.description}
            />
          ))}
        </section>
        <section className="mt-10 flex flex-col justify-center items-center">
          <h3>Haven't had enough?</h3>
          <Button
            onClick={() => console.log("Load more clicked")}
            type="filled"
            classes="mt-5"
          >
            Load more
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CryptoOffer;
