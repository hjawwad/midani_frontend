import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { login } from "./api/register";
import { useState } from "react";
import showErrorAlert from "./components/utility/showErrorAlert";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleLoginClick = async () => {
    await router.push("/dashboard");
    window.location.reload();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      showErrorAlert("Email and  Password is required.");
      return;
    } else if (!email) {
      showErrorAlert("Email is required.");
      return;
    } else if (!password) {
      showErrorAlert("Password is required.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await login(email, password, remember);
      setIsLoading(false);

      if (!response.status) {
        showErrorAlert("Password is required.");
        return;
      }
      Cookies.set("session_token", response.data.token, {
        expires: response.data.expiresAt, // Set the cookie expiration time
        secure: false, // Set to true if using HTTPS
      });
      handleLoginClick();
    } catch (error) {
      setIsLoading(false);
      showErrorAlert(error);
      return;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center text-center justify-between p-24 pt-[139px] pr-0">
      <div className="grid grid-cols-2 divide-x w-full">
        <div className=" border-none border-0 items-center justify-center mx-auto">
          <div className="flex items-center justify-center w-[360px]">
            <Image
              src="/login-logo.svg"
              alt="Login Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <h1 className="text-4xl text-left w-[360px]">Log in</h1>
          <p className="text-left pt-[12px]">
            Welcome back! Please enter your details.
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="w-[360px] text-left pt-[32px]"
          >
            <div className="pb-5">
              <label className="pb-[6px]" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="bg-white text-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="pb-5">
              <label className="pb-[6px]" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="bg-white text-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="pb-5">
              <input
                type="checkbox"
                id="rememberFor"
                name="rememberFor"
                value={remember}
                onChange={(event) => setRemember(event.target.value)}
                className="w-[16px] h-[16px]"
              />
              <label htmlFor="rememberFor" className="pl-[10px]">
                Remember for 30 days
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                style={{ backgroundColor: "#7F56D9" }}
              >
                {isLoading ? "Loading..." : "Sign in"}
              </button>
            </div>
            <div className="text-center pt-[32px]">
              <span>Don’t have an account?&nbsp;</span>
              <span
                className="cursor-pointer"
                onClick={handleSignupClick}
                style={{ color: "#7F56D9" }}
              >
                Sign up
              </span>
            </div>
          </form>
        </div>
        <div className=" border-none border-0 pl-[96px]">
          <Image
            src="/login-bg.svg"
            alt="Login Background"
            className="w-full"
            width={100}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
