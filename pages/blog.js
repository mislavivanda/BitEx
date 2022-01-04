import { BlogsSection } from "../components";

const Blogs = () => {
  return (
    <>
      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        Our blogs:
      </h1>
      <BlogsSection />
    </>
  );
};

export default Blogs;
