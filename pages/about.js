import Image from "next/image";
import LogoImage from "../assets/logo.png";
import CashRegister from "../assets/cash_register.png";
import GoldCoin from "../assets/gold_coin.png";
import PartyPeople from "../assets/party_people.png";

const About = () => {
  return (
    <>
      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        About us
      </h1>
      <section className="mx-auto mt-20 w-full max-w-screen-md flex flex-col items-center">
        <div className="flex items-center">
          <Image
            src={LogoImage}
            height={100}
            width={100}
            layout="fixed"
            alt="BitEx logo"
          />
          <span className="ml-1 text-primary-color text-5xl font-extrabold">
            BitEx
          </span>
        </div>
        <h2 className="text-lg text-font-color p-5">
          We are young software engineers turned crypto enthusiasts turned
          cryptocurrency traders who have made it their professional mission to
          easen your daily crypto trading! With seamless fiat transfers to your
          very own customizable account, you&apos;ll get to our lightning speed
          trade section. Thank us later.
        </h2>
      </section>
      <section className="mx-auto mt-10 w-full max-w-screen-md">
        <div className="p-5 flex items-center justify-around flex-wrap">
          <h2 className="p-5 text-lg text-font-color flex-grow max-w-[200px] font-bold">
            Select payment method whether it is a credit card or SEPA transfer.
          </h2>
          <Image
            src={CashRegister}
            height={250}
            width={250}
            layout="fixed"
            alt="Cash register"
          />
        </div>
        <div className="p-5 flex items-center justify-around flex-wrap-reverse">
          <Image
            src={GoldCoin}
            height={250}
            width={250}
            layout="fixed"
            alt="Gold coin"
          />
          <h2 className="p-5 text-lg text-font-color flex-grow max-w-[200px] font-bold">
            Select crypto you want to buy from a various range of cryptocurrency
            we have on shelves.
          </h2>
        </div>
        <div className="p-5 flex items-center justify-around flex-wrap">
          <h2 className="p-5 text-lg text-font-color flex-grow max-w-[200px] font-bold">
            After you complete your purchase you are free to celebrate!
          </h2>
          <Image
            src={PartyPeople}
            height={250}
            width={250}
            layout="fixed"
            alt="Party people"
          />
        </div>
      </section>
    </>
  );
};

export default About;
