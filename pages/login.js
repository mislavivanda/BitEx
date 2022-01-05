import { Button, InputField, Label } from "../components";
import Link from "next/link";

const Login = () => {
  const onLogin = () => {
    console.log("login");
  };

  return (
    <>
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
                <Link href="/register">
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Register now!
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
