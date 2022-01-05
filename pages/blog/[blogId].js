import Image from "next/image";
import whatsAppIcon from "../../assets/whatsapp.png";
import gmailIcon from "../../assets/gmail.png";
import viberIcon from "../../assets/viber.png";
import mockArticleImage from "../../assets/mock_article.png";
import { Avatar } from "../../components";

const Blog = () => {
  console.log(mockArticleImage);
  return (
    <>
      <section className="mt-16">
        <article className="max-w-screen-lg mx-auto">
          <h4 className="text-font-color-light font-bold">15. Nov 2021</h4>
          <h1 className="my-5 text-5xl text-font-color font-extrabold ">
            Lorem ipsum naslov bloga u dva red ili cak tri lorem
          </h1>
          <hr className="w-[200px] border-b-primary-color border-b-[2px] border-solid" />
          <div className="flex items-center flex-wrap">
            <Avatar reverse={true} firstLetter="A" textContent="Ante Tomić" />
            <div className="flex items-center justify-end flex-grow">
              <div className="p-2 m-2 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center bg-font-color-light hover:cursor-pointer">
                <Image
                  src={whatsAppIcon}
                  layout="fixed"
                  width={30}
                  height={30}
                  alt="Whatsapp icon"
                />
              </div>
              <div className="p-2 m-2 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center bg-font-color-light hover:cursor-pointer">
                <Image
                  src={gmailIcon}
                  layout="fixed"
                  width={30}
                  height={30}
                  alt="Gmail icon"
                />
              </div>
              <div className="p-2 m-2 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center bg-font-color-light hover:cursor-pointer">
                <Image
                  src={viberIcon}
                  layout="fixed"
                  width={30}
                  height={30}
                  alt="Viber icon"
                />
              </div>
            </div>
          </div>
          <div className="mt-[5px] flex justify-end">
            <hr className="w-[200px] border-b-primary-color border-b-[2px] border-solid" />
          </div>
          <section id="article_body" className="mt-10 text-lg">
            <div className={`mx-auto w-full max-w-screen-lg`}>
              <Image
                src={mockArticleImage}
                layout="responsive"
                objectFit="cover"
                alt="Article cover image"
              />
            </div>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at
              sit id ac neque integer potenti elit, quam. Mi, duis leo viverra
              proin metus odio. Aliquet pretium pharetra amet habitant arcu
              sollicitudin odio. Egestas nunc sit nisl faucibus quam duis.
              Interdum velit sagittis, urna venenatis tristique posuere aliquam
            </p>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at
              sit id ac neque integer potenti elit, quam. Mi, duis leo viverra
              proin metus odio. Aliquet pretium pharetra amet habitant arcu
              sollicitudin odio. Egestas nunc sit nisl faucibus quam duis.
              Interdum velit sagittis, urna venenatis tristique posuere aliquam
            </p>
            <h2 className="text-3xl font-bold my-5">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
            </h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus at
              sit id ac neque integer potenti elit, quam. Mi, duis leo viverra
              proin metus odio. Aliquet pretium pharetra amet habitant arcu
              sollicitudin odio. Egestas nunc sit nisl faucibus quam duis.
              Interdum velit sagittis, urna venenatis tristique posuere aliquam
            </p>
          </section>
        </article>
      </section>
    </>
  );
};

export default Blog;
