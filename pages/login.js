import { Button, InputField, Label, Spinner } from "../components";
import Link from "next/link";
import { useState, useEffect } from "react";

const Login = () => {
  const onLogin = (e) => {
    e.preventDefault();
    setLoginLoading(true);
  };

  const [mounted, setMounted] = useState(false); //za pokretanje animacije svaki put kad se ude na login
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 w-full max-w-screen-xl text-left border-b-primary-color border-b-[5px] border-solid">
        Login
      </h1>
      <section className="mt-10 flex flex-wrap items-center justify-evenly">
        <div
          className={`w-full max-w-xs shadow-xl fixed mx-auto top-[calc(100vh+14.25rem)] ${
            mounted ? "-translate-y-[100vh]" : ""
          } transition-transform duration-1000 ease-in-out`}
        >
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
              <Button type="filled" onClick={onLogin} classes="relative">
                <span className={`${loginLoading ? "invisible" : ""}`}>
                  Log in
                </span>{" "}
                {/* 0.5625 dobijemo kao 1rem(polovica visine botuna koji s padding i line height ima 2 rem ukupno) - polovica od visine spinnera jer na taj način centiramo apsolutne elemente po y osi */}
                {loginLoading && (
                  <Spinner
                    width={"0.875rem"}
                    height={"0.875rem"}
                    color="#ffffff"
                    classes="absolute top-[0.5625rem] left-[calc(50%-0.4375rem)]"
                  />
                )}
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
