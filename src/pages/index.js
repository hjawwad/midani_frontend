import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()

  const handleSignupClick = () => {
    router.push('/signup')
  }

  const handleLoginClick = () => {
    router.push('/dashboard')    
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
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
            <p className="text-left pt-[12px]">Welcome back! Please enter your details.</p>
          <form onSubmit={handleFormSubmit} className="w-[360px] text-left pt-[32px]">
            <div className="pb-5">
              <label className="pb-[6px]" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="bg-white text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="pb-5">
              <label className="pb-[6px]" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="bg-white text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="pb-5">
                <input type="checkbox" id="rememberFor" name="rememberFor" value="true" className="w-[16px] h-[16px]"/>
                <label for="rememberFor" className="pl-[10px]">Remember for 30 days</label>
            </div>

            <div>
              <button onClick={handleLoginClick} className="text-xl border border-slate-300 rounded-md p-2 w-full border-none" style={{ 'background-color': '#7F56D9' }}>
                Sign in
              </button>
            </div>
            <div className="text-center pt-[32px]">
              <span>Don’t have an account?&nbsp;</span>
              <span className="cursor-pointer" onClick={handleSignupClick} style={{ 'color': '#7F56D9' }}>
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
