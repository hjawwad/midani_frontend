import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { createContext } from "react";
import Table from "./components/table";
import Sidebar from "./components/sidebar";
import Image from "next/image";
import withAuth from "./components/withAuth";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
import { getAllContactsByGroup } from "./api/register";
import Cookies from "js-cookie";
import ContactDetail from "./contactDetail";

const inter = Inter({ subsets: ["latin"] });
export const ThemeContext = createContext();

function Dashboard() {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState("");
  const [contactData, setContactData] = useState("");
  const [added, setAdded] = useState(false);
  const [title, setTitle] = useState("Crypto experts");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [tableShow, setTableShow] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const color ={ white: "#FFFFFF", dark: "#1f1f1f" };

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   // clear the token from cookies
  //   destroyCookie(null, "session_token");
  //   // redirect to the login page
  //   router.push("/");
  // };

  const getAllContacts = async () => {
    setIsLoading(true);
    try {
      const response = await getAllContactsByGroup(selectedGroup._id);
      await setContactData(response.data);
      setSuccessMessage("Successful!");
      setError(null);
    } catch (error) {
      setError("Failed. Please try again later.");
      setSuccessMessage(null);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (selectedGroup && selectedGroup._id)
        await getAllContacts(selectedGroup._id);
    }
    fetchData();
  }, [selectedGroup]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, color }}>
      <div
        className="flex min-h-screen flex-row"
        style={{ backgroundColor: darkMode ? color.dark : color.white }}
      >
        <Sidebar
          title="Click me"
          setSelectedGroup={setSelectedGroup}
          selectedGroup={selectedGroup}
          added={added}
          setTitle={setTitle}
          setTableShow={setTableShow}
          setShowDetail={setShowDetail}
        />
        <div
          className="w-full"
          style={{
            backgroundColor: darkMode ? color.dark : color.white,
            borderColor: darkMode ? "#303030 " : "#D0D5DD",
          }}
        >
          <header className="flex items-center p-4 pl-[50px]">
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
                style={{
                  color: darkMode ? "#FFFAF0" : "#3A3A3A",
                }}
              >
                {title}
              </div>
            </nav>
            {/* <div className="ml-auto flex items-center pr-[15px] cursor-pointer">
            <span className="ml-2 text-gray-800 font-medium pr-[15px] text-white">
              Share
            </span>
            <div onClick={handleLogout}>...</div>
          </div> */}
          </header>
          {tableShow ? (
            <Table
              data={contactData === "" ? selectedGroup?.data : contactData}
              selectedGroup={selectedGroup}
              added={added}
              setAdded={setAdded}
              setTableShow={setTableShow}
              setShowDetail={setShowDetail}
            />
          ) : (
            <ContactDetail
              setTableShow={setTableShow}
              setShowDetail={setShowDetail}
            />
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default withAuth(Dashboard);
