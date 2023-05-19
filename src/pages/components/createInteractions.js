import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import { createInteraction, updateInteractionById } from "../api/register";

ReactModal.setAppElement("#__next");

function CreateInteractions({
  isOpen,
  onRequestClose,
  selectedRow,
  interaction,
}) {
  const customStyles = {
    content: {
      maxWidth: "600px",
      width: "600px",
      minHeight: "700px",
    },
    overlay: {},
  };
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = "";
    try {
      if (!interaction) {
        response = await createInteraction(selectedRow._id, {
          name: eventName,
          date: date,
          location: location,
          description: description,
        });

        setSuccessMessage("Login successful!");
        setError(null);
        handleLoginClick();
      } else {
        response = await updateInteractionById(
          selectedRow._id,
          {
            name: eventName,
            date: date,
            location: location,
            description: description,
          },
          interaction._id
        );

        setSuccessMessage("Login successful!");
        setError(null);
        handleLoginClick();
      }
    } catch (error) {
      setError("Create Comment failed. Please try again later.");
      setSuccessMessage(null);
    }
    onRequestClose();
  };

  useEffect(() => {
    if (interaction) {
      setDate(interaction.date);
      setEventName(interaction.name);
      setLocation(interaction.location);
      setDescription(interaction.description);
    }
  }, [interaction]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form
        onSubmit={handleSubmit}
        className="p-[16px] pl-[55px] pr-[55px] text-center"
      >
        <div className="pb-[47px]">
          <input
            type="name"
            className="w-full bg-black text-xl border border-slate-300 rounded-[16px] bg-black p-2 pl-5"
            id="name"
            placeholder="Name of the event"
            onChange={(event) => setEventName(event.target.value)}
            value={eventName}
          />
        </div>
        <div className="pb-[13px]">
          <label
            className="pb-[6px] text-[#999999] text-xl mr-[17px]"
            htmlFor="email"
          >
            <b>Date</b>
          </label>
          <input
            type="date"
            className="mr-[-30px] text-center w-[155px] bg-black text-xl border border-slate-300 rounded-[12px] bg-black p-2 pl-5"
            id="name"
            placeholder="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </div>
        <div className="pb-[57px]">
          <label
            className="pb-[6px] text-[#999999] text-xl mr-[17px]"
            htmlFor="email"
          >
            <b>Location</b>
          </label>
          <input
            type="name"
            className="text-center w-[155px] bg-black text-xl border border-slate-300 rounded-[12px] bg-black p-2 pl-5"
            id="name"
            placeholder="location"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
          />
        </div>
        <textarea
          className="w-full bg-black p-[13px] pl-[34px] pr-[34px]  border border-slate-300"
          id="message"
          name="message"
          rows="5"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>
        <button
          onClick={onRequestClose}
          className="w-1/3 fixed bottom-0 left-0 mb-8 ml-8 p-4 rounded-[8px] text-black bg-white rounded-[8px] border border-white"
        >
          <b>Cancel</b>
        </button>
        <button
          onClick={handleSubmit}
          className="w-1/2 fixed bottom-0 right-0 mb-8 mr-8 p-4 text-white"
        >
          <b>Save</b>
        </button>
      </form>
    </ReactModal>
  );
}

export default CreateInteractions;
