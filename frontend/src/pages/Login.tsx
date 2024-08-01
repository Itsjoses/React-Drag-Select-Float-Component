import { PiHandWaving } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/AuthContext";
import { apiLogin } from "../api/auth";
import DynamicLayout from "../layouts/DynamicLayout";
import Middleware from "../libs/MiddlewareLibs";
import { setToken } from "../libs/AuthLibs";
import Header from "../layouts/header";
export default function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const responseData: any = await apiLogin(data)
    responseData
    setUser(responseData.data.username);
    setToken(responseData.data, navigate);
  };

  return (
    <Middleware.Guest>

    <div className="h-screen max-w-screen">
      <Header/>
      <div className=" w-full flex justify-center items-center mt-20">
        <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-5/12 xl:w-3/12 flex flex-col gap-6">
          <p className="text-5xl tracking-widest">Login</p>
          <p className="flex items-center gap-2">
            <span className="text-custom-color">Hi,</span> Welcome back{" "}
            <PiHandWaving />
          </p>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <p>username</p>
              <input
                type="text"
                className="py-3 px-4 w-full rounded-md border border-custom-color"
                placeholder="E.g. Josesusanto@gmail.com"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                className="py-3 px-4 w-full rounded-md border border-custom-color"
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3 rounded-md"
            >
              Login
            </button>
          </form>
          <div className="flex gap-1 justify-center">
            Not registered yet?{" "}
            <Link to={"/register"} className="text-custom-color">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Middleware.Guest>

  );
}
