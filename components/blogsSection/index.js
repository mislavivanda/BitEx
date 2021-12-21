import Image from "next/image";
import { Button } from "../index";
import { mockArticles } from "../../mockData";
import ArticlePicture from "../../assets/mock_article.png";

const BlogsSection = ({ type }) => {
  return (
    <section className="w-full mt-10 py-5 flex flex-col items-center">
      {type === "homepage" ? (
        <h1 className="text-5xl font-extrabold  px-5 sm:px-10 w-full max-w-screen-xl text-left">
          Latest news:
        </h1>
      ) : null}
      {mockArticles.map((article, index) => (
        <article
          key={index}
          className="shadow-xl rounded-md my-5 sm:my-10 px-5 sm:px-10 w-full flex flex-col justify-center sm:flex-row sm:items-center sm:h-96 max-w-screen-xl hover:cursor-pointer hover:scale-105 sm:hover:scale-[1.02] transition-all duration-500 ease-in-out"
        >
          <div className="relative h-60 sm:basis-2/4 lg:basis-1/3 flex-shrink-0 sm:h-full">
            <Image
              src={ArticlePicture}
              layout="fill"
              objectFit="cover"
              alt="Article picture"
            />
          </div>
          <div className="sm:pl-5 basis:0 sm:basis-0 flex-grow flex flex-col h-full overflow-hidden">
            <h4 className="text-font-color-light font-bold">{article.date}</h4>
            <h2 className="py-1 sm:py-3 font-extrabold text-3xl">
              {article.title}
            </h2>
            <div className="hidden sm:block flex-grow break-words text-xl">
              {article.body}
            </div>
            {/*dont show on small screens */}
          </div>
        </article>
      ))}
      <h3>Haven't had enough?</h3>
      <Button
        onClick={() => console.log("Load more clicked")}
        type="filled"
        classes="mt-5"
      >
        Load more
      </Button>
    </section>
  );
};

export default BlogsSection;
