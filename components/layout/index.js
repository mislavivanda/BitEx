import Header from "../../modules/header";
import Footer from "../../modules/footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  console.log("Laxout rendered");
  const router = useRouter();

  console.log(router.pathname.split("/")[1]);
  return (
    <div className="flex flex-col min-h-full">
      {router.pathname.split("/")[1] !== "login" &&
        router.pathname.split("/")[1] !== "register" && <Header />}
      <main className="flex-grow pt-5 pb-20 sm:pb-15 px-5 sm:px-10 md:px-12 lg:px-14 mt-24 text-font-color-dark">
        {children}
      </main>
      {<Footer />}
    </div>
  );
};

export default Layout;
