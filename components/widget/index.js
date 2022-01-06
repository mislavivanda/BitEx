import Image from "next/image";

const Widget = ({ color, icon, value, description, classes }) => {
  return (
    <article
      className={`w-72 p-6 flex flex-col items-center justify-evenly flex-nowrap flex-shrink-0 rounded-[1rem] shadow-xl ${classes}`}
      style={{ backgroundColor: color }}
    >
      <Image
        src={icon}
        height={80}
        width={80}
        layout="fixed"
        alt="Widget icon"
      />
      <div className="p-2 text-center">
        <p className="m-0 text-4xl font-bold">{value}</p>
        <p className="m-0 text-2xl">{description}</p>
      </div>
    </article>
  );
};

export default Widget;
