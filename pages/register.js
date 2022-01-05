import { Button, InputField, Label } from "../components";
import { useState, useEffect } from "react";

const Register = () => {
  const onRegister = (e) => {
    e.preventDefault();
    console.log("register");
  };

  const [mounted, setMounted] = useState(false); //za pokretanje animacije svaki put kad se ude na login

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <h1 className="inline text-5xl font-extrabold  mx-5 sm:mx-10 text-left border-b-primary-color border-b-[5px] border-solid">
        Register
      </h1>
      <h3 className="mt-8 text-xl mx-5 sm:mx-10 max-w-[300px] text-left">
        Trade instantly with your favorite cryptocurrency. Sign up, deposit and
        trade some crypto!
      </h3>
      <section className="mt-10 flex flex-wrap items-center justify-evenly">
        <div
          className={`w-full max-w-xs shadow-xl fixed mx-auto top-[calc(100vh+14.25rem)] ${
            mounted ? "-translate-y-[100vh]" : ""
          } transition-transform duration-1000 ease-in-out`}
        >
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <Label forName="username">Name</Label>
              <InputField id="username" type="text" placeholder="Name" />
            </div>
            <div className="mb-6">
              <Label forName="email">E-mail</Label>
              <InputField id="email" type="text" placeholder="E-mail" />
            </div>
            <div className="mb-8">
              <Label forName="password">Password</Label>
              <InputField
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="filled" onClick={onRegister}>
                Register
              </Button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Have an account?
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
