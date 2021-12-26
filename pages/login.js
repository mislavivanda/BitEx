import Footer from "../modules/footer";
import Header from "../modules/header";
import { Button, InputField, Label } from "../components";

const Login = () => {
  const onLogin = () => {
    console.log("login");
  };

  return (
    <>
      <div className="relative min-h-screen">
        <Header />
        <main className="pt-5 pb-20 sm:pb-15 px-5 sm:px-10 md:px-12 lg:px-14 mt-24 text-font-color-dark">
          <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
            Login
          </h1>
          <section className="mt-10 flex flex-wrap items-center justify-evenly">
            <div className="w-full max-w-xs">
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <Label forName="e-mail">E-mail</Label>
                  <InputField id="email" type="text" placeholder="E-mail" />
                </div>
                <div className="mb-6">
                  <Label forName="password">Password</Label>
                  <InputField
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Button type="filled" onClick={onLogin}>
                    Log in
                  </Button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="mt-6">
                  Don't have an account?
                  <div>
                    <a
                      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      href="#"
                    >
                      Register now!
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Login;
