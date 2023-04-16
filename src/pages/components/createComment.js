import ReactModal from "react-modal";
import { useState } from "react";

ReactModal.setAppElement("#__next");

function CreateComment({ isOpen, onRequestClose }) {
  const customStyles = {
    content: {
      maxWidth: "500px",
      width: "500px",
      minHeight: "500px",
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
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full bg-black p-[13px] pl-[34px] pr-[34px] border border-slate-300"
          id="message"
          name="message"
          rows="13"
          placeholder="Description"
          onChange={(event) => setName(event.target.value)}
        ></textarea>
        <button
          onClick={onRequestClose}
          className="w-1/3 fixed bottom-0 left-0 mb-8 ml-8 p-4 rounded-[8px] text-black bg-white rounded-[8px] border border-white"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="w-1/3 fixed bottom-0 right-0 mb-8 mr-8 p-4 text-white"
        >
          Save
        </button>
      </form>
    </ReactModal>
  );
}

export default CreateComment;
