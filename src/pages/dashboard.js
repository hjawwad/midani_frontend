import { Inter } from "next/font/google";
import Table from "./components/table";
import Sidebar from "./components/sidebar";
import Image from "next/image";

const data = [
  {
    people: 1,
    email: "john@example.com",
    location: "New ziland",
    status: "To contact",
    job: "CEO",
    company: "Google",
    phone: "123-234-4567",
  },
  {
    people: 1,
    email: "john@example.com",
    location: "New ziland",
    status: "To contact",
    job: "CEO",
    company: "Google",
    phone: "123-234-4567",
  },
  {
    people: 1,
    email: "john@example.com",
    location: "New ziland",
    status: "Phoned",
    job: "CEO",
    company: "Google",
    phone: "123-234-4567",
  },
  {
    people: 1,
    email: "john@example.com",
    location: "New ziland",
    status: "To contact",
    job: "CEO",
    company: "Google",
    phone: "123-234-4567",
  },
  {
    people: 1,
    email: "john@example.com",
    location: "New ziland",
    status: "Meet-up",
    job: "CEO",
    company: "Google",
    phone: "123-234-4567",
  },
  {
    people: 1,
    email: "john@example.com",
    location: "New ziland",
    status: "To contact",
    job: "CEO",
    company: "Google",
    phone: "123-234-4567",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  //   const handleFormSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(email, password);
  // };
  return (
    <div className="flex min-h-screen flex-row">
      <Sidebar title="Click me" />
      <div>
        <header className="flex justify-between items-center p-4 pl-[50px]">
          <div className="flex-shrink-0">
            <Image
              src="/home-icon.svg"
              alt="Home Icon"
              width={30}
              height={30}
              priority
            />
          </div>
          <nav className="ml-6 flex space-x-4">
            <div
              className="font-medium text-[24px]"
            >
              Crypto experts
            </div>
          </nav>
          <div className="ml-auto flex items-center pr-[15px] cursor-pointer">
            <span className="ml-2 text-gray-800 font-medium pr-[15px] text-white">Share</span>
            <div>...</div>
          </div>
        </header>
        <Table data={data} />
      </div>
    </div>
  );
}
