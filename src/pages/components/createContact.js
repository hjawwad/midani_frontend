import ReactModal from "react-modal";
import { useState, useRef } from "react";
import { createContactCompany, createContactByGroup } from "../api/register";

ReactModal.setAppElement("#__next");

function CreateContact({ isOpen, onRequestClose, selectedGroup }) {
  const customStyles = {
    content: {
      maxWidth: "700px",
      width: "700px",
      minHeight: "700px",
    },
    overlay: {},
  };
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [meet, setMeet] = useState("");
  const [dob, setDOB] = useState("");
  const [connections, setConnections] = useState([]);
  const [companies, setCompanies] = useState([{ name: "", logo: null }]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const ref = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      document.body.appendChild(img);
      setImage(img.src);
    };
    reader.readAsDataURL(file);
  };

  const handleCompanyLogoInputChange = (index, event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      document.body.appendChild(img);
      const companiesCopy = [...companies];

      // Modify the copy at the specified index
      companiesCopy[index].logo = img.src;

      // Update the state with the modified copy
      setCompanies(companiesCopy);
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      let companyIds = [];
      let data = {};
      let response = "";

      for (const company of companies) {
        data = {
          name: company.name,
          icon: company.logo,
        };
        response = await createContactCompany(data);
        companyIds.push(response.data.data._id);
      }
      const contactData = {
        name: name,
        image: image,
        company_id: companyIds,
        email: email,
        location: location,
        status: "Active",
        job: job,
        phone: phone,
        connections: connections,
        dob: dob,
        meet: meet,
        group_id: selectedGroup._id
      };
      responseContact = await createContactByGroup(
        selectedGroup._id,
        contactData
      );
      setSuccessMessage("Group Creation successful!");
      setError(null);
    } catch (error) {
      setError("Group Creation failed. Please try again later.");
      setSuccessMessage(null);
    }

    setIsLoading(false);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayClassName="p-0"
    >
      <div className="bg-[#000000] w-full h-full p-[20px]">
        <div className="w-full">
          <div className="items-center justify-center mx-auto pt-[22px] pb-[22px]">
            <h1 className="text-3xl text-left pt-[11px]">Create Contact</h1>
            <form onSubmit={handleFormSubmit} className="text-left pt-[32px]">
              <div className="pb-[32px]">
                <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                  Profile Image
                </label>
                <input
                  type="file"
                  onChange={handleFileInputChange}
                  className="w-full bg-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5"
                  accept="image/*"
                />
              </div>
              <div className="pb-[32px]">
                <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                  How did we meet?
                </label>
                <input
                  type="name"
                  className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                  id="name"
                  onChange={(e) => setMeet(e.target.value)}
                  value={meet}
                />
              </div>
              <div className="grid grid-cols-2 divide-x w-full">
                <div className=" border-none border-0 ">
                  <div className="pb-[32px] mr-[5px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Name
                    </label>
                    <input
                      type="text"
                      className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="pb-[32px] mr-[5px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Phone number
                    </label>
                    <input
                      type="name"
                      className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                      id="name"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                  <div className="pb-[32px] mr-[5px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Job
                    </label>
                    <input
                      type="name"
                      className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                      id="name"
                      onChange={(e) => setJob(e.target.value)}
                      value={job}
                    />
                  </div>
                  <div className="pb-[32px] mr-[5px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Location
                    </label>
                    <input
                      type="name"
                      className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                      id="name"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                    />
                  </div>
                </div>
                <div className=" border-none border-0 ">
                  <div className="pb-[32px] ml-[5px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Birthday
                    </label>
                    <input
                      type="date"
                      className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                      id="name"
                      onChange={(e) => setDOB(e.target.value)}
                      value={dob}
                    />
                  </div>
                  <div className="pb-[32px] ml-[5px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                      id="name"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  {connections.map((connection, index) => (
                    <div key={index} className="pb-[32px] ml-[5px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor={`connection-${index}`}
                      >
                        Connection {index + 1}
                      </label>
                      <input
                        type="name"
                        className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                        id={`connection-${index}`}
                        onChange={(e) => {
                          const newConnections = [...connections];
                          newConnections[index] = e.target.value;
                          setConnections(newConnections);
                        }}
                        value={connection}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setConnections([...connections, ""])}
                    className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                    style={{ "background-color": "#7F56D9" }}
                  >
                    Add Connection
                  </button>
                </div>
              </div>
              {companies.map((company, index) => (
                <div key={index}>
                  <div className="pb-[32px]">
                    <label
                      className="pb-[6px] text-[#6A6A6A]"
                      htmlFor={`company-name-${index}`}
                    >
                      Company Name {index + 1}
                    </label>
                    <input
                      type="name"
                      className="w-full bg-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5"
                      id={`company-name-${index}`}
                      placeholder="Name of the group"
                      onChange={(e) => {
                        const newCompanies = [...companies];
                        newCompanies[index].name = e.target.value;
                        setCompanies(newCompanies);
                      }}
                      value={company.name}
                    />
                  </div>
                  <div className="pb-[32px]">
                    <label
                      className="pb-[6px] text-[#6A6A6A]"
                      htmlFor={`company-logo-${index}`}
                    >
                      Company Logo {index + 1}
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleCompanyLogoInputChange(index, e)
                      }}
                      className="w-full bg-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5"
                      accept="image/*"
                      id={`company-logo-${index}`}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setCompanies([...companies, { name: "", logo: null }])
                }
                className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
              >
                Add Company
              </button>
              {/* <div className="pb-[32px]">
                <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                  Company Name
                </label>
                <input
                  type="name"
                  className="w-full bg-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5"
                  id="name"
                  placeholder="Name of the group"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                />
              </div>
              <div className="pb-[32px]">
                <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                  Company Logo
                </label>
                <input
                  type="file"
                  onChange={handleCompanyLogoInputChange}
                  className="w-full bg-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5"
                  accept="image/*"
                />
              </div> */}
              <div>
                <button
                  type="submit"
                  className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                  style={{ "background-color": "#7F56D9" }}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default CreateContact;
