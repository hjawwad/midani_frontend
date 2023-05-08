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
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GroupsIcon from "@mui/icons-material/Groups";
import CakeIcon from "@mui/icons-material/Cake";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessIcon from "@mui/icons-material/Business";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonCircleIcon from "./components/svg-icons/person-icon";

var moment = require("moment");

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
  useEffect(() => {
    console.log("ROUTER", router.query.selectedRow); // Alerts 'Someone'
  }, [router.query]);

  const [selectedRow, setSelectedRow] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [updated, setUpdated] = useState(false);

  const [isAddModal, setIsAddModal] = useState(false);
  const [fields, setFields] = useState([]);
  const [dropdown, setDropDown] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseContact = await updateContactByGroup(
        selectedRow.group_id,
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
        setFields([]);
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

  useEffect(() => {
    if (updated) {
      setSelectedRow(JSON.parse(localStorage.getItem("selectedRow")));
      setUpdated(false);
    }
  }, [updated]);

  const handleOpenModal = (item) => {
    setSelectedRow(item);
    localStorage.setItem("selectedRow", JSON.stringify(item));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddOpenModal = () => setIsAddModal(true);

  const handleAddCloseModal = () => setIsAddModal(false);

  return (
    <div className="bg-[#000000] w-full h-full">
      {selectedRow && (
        <>
          <div className="flex w-full">
            <div className="w-[50%] ">
              <div
                style={{
                  height: "140px",
                  padding: "20px",
                }}
              >
                <div className="flex w-full text-[#fffff] text-[28px] border-bottom mb-5">
                  <div>
                    {selectedRow?.image ? (
                      selectedRow.image
                    ) : (
                      <PersonCircleIcon />
                    )}
                  </div>
                  <div
                    className="pl-5 pt-1"
                    style={{ fontWeight: "500px", fontFamily: "Inter" }}
                  >
                    {selectedRow?.name ? selectedRow.name : "Gabriele Morace"}
                  </div>
                </div>
                <button className="mb-[25px] ml-[70px] bg-[#0353CC] p-2 rounded-xl">
                  Send Email
                </button>
              </div>
              <h1 className="border border-[#3A3A3A]"></h1>

              <div
                className="grid grid-cols-2 divide-x w-full"
                style={{

                  borderRight: "2px solid #3A3A3A",
                }}
              >
                <div className="items-center justify-center mx-auto pt-[22px]">

                  <div className="flex text-[25px] ml-5">
                    <div>
                      <KeyboardArrowDownIcon style={{ fontSize: 40 }} />
                    </div>
                    <div>Record details</div>
                  </div>
                  {dropdown && (
                    <>
                      <div className="w-full p-[20px] pb-[5px]">
                        <div className="items-center justify-center  pb-[22px]">
                          <form onSubmit="" className="text-left pt-5">
                            <div>
                              <div className=" border-none border-0 ">
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <PersonIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    id="name"
                                    value={selectedRow?.name}
                                    placeholder="Name & Surname"
                                  />
                                </div>

                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <LocalOfferIcon />
                                  </div>

                                  <input
                                    disabled="true"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.tag}
                                    placeholder="Tags"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <GroupsIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.meet}
                                    placeholder="Where did we meet?"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <CakeIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    value={moment(selectedRow?.dob).format(
                                      "DD-MM-YYYY"
                                    )}
                                    className="pb-[6px] pt-[5px] pl-2 text-xl text-[#ABABAB] border-slate-300 rounded-md bg-black ml-5"
                                    placeholder="Birthday"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <LocalPhoneIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.phone}
                                    placeholder="Phone"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <PlaceIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.city}
                                    placeholder="City"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <PlaceIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.country}
                                    placeholder="Country"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <LinkedInIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.linkedin}
                                    placeholder="LinkedIn"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <TwitterIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.twitter}
                                    placeholder="Twitter"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <AlternateEmailIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="email"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5 "
                                    value={selectedRow?.email}
                                    placeholder="Email"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <WorkOutlineIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.job}
                                    placeholder="Job"
                                  />
                                </div>
                                <div
                                  className="pb-[25px] mr-[5px]"
                                  style={{ display: "flex" }}
                                >
                                  <div className="pb-[6px] text-[#6A6A6A]">
                                    <BusinessIcon />
                                  </div>
                                  <input
                                    disabled="true"
                                    type="text"
                                    className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                                    value={selectedRow?.company}
                                    placeholder="Company"
                                  />
                                </div>
                                {/* <div style={{ display: "flex", justifyContent: "end" }}>
                            <button
                              type="submit"
                              className="text-xl border border-slate-300 rounded-md p-2  border-none"
                              style={{ backgroundColor: "#0353CC" }}
                            >
                              {isLoading ? "Creating" : buttonText}
                            </button>
                            <button
                              onClick={onRequestClose}
                              className="text-xl  border border-slate-300 rounded-md p-2 border-none"
                              style={{
                                backgroundColor: "#43464C",
                                marginLeft: "2vh",
                              }}
                            >
                              Cancel
                            </button>
                          </div> */}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* </MenuItem>
            </Select> */}
                      {/* ........................................................... */}

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
                              onChange={(event) =>
                                handleInputChange(event, index)
                              }
                            />
                            <label htmlFor={`value-${index}`}>Value:</label>
                            <input
                              type="text"
                              className="w-full bg-black text-white text-xl border border-slate-300 rounded-[16px] bg-black p-2 pl-5"
                              id={`value-${index}`}
                              name="value"
                              value={field.value}
                              onChange={(event) =>
                                handleInputChange(event, index)
                              }
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
                      <div style={{ display: "inline-flex" }}>
                        <button
                          className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                          onClick={() => handleAddOpenModal()}
                        >
                          Edit
                        </button>
                        <button
                          className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}

                  {isAddModal && (
                    <CreateContact
                      isOpen={isAddModal}
                      onRequestClose={handleAddCloseModal}
                      selectedRow={selectedRow}
                      setAdded={setAdded}
                      setUpdated={setUpdated}
                      buttonText="Update"
                      setSelectedRow={setSelectedRow}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-[50%] " style={{ display: "flex" }}>
              <TabMenu selectedRow={selectedRow} />
            </div>
          </div>
          {/* ........................................................... */}
        </>
      )}
    </div>
  );
}

export default withAuth(ContactDetail);
