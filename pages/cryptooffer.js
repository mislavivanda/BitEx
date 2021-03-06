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
        {cryptoOfferData.map((crypto) => (
          <CryptoCard
            key={crypto.name}
            icon={crypto.iconPictureUrl}
            title={crypto.name}
            description={crypto.description}
            slug={crypto.slug}
          />
        ))}
      </section>
    </>
  );
};

export default CryptoOffer;

export async function getStaticProps() {
  const cryptoOfferData = await getCryptoOffer();

  return {
    props: {
      cryptoOfferData,
    },
  };
}
