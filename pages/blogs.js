import Footer from "../modules/footer";
import Header from "../modules/header";
import { BlogsSection } from "../components";

const Blogs = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="pt-5 pb-20 sm:pb-15 px-5 sm:px-10 md:px-12 lg:px-14 mt-16 text-font-color-dark">
        <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
          Our blogs:
        </h1>
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
