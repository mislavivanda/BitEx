import { BlogsSection } from "../components";
import { getBlogPosts } from "../lib/dataSource";

const Blogs = ({ blogsData }) => {
  return (
    <>
      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        Our blogs:
      </h1>
      <BlogsSection blogsData={blogsData} />
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogsData = await getBlogPosts();

  return {
    props: {
      blogsData,
    },
  };
}
