import ReactModal from "react-modal";
import { useState, useEffect } from "react";
import { createComment, updateCommentById } from "../api/register";
import showSuccessAlert from "./utility/showSuccessAlert";
import showErrorAlert from "./utility/showErrorAlert";

ReactModal.setAppElement("#__next");

const CreateComment = ({
  isOpen,
  onRequestClose,
  onClose,
  selectedRow,
  comment,
}) => {
  const customStyles = {
    content: {
      maxWidth: "500px",
      width: "500px",
      minHeight: "200px",
      height: "400px",
    },
    overlay: {},
  };
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!description) {
      showErrorAlert("Comment should not be null");
      return;
    }
    let response = "";
    try {
      if (!comment) {
        response = await createComment(selectedRow._id, {
          comment: description,
        });

        if (response.status) {
          setDescription("");
          showSuccessAlert(response.message);
        } else {
          showErrorAlert("Something went wrong!");
          return;
        }
      } else {
        response = await updateCommentById(
          selectedRow._id,
          {
            comment: description,
          },
          comment._id
        );
        if (response.status) {
          setDescription("");
          showSuccessAlert(response.message);
        } else {
          showErrorAlert("Something went wrong!");
          return;
        }
      }
    } catch (error) {
      showErrorAlert("Create Comment failed. Please try again later.");
    }
    onRequestClose();
  };

  useEffect(() => {
    if (comment) {
      setDescription(comment.comment);
    }
  }, [comment]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form>
        <textarea
          className="w-full bg-black  pl-[34px] pr-[34px] border border-slate-300"
          id="message"
          name="message"
          rows="10"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>
        <button
          onClick={() => onClose(false)}
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
};

export default CreateComment;
