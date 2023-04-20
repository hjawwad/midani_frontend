import { Inter } from "next/font/google";
import Table from "./components/table";
import Sidebar from "./components/sidebar";
import Image from "next/image";
import withAuth from "./components/withAuth";
import { destroyCookie } from "nookies";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { getAllContactsByGroup } from "./api/register"

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

function Dashboard() {
  const router = useRouter()
  const [selectedGroup, setSelectedGroup] = useState('')
  const [contactData, setContactData] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleLogout = (e) => {
      e.preventDefault();
      // clear the token from cookies
      destroyCookie(null, "session_token");
      // redirect to the login page
      router.push("/");
  };
  const getAllContacts = async () => {
    setIsLoading(true);
    try {
      const response = await getAllContactsByGroup(selectedGroup._id);
      await setContactData(response.data)
      setSuccessMessage('Successful!');
      setError(null);
    } catch (error) {
      setError('Failed. Please try again later.');
      setSuccessMessage(null);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
    await getAllContacts(selectedGroup._id)
    }
    fetchData();
  }, [selectedGroup]);

  return (
    <div className="flex min-h-screen flex-row">
      <Sidebar 
        title="Click me" 
        setSelectedGroup={setSelectedGroup} 
        selectedGroup={selectedGroup}
        />
      <div className="w-full">
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
            <div onClick={handleLogout}>...</div>
          </div>
        </header>
        <Table data={contactData} 
        selectedGroup={selectedGroup}/>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
