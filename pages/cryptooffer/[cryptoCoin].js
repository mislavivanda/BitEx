import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "../../components";
import { getCryptoSlugs, getCryptoCoin } from "../../lib/dataSource";

const CryptoCoinInfo = ({ cryptoCoinData }) => {
  const router = useRouter();

  return (
    <>
      <section className="mt-16">
        <article className="hidden sm:flex max-w-screen-lg mx-auto">
          <div className="mr-5">
            <Image
              src={cryptoCoinData.iconPictureUrl}
              layout="fixed"
              height={100}
              width={100}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-font-color-dark font-bold">
              {cryptoCoinData.name}
            </h1>
            <p className="text-lg text-font-color">
              {cryptoCoinData.description}
            </p>
            <div className="text-center">
              <Button
                onClick={() =>
                  router.push(
                    {
                      pathname: "/trade",
                      query: {
                        linkedCrypto: cryptoCoinData.slug,
                      },
                    },
                    "/trade"
                  )
                } //posalji state unutar pusha
                type="filled"
                classes="mt-5 text-xl"
              >
                Trade now
              </Button>
            </div>
          </div>
        </article>
        <article className="sm:hidden flex flex-col items-center">
          <div>
            <Image
              src={cryptoCoinData.iconPictureUrl}
              layout="fixed"
              height={100}
              width={100}
            />
          </div>
          <h1 className="mt-4 text-4xl text-font-color-dark font-bold">
            {cryptoCoinData.name}
          </h1>
          <p className="mt-4 text-lg text-font-color">
            {cryptoCoinData.description}
          </p>
          <div className="mt-4 mb-4 text-center">
            <Button
              onClick={() => router.push("/trade")}
              type="filled"
              classes="mt-5 text-xl"
            >
              Trade now
            </Button>
          </div>
        </article>
      </section>
    </>
  );
};

export default CryptoCoinInfo;

/*In development mode next dev, however, getStaticProps and getStaticPaths run on every request.  */

//SAMO U FILEOVIMA KOJI SU OBLIKA [IME]
export async function getStaticPaths() {
  //OVO SE POZIVA PRIJE getStaticProps
  //dobij slugove svih postova kroz helper poziv API-a
  const slugs = await getCryptoSlugs();

  const paths = slugs.map((cryptoSlug) => ({
    params: { cryptoCoin: cryptoSlug },
  }));

  return {
    paths: paths,
    fallback: false, //ovo definira ISKLJUCIVO STATICKO DEFINIRANJE
  };
}

export async function getStaticProps({ params }) {
  const cryptoCoinData = await getCryptoCoin(params.cryptoCoin); //ime propertija se podudara s IMENOM KOJIM JE DEFINIRAN FILE SA [], A TO JE [cryptoCoin]

  return {
    props: {
      cryptoCoinData,
    },
  };
}
