import { useState } from "react";
import Image from "next/image";
import { Button } from "../index";
import { useRouter } from "next/router";

const blogPageSize = 5;

const BlogsSection = ({ type, blogsData }) => {
  const router = useRouter();

  const [currentBlogsPage, setCurrentBlogsPage] = useState(1); //kontrola paginacije blogova klikom na load more
  const [showBlogs, setShowBlogs] = useState(blogsData.slice(0, blogPageSize));

  const loadMoreBlogs = () => {
    setShowBlogs(blogsData.slice(0, (currentBlogsPage + 1) * blogPageSize)); //slice ce vratit manje ako je manje
    setCurrentBlogsPage(currentBlogsPage + 1);
  };

  return (
    <section className="w-full mt-10 py-5 flex flex-col items-center">
      {type === "homepage" ? (
        <h1 className="text-5xl font-extrabold  px-5 sm:px-10 w-full max-w-screen-xl text-left">
          Latest news:
        </h1>
      ) : null}
      {showBlogs.map((blog, index) => (
        <article
          key={index}
          className="max-w-screen-lg shadow-xl rounded-md my-5 sm:my-10 sm:pr-10 w-full flex flex-col justify-center sm:flex-row sm:items-center sm:h-96 lg:h-[20rem] hover:cursor-pointer hover:scale-105 sm:hover:scale-[1.02] transition-all duration-500 ease-in-out"
          onClick={() => router.push(`/blog/${blog.slug}`)}
        >
          <div className="relative h-60 sm:basis-2/4 flex-shrink-0 sm:h-full">
            <Image
              src={blog.blogPictureUrl}
              layout="fill"
              objectFit="cover"
              alt="Article picture"
            />
          </div>
          <div className="sm:pl-5 sm:basis-0 flex-grow flex flex-col h-full overflow-hidden">
            <h4 className="text-font-color-light font-bold">{blog.date}</h4>
            <h2 className="py-1 sm:py-3 font-extrabold text-3xl">
              {blog.title}
            </h2>
            <div className="hidden sm:block flex-grow break-words text-xl">
              {blog.description}
            </div>
            {/*dont show on small screens */}
          </div>
        </article>
      ))}
      {type === "homepage" ? (
        <>
          <h3>Haven&apos;t had enough?</h3>
          <Button
            onClick={() => router.push("/blog")}
            type="filled"
            classes="mt-5"
          >
            Load more
          </Button>
        </>
      ) : (
        <>
          {currentBlogsPage * blogPageSize < blogsData.length ? (
            <>
              <h3>Haven&apos;t had enough?</h3>
              <Button
                onClick={() => loadMoreBlogs()}
                type="filled"
                classes="mt-5"
              >
                Load more
              </Button>
            </>
          ) : null}
        </>
      )}
    </section>
  );
};

export default BlogsSection;
