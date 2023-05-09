import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CreateComment from "./createComment";
import CreateInteractions from "./createInteractions";
import { getAllComments, getAllInteractions } from "../api/register";

function TabMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedRow, setSelectedRow] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInteractionModalOpen, setIsInteractionModalOpen] = useState(false);

  const [data, setData] = useState(null);
  const [interactions, setInteractions] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (selectedRow._id) {
        const response = await getAllComments(selectedRow._id);
        setData(response.data);
        const interact = await getAllInteractions(selectedRow._id);
        setInteractions(interact.data);
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
  const getCommentDate = (currentDate) => {
    const date = new Date(currentDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().substr(-2);

    return `${month.toString().padStart(2, "0")}/${day
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  const getInteractionMonth = (currentDate) => {
    const date = new Date(currentDate);
    return date.toLocaleString("default", { month: "short" });
  };

  const getInteractionDate = (currentDate) => {
    const date = new Date(currentDate);
    return date.getDate().toString().padStart(2, "0");
  };

  const onCreateInteractions = () => {
    setIsInteractionModalOpen(true);
  };

  const handleCommentCloseModal = async () => {
    window.location.reload();
    setIsModalOpen(false);
  };

  const handleInteractionCloseModal = async () => {
    const interact = await getAllInteractions(selectedRow._id);
    setInteractions(interact.data);
    setIsInteractionModalOpen(false);
  };

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Tabs selectedIndex={selectedIndex} onSelect={handleTabClick}>
      <TabList>
        <Tab>Reminders</Tab>
        <Tab>Comments</Tab>
        <Tab>Interactions</Tab>
      </TabList>
      <h1 className="border border-[#3A3A3A]"></h1>
      {/* <TabPanel>
        <h2></h2>
      </TabPanel> */}

      <TabPanel>
        {/* {data &&
          data.length &&
          data.map((item) => (
            <div
              key={item._id}
              className="border border-[#303030] rounded-[8px] p-[13px] pl-[46px] pr-[26px] mb-[20px]"
            >
              {console.log('dataaaa: ',item)}
              <p className="text-[#303030]">{getCommentDate(item.created)}</p>
              <p className="pt-[10px] pb-[13px]">{item.comment}</p>
            </div>
          ))} */}
        <button
          onClick={onCreateComment}
          className="fixed bottom-0 right-0 mb-8 mr-8 p-4 rounded-full text-white" //
        >
          Create new
        </button>
        <CreateComment
          isOpen={isModalOpen}
          onRequestClose={handleCommentCloseModal}
          selectedRow={selectedRow}
        />
      </TabPanel>

      <TabPanel>
        {/* {interactions &&
          interactions.length &&
          interactions.map((item) => (
            <div key={item._id} className="flex items-center">
              <div className="mr-[19px] text-center rounded-[8px] border border-[#313131] pl-[20px] pr-[20px]">
                <p className="text-[#F66363] text-[28px]">
                  {getInteractionMonth(item.date)}
                </p>
                <p className="text-[28px]">{getInteractionDate(item.date)}</p>
              </div>
              <div className="pb-[20px]">
                <p className="text-xl pt-[20px]">{item.name}</p>
                <span>{item.description}. </span>
              </div>
            </div>
          ))} */}
        <button
          onClick={onCreateInteractions}
          className="fixed bottom-0 right-0 mb-8 mr-8 p-4 rounded-full text-white" //</TabPanel>"
        >
          Create new
        </button>
        <CreateInteractions
          isOpen={isInteractionModalOpen}
          onRequestClose={handleInteractionCloseModal}
          selectedRow={selectedRow}
        />
      </TabPanel>
    </Tabs>
  );
}

export default TabMenu;
