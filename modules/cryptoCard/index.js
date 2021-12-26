import { Button } from "../../components";
import Image from "next/image";

const CryptoCard = ({ icon, title, description }) => {
  return (
    <div className="flex h-full">
      <div className="relative mr-5">
        <Image src={icon} layout="fixed" height={80} width={80} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl text-font-color-dark font-bold">{title}</h2>
        <p className="text-lg text-font-color">{description}</p>
        <Button
          onClick={() => console.log("Load more clicked")}
          type="filled"
          classes="mt-5"
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default CryptoCard;
