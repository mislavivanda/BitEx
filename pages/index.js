import Image from "next/image";
import HomeImage from "../assets/home_image.png";
import LineChart from "../assets/line_chart_up.png";
import BarChart from "../assets/bar_chart.png";
import CreditCard from "../assets/credit_card.png";
import { Button, BlogsSection } from "../components";
import { useRouter } from "next/router";
import { getBlogPosts, getCryptoOffer } from "../lib/dataSource";

const Home = ({ latestNews, mostTradedCryptos }) => {
  const router = useRouter();
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
          <h2 className="font-light mt-2 text-lg">
            BitEx is a cryptocurrency marketplace, unlike any other you&apos;ve
            seen before. Custom made to suit your trading needs, optimized for
            fast usage and clear data presentation, it will change the way you
            feel about crypto. You&apos;re welcome!
          </h2>
          <Button
            type="filled"
            onClick={() => router.push("/trade")}
            classes="mt-[0.5rem]"
          >
            Get started
          </Button>
        </div>
      </section>
      <section className="w-full mt-[3.75rem] py-5 text-center">
        <h1 className="text-5xl font-extrabold">Why use BitEx?</h1>
        <div className="mt-5 flex flex-col sm:flex-row sm:justify-evenly items-center">
          <div className="w-[100px] p-2 sm:p-0 flex flex-col justify-center items-center">
            <Image
              src={LineChart}
              width={72}
              height={72}
              layout="fixed"
              alt="Line chart icon"
            />
            <h2 className="font-bold text-xl">Easy trading</h2>
          </div>
          <div className="w-[100px] p-2 sm:p-0 flex flex-col justify-center items-center">
            <Image
              src={CreditCard}
              width={72}
              height={72}
              layout="fixed"
              alt="Credit card icon"
            />
            <h2 className="font-bold text-xl">Wallet integration</h2>
          </div>
          <div className="w-[100px] p-2 sm:p-0 flex flex-col justify-center items-center">
            <Image
              src={BarChart}
              width={72}
              height={72}
              layout="fixed"
              alt="Bar chart icon"
            />
            <h2 className="font-bold text-xl">Data analytics</h2>
          </div>
        </div>
      </section>
      <section className="w-full mt-10 py-5 text-center">
        <h1 className="text-5xl font-extrabold">Most traded crypto</h1>
        <div className="flex mt-5 overflow-x-auto items-center sm:justify-evenly">
          {mostTradedCryptos.map((crypto, index) => (
            <div
              key={index}
              className="p-4 hover:cursor-pointer"
              onClick={() => router.push(`/cryptooffer/${crypto.slug}`)}
            >
              <Image
                src={crypto.iconPictureUrl}
                width={90}
                height={90}
                layout="fixed"
                alt="Cryptocurrency logo"
              />
            </div>
          ))}
        </div>
      </section>
      <BlogsSection type="homepage" blogsData={latestNews} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const latestNews = await getBlogPosts(5);

  const mostTradedCrpytos = await getCryptoOffer(5);

  return {
    props: {
      latestNews: latestNews,
      mostTradedCryptos: mostTradedCrpytos,
    },
  };
}
