import Image from "next/image";
import whatsApp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.png";
import viber from "../assets/viber.png";
import { Label } from "../components";

const Contact = () => {
  return (
    <>
      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        Contact
      </h1>
      <section className="mt-10 flex flex-wrap items-center justify-evenly">
        <div className="text-center w-full max-w-2xl ">
          <table className="w-full border-separate">
            <tr>
              <td className="pb-10">
                <Label classes="text-base">Contact us through Whats App</Label>
              </td>
              <td className="pb-10">
                <Image
                  src={whatsApp}
                  width={100}
                  height={100}
                  layout="fixed"
                  alt="Whatsapp icon"
                />
              </td>
            </tr>
            <tr>
              <td className="pb-10">
                <Image
                  src={gmail}
                  width={100}
                  height={100}
                  layout="fixed"
                  alt="Whatsapp icon"
                />
              </td>
              <td className="pb-10">
                <Label classes="text-base">
                  Or if you prefer something more formal, email.
                </Label>
              </td>
            </tr>
            <tr>
              <td className="pb-10">
                <Label classes="text-base">And there's Viber of course.</Label>
              </td>
              <td className="pb-10">
                <Image
                  src={viber}
                  width={100}
                  height={100}
                  layout="fixed"
                  alt="Whatsapp icon"
                />
              </td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default Contact;
