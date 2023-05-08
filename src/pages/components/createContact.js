import ReactModal from "react-modal";
import { useState, useRef, useEffect } from "react";
import { createContactByGroup, updateContactByGroup } from "../api/register";
import showErrorAlert from "./utility/showErrorAlert";
import showSuccessAlert from "./utility/showSuccessAlert";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var moment = require("moment");
import Cross from "./../../../public/cross.svg";
import Image from "next/image";

ReactModal.setAppElement("#__next");

function CreateContact({
  isOpen,
  onRequestClose,
  selectedGroup,
  selectedRow,
  setAdded,
  setUpdated,
  buttonText,
}) {
  const customStyles = {
    content: {
      maxWidth: "495px",
      width: "700px",
    },
    overlay: {},
  };
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("");
  // const [location, setLocation] = useState("");
  const [location, setLocation] = useState({ city: "", country: "" });
  const [university, setUniversity] = useState("");
  const [meet, setMeet] = useState("");
  const [dob, setDOB] = useState("");
  const [connections, setConnections] = useState([]);
  const [linkedin, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");
  const [company, setCompany] = useState("");
  const [companies, setCompanies] = useState([{ name: "", logo: null }]);
  const [bday, setBday] = useState("Birthday");
  const options = [
    { value: "To contact", label: "To contact" },
    { value: "Phoned", label: "Phoned" },
    { value: "Meet-up", label: "Meet-up" },
  ];

  useEffect(() => {
    if (buttonText === "Update" && selectedRow) {
      setName(selectedRow.name || "");
      setImage(selectedRow.image || "");
      setPhone(selectedRow.phone || "");
      setPhone(selectedRow.tag || "");
      setJob(selectedRow.job || "");
      setEmail(selectedRow.email || "");
      setStatus(selectedRow.status || "");
      setLocation(selectedRow.location || { city: "", country: "" });
      setUniversity(selectedRow.university || "");
      setMeet(selectedRow.meet || "");
      setDOB(selectedRow.dob || "");
      setConnections(selectedRow.connections || []);
      setCompanies(selectedRow.companies || [{ name: "", logo: null }]);
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      document.body.appendChild(img);
      setImage(img.src);
      img.style.display = "none";
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
      img.style.display = "none";
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

      const contactData = {
        name: name,
        company_name: company,
        email: email,
        tag: tag,
        city: location.city,
        country: location.country,
        job: job,
        phone: phone,
        linkedin: linkedin,
        twitter: twitter,
        dob: moment(dob).format("DD-MM-YYYY"),
        meet: meet,
        group_id: selectedGroup?._id,
      };

      let responseContact;
      if (buttonText != "Update") {
        responseContact = await createContactByGroup(
          selectedGroup?._id,
          contactData
        );
      } else {
        responseContact = await updateContactByGroup(
          selectedRow?.group_id,
          contactData,
          selectedRow._id
        );
      }

      setIsLoading(false);
      if (responseContact.status) {
        if (buttonText !== "Update") setAdded(true);
        else {
          localStorage.setItem(
            "selectedRow",
            JSON.stringify(responseContact.data.data)
          );
          setUpdated(true);
        }
        showSuccessAlert(responseContact.message);
      } else {
        showErrorAlert("Something went wrong!");
        return;
      }
    } catch (error) {
      showErrorAlert(error);
      return;
    }

    setIsLoading(false);
    onRequestClose();
  };

  const handleBOD = (dateStr) => {
    setDOB(dateStr);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayClassName="p-0"
    >
      <div
        className="bg-[#000000] w-full pt-1 pl-2 "
        style={{ overflow: "hidden" }}
      >
        <h1
          style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "700" }}
        >
          Create persona
        </h1>
        <div className="w-full p-[20px] pb-[5px]">
          <div className="items-center justify-center  pb-[22px]">
            <form onSubmit={handleFormSubmit} className="text-left pt-5">
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="Name & Surname"
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
                      type="email"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5 "
                      id="name"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email"
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="name"
                      onChange={(e) => setTag(e.target.value)}
                      value={tag}
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="name"
                      onChange={(e) => setMeet(e.target.value)}
                      value={meet}
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
                    <DatePicker
                      dateFormat="dd-MM-yyyy"
                      selected={dob}
                      value={dob === "" ? "Birthday" : dob}
                      onChange={(date) => handleBOD(date)}
                      className="pb-[6px] pt-[5px] pl-2 text-xl text-[#ABABAB] border-slate-300 rounded-md bg-black ml-5"
                      // useWeekdaysShort={true}
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="city"
                      onChange={(e) =>
                        setLocation({ ...location, city: e.target.value })
                      }
                      value={location.city}
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="country"
                      onChange={(e) =>
                        setLocation({ ...location, country: e.target.value })
                      }
                      value={location.country}
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="linkedin"
                      onChange={(e) => setLinkedIn(e.target.value)}
                      value={linkedin}
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="twitter"
                      onChange={(e) => setTwitter(e.target.value)}
                      value={twitter}
                      placeholder="Twitter"
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="job"
                      onChange={(e) => setJob(e.target.value)}
                      value={job}
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
                      type="text"
                      className="text-xl pl-2 border-slate-300 rounded-md bg-black ml-5"
                      id="company"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      placeholder="Company"
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
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
                      style={{ backgroundColor: "#43464C", marginLeft: "2vh" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default CreateContact;
