import DropDownMenu from "./dropDownMenu";
import {
  updateCommentById,
  deleteCommentById,
  getAllComments,
} from "../api/register";
import { useEffect, useState } from "react";
import CreateComment from "./createComment";

const ListComments = ({ setChange }) => {
  const [selectedRow, setSelectedRow] = useState({});
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCommentDate = (currentDate) => {
    const date = new Date(currentDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().substr(-2);

    return `${month.toString().padStart(2, "0")}/${day
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  useEffect(() => {
    async function fetchData() {
      if (selectedRow._id) {
        const response = await getAllComments(selectedRow._id);
        setData(response.data);
      }
    }
    fetchData();
  }, [selectedRow._id]);

  useEffect(() => {
    setSelectedRow(JSON.parse(localStorage.getItem("selectedRow")));
  }, []);

  const onCreateComment = () => {
    setIsModalOpen(true);
  };

  const handleCommentCloseModal = async () => {
    const interact = await getAllComments(selectedRow._id);
    setData(interact.data);
    setIsModalOpen(false);
  };
  return (
    <>
      {data &&
        data.length &&
        data.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border border-[#303030] rounded-[8px] m-3 p-[13px] pl-[46px] pr-[26px] mb-[20px]"
          >
            <div>
              <p className="text-[#303030]">{getCommentDate(item.created)}</p>
              <p className="pt-[10px] pb-[13px]">{item.comment}</p>
            </div>
            <DropDownMenu
              onEditComment={onCreateComment}
              handleEdit={updateCommentById}
              handleDelete={deleteCommentById}
              item={item}
              setChange={setChange}
            ></DropDownMenu>
          </div>
        ))}
      <button
        onClick={onCreateComment}
        className="fixed bottom-0 right-0 mb-8 mr-8 p-4 rounded-full text-white" //
      >
        Create new
      </button>

      <CreateComment
        isOpen={isModalOpen}
        onRequestClose={handleCommentCloseModal}
        onClose={setIsModalOpen}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default ListComments;
