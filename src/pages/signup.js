import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/')
  }

  const handleSignupClick = () => {
    router.push('/')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    <div className="flex min-h-screen flex-col items-center text-center justify-between bg-white">
      <div className="grid grid-cols-2 divide-x w-full">
        <div className=" border-none border-0 items-center justify-center mx-auto pt-[199px]">
          <h1 className="text-4xl text-left w-[360px] text-black">Sign up</h1>
            <p className="text-left pt-[12px] text-[#475467]">Start your 30-day free trial.</p>
          <form onSubmit={handleFormSubmit} className="w-[360px] text-left pt-[32px]">
            <div className="pb-5">
              <label className="pb-[6px] text-black" htmlFor="email">
                Name*
              </label>
              <input
                type="name"
                className="bg-white text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="pb-5">
              <label className="pb-[6px] text-black" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                className="bg-white text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="pb-5">
              <label className="pb-[6px] text-black" htmlFor="password">
                Password*
              </label>
              <input
                type="password"
                className="bg-white text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="password"
                placeholder="Create a password"
              />
              <p className="text-left pt-[12px] text-[#475467]">Must be at least 8 characters.</p>
            </div>

            <div>
              <button onClick={handleSignupClick} className="text-xl border border-slate-300 rounded-md p-2 w-full border-none" style={{ 'background-color': '#7F56D9' }}>
                Get Started
              </button>
            </div>
            <div className="text-center pt-[32px]  text-[#475467]">
              <span>Already have an account?&nbsp;</span>
              <span className="cursor-pointer" onClick={handleLoginClick} style={{ 'color': '#7F56D9' }}>
                Log in
              </span>
            </div>
          </form>
        </div>
        <div className=" border-none border-0 pl-[48px]">
          <Image
            src="/signup-bg.svg"
            alt="Sign Up Background"
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
