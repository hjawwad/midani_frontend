import ReactModal from "react-modal";
import { useState } from "react";

ReactModal.setAppElement("#__next");

function CreateInteractions({ isOpen, onRequestClose }) {
  const customStyles = {
    content: {
      maxWidth: "600px",
      width: "600px",
      minHeight: "700px",
    },
    overlay: {},
  };
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted name: ${name}`);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit} className="p-[16px] pl-[55px] pr-[55px] text-center">
        <div className="pb-[47px]">
          <input
            type="name"
            className="w-full bg-black text-xl border border-slate-300 rounded-[16px] bg-black p-2 pl-5"
            id="name"
            placeholder="Name of the event"
          />
        </div>
        <div className="pb-[13px]">
          <label className="pb-[6px] text-[#999999] text-xl mr-[17px]" htmlFor="email">
            <b>Date</b>
          </label>
          <input
            type="name"
            className="mr-[-30px] text-center w-[155px] bg-black text-xl border border-slate-300 rounded-[12px] bg-black p-2 pl-5"
            id="name"
            placeholder="date"
          />
        </div>
        <div className="pb-[57px]">
          <label className="pb-[6px] text-[#999999] text-xl mr-[17px]" htmlFor="email">
            <b>Location</b>
          </label>
          <input
            type="name"
            className="text-center w-[155px] bg-black text-xl border border-slate-300 rounded-[12px] bg-black p-2 pl-5"
            id="name"
            placeholder="location"
          />
        </div>
        <textarea
          className="w-full bg-black p-[13px] pl-[34px] pr-[34px]  border border-slate-300"
          id="message"
          name="message"
          rows="5"
          placeholder="Description"
          onChange={(event) => setName(event.target.value)}
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
