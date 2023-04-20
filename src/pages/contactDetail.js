import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import Image from "next/image";
import TabMenu from "./components/tabmenu";
import { getCompany } from "./api/register";
import withAuth from "./components/withAuth";

ReactModal.setAppElement("#__next");

const CompanyName = ({ companyId }) => {
  const [companyName, setCompanyName] = useState("");
  const [selectedRow, setSelectedRow] = useState("")
  setSelectedRow(JSON.parse(localStorage.getItem("selectedRow")))

  useEffect(() => {
    const fetchData = async () => {
      const company = await getCompany(companyId);
      setCompanyName(company.name);
    };
    fetchData();
  }, [companyId]);

  return <p className="text-left text-xl">{companyName}</p>;
};

function ContactDetail() {

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ReactModal
      isOpen={true}
      overlayClassName="p-0"
    >
      <div className="bg-[#000000] w-full h-full p-[20px]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 divide-x w-full">
            <div className="items-center justify-center mx-auto pt-[22px]">
              <div className="grid grid-cols-2 divide-x w-full">
                <div className="flex items-center justify-center">
                  <Image
                    src="/contact_default.svg"
                    alt="Login Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </div>

              <h1 className="text-3xl text-left pt-[11px]">
                {selectedRow.name}
              </h1>
              <p className="text-left">#stanford &nbsp; #stanford</p>
              <form onSubmit={handleFormSubmit} className="text-left pt-[32px]">
                <div className="pb-[32px]">
                  <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                    How did we meet?
                  </label>
                  <p className="text-left text-xl">{selectedRow.meet}</p>
                  {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                </div>
                <div className="grid grid-cols-2 divide-x w-full">
                  <div className=" border-none border-0 ">
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Location
                      </label>
                      <p className="text-left text-xl">
                        {selectedRow.location}
                      </p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Phone number
                      </label>
                      <p className="text-left text-xl">{selectedRow.phone}</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Job
                      </label>
                      <p className="text-left text-xl">{selectedRow.job}</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Connection
                      </label>
                      <p className="text-left text-xl">
                        <b>IE University</b>&nbsp; MBA-2022
                      </p>
                      <p className="text-left text-xl">
                        <b>Stanford University</b>&nbsp; BBA-2020
                      </p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                  </div>
                  <div className=" border-none border-0 ">
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Birthday
                      </label>
                      <p className="text-left text-xl">{selectedRow.dob}</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <p className="text-left text-xl">{selectedRow.email}</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Connection
                      </label>
                      <p className="text-left text-xl">@nico_rose</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Company
                      </label>
                      {selectedRow.company_id &&
                        selectedRow.company_id.length &&
                        selectedRow.company_id.map((companyId) => (
                          // eslint-disable-next-line react/jsx-key
                          <CompanyName companyId={companyId} />
                        ))}
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                  </div>
                </div>
                {/* <div>
                  <button
                    onClick={handleSubmit}
                    className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                    style={{ "background-color": "#7F56D9" }}
                  >
                    Get Started 1111
                  </button>
                </div> */}
              </form>
            </div>
            <div className="pl-[48px]">
              <TabMenu selectedRow={selectedRow} />
            </div>
          </div>
        </form>
      </div>
    </ReactModal>
  );
}

export default withAuth(ContactDetail);
