import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import Image from "next/image";
import TabMenu from "./components/tabmenu";
import { getCompany } from "./api/register";
import withAuth from "./components/withAuth";
import { useRouter } from "next/router";
import showSuccessAlert from "./components/utility/showSuccessAlert";
import showErrorAlert from "./components/utility/showErrorAlert";
import { updateContactByGroup, deleteContactsById } from "./api/register";
import CreateContact from "./components/createContact";

ReactModal.setAppElement("#__next");

const CompanyName = ({ companyId }) => {
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    if (companyId) {
      const fetchData = async () => {
        const company = await getCompany(companyId);
        setCompanyName(company.name);
      };
      fetchData();
    }
  }, [companyId]);

  return <p className="text-left text-xl">{companyName}</p>;
};

function ContactDetail() {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [fields, setFields] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseContact = await updateContactByGroup(
        "64411ecc7d8d3e96de54fceb",
        fields,
        selectedRow._id
      );
      if (responseContact.status) {
        showSuccessAlert(responseContact.message);
        setAdded(true);

        // Save updated fields to local storage
        localStorage.setItem(
          "selectedRow",
          JSON.stringify(responseContact.data.data)
        );
      } else {
        showErrorAlert("Something went wrong!");
        return;
      }
    } catch (error) {
      showErrorAlert(error);
      return;
    }
  };

  const handleDelete = async () => {
    try {
      const responseContact = await deleteContactsById(
        selectedRow.group_id,
        selectedRow._id
      );
      if (responseContact.status) {
        showSuccessAlert(responseContact.message);
        localStorage.removeItem("selectedRow");
        router.push("/dashboard");
      } else {
        showErrorAlert("Something went wrong!");
        return;
      }
    } catch (error) {
      showErrorAlert(error);
      return;
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setFields((prevState) => {
      const newState = [...prevState];
      newState[index][name] = value;
      return newState;
    });
  };

  const handleAddField = () => {
    setFields((prevState) => [...prevState, { name: "", value: "" }]);
  };

  useEffect(() => {
    setSelectedRow(JSON.parse(localStorage.getItem("selectedRow")));
  }, []);

  useEffect(() => {
    if (added) {
      setSelectedRow(JSON.parse(localStorage.getItem("selectedRow")));
      setAdded(false);
    }
  }, [added]);

  const handleOpenModal = (item) => {
    setSelectedRow(item);
    localStorage.setItem("selectedRow", JSON.stringify(item));
    //  router.push("/contactDetail");
    // setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddOpenModal = () => setIsAddModal(true);

  const handleAddCloseModal = () => setIsAddModal(false);

  return (
    <div className="bg-[#000000] w-full h-full p-[20px]">
      {selectedRow && (
        <div className="grid grid-cols-2 divide-x w-full">
          <div className="items-center justify-center mx-auto pt-[22px]">
            <div className="grid grid-cols-2 divide-x w-full">
              <div className="flex items-center justify-center">
                {selectedRow.image === "" ? (
                  <></>
                ) : (
                  <Image
                    src={`https://crypto-experts-backend.herokuapp.com/${selectedRow.image}`}
                    alt="Login Logo"
                    width={100}
                    height={100}
                    priority
                  />
                )}
              </div>
            </div>

            <h1 className="text-3xl text-left pt-[11px]">
              {selectedRow.name || ""}
            </h1>
            <p className="text-left">{selectedRow.tag ? tag : ""}</p>
            <form className="text-left pt-[32px]">
              <div className="pb-[32px]">
                <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                  How did we meet?
                </label>
                <p className="text-left text-xl">{selectedRow.meet || ""}</p>
              </div>
              <div className="grid grid-cols-2 divide-x w-full">
                <div className=" border-none border-0 ">
                  <div className="pb-[32px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Location
                    </label>
                    <p className="text-left text-xl">
                      {selectedRow.location || ""}
                    </p>
                  </div>
                  <div className="pb-[32px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Phone number
                    </label>
                    <p className="text-left text-xl">
                      {selectedRow.phone || ""}
                    </p>
                  </div>
                  <div className="pb-[32px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Job
                    </label>
                    <p className="text-left text-xl">{selectedRow.job || ""}</p>
                  </div>
                  <div className="pb-[32px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Connection
                    </label>
                    {selectedRow.connections &&
                      selectedRow.connections.map((connection, index) => (
                        <p className="text-left text-xl" key="index">
                          <b>connection</b>
                        </p>
                      ))}
                  </div>
                </div>
                <div className=" border-none border-0 ">
                  <div className="pb-[32px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Birthday
                    </label>
                    <p className="text-left text-xl">{selectedRow.dob || ""}</p>
                  </div>
                  <div className="pb-[32px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Email
                    </label>
                    <p className="text-left text-xl">
                      {selectedRow.email || ""}
                    </p>
                  </div>
                  <div className="pb-[32px]">
                    <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                      Company
                    </label>
                    {selectedRow.company_id &&
                      selectedRow.company_id.length &&
                      selectedRow.company_id.map((companyId) => (
                        // eslint-disable-next-line react/jsx-key
                        <CompanyName companyId={companyId} />
                      ))}
                  </div>
                </div>
              </div>
            </form>
            {selectedRow.newField &&
              selectedRow.newField.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={`name-${index}`}
                    className="pb-[6px] text-[#6A6A6A]"
                  >
                    {Object.keys(field)[0]}
                  </label>
                  <p className="text-left text-xl">
                    {field[Object.keys(field)[0]]}
                  </p>
                </div>
              ))}
            <form onSubmit={handleSubmit}>
              {fields.map((field, index) => (
                <div key={index}>
                  <label htmlFor={`name-${index}`}>Name:</label>
                  <input
                    className="w-full bg-black text-xl text-white border border-slate-300 rounded-[16px] bg-black p-2 pl-5"
                    type="text"
                    id={`name-${index}`}
                    name="name"
                    value={field.name}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                  <label htmlFor={`value-${index}`}>Value:</label>
                  <input
                    type="text"
                    className="w-full bg-black text-white text-xl border border-slate-300 rounded-[16px] bg-black p-2 pl-5"
                    id={`value-${index}`}
                    name="value"
                    value={field.value}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </div>
              ))}
              {!fields.length && (
                <button
                  className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                  type="button"
                  onClick={handleAddField}
                >
                  Add New field
                </button>
              )}
              <button
                className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                type="submit"
              >
                Save
              </button>
            </form>
            <button
              className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button onClick={handleAddOpenModal}>Edit</button>
            <CreateContact
              isOpen={isAddModal}
              onRequestClose={handleAddCloseModal}
              selectedRow={selectedRow}
              setAdded={setAdded}
              buttonText="Update"
            />
          </div>
          <div className="pl-[48px]">
            <TabMenu selectedRow={selectedRow} />
          </div>
        </div>
      )}
    </div>
  );
}

export default withAuth(ContactDetail);
