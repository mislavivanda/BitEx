import { Button } from "../../components";
import Image from "next/image";
import { useRouter } from "next/router";

const CryptoCard = ({ icon, title, description, slug }) => {
  const router = useRouter();

  return (
    <div className="flex h-full py-10 px-4">
      <div className="mr-5">
        <Image src={icon} layout="fixed" height={80} width={80} />
      </div>
      <div className="flex flex-col h-full">
        <h2 className="text-3xl text-font-color-dark font-bold">{title}</h2>
        <div className="flex flex-col justify-between flex-grow">
          <p className="text-lg text-font-color">{description}</p>
          <div>
            <Button
              onClick={() => router.push(`/cryptooffer/${slug}`)}
              type="filled"
              classes="mt-5"
            >
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
