import { mockCryptoOffer } from "../mockData";
import CryptoCard from "../modules/cryptoCard";
import { Button } from "../components";
import { getCryptoOffer } from "../lib/dataSource";

const CryptoOffer = ({ cryptoOfferData }) => {
  return (
    <>
      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        Crypto offer
      </h1>
      <section className="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-around justify-evenly">
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
    </>
  );
};

export default CryptoOffer;

export async function getStaticProps() {
  const cryptoOfferData = await getCryptoOffer(); //ime propertija se podudara s IMENOM KOJIM JE DEFINIRAN FILE SA [], A TO JE [slug]

  return {
    props: {
      cryptoOfferData,
    },
  };
}
