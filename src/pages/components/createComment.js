import ReactModal from "react-modal";
import { useState } from "react";
import { createComment } from "../api/register"
import { showErrorAlert, showSuccessAlert } from './utility'

ReactModal.setAppElement("#__next");

function CreateComment({ isOpen, onRequestClose, selectedRow }) {
  const customStyles = {
    content: {
      maxWidth: "500px",
      width: "500px",
      minHeight: "500px",
    },
    overlay: {},
  };
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!description) {
        showErrorAlert('Comment should not be null');
        return
    }
    setIsLoading(true);
    let response = ''
    try {
      response = await createComment(selectedRow._id, {comment: description});
      setIsLoading(false);
      if(response.status) {
        showSuccessAlert(response.message)
      } else {
        showErrorAlert('Something went wrong!');
        return
      }
    } catch (error) {
      showErrorAlert('Create Comment failed. Please try again later.');
    }
    onRequestClose()
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
          onChange={(event) => setDescription(event.target.value)}
          value={description}
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
