import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CreateComment from "./createComment";
import CreateInteractions from "./createInteractions"

function TabMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInteractionModalOpen, setIsInteractionModalOpen] = useState(false);

  const onCreateComment = () => {
    setIsModalOpen(true);
  };

  const onCreateInteractions = () => {
    setIsInteractionModalOpen(true);
  };

  const handleCommentCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInteractionCloseModal = () => {
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

      <TabPanel>
        <h2></h2>
      </TabPanel>

      <TabPanel>
        <div className="border border-[#303030] rounded-[8px] p-[13px] pl-[46px] pr-[26px]">
          <p className="text-[#303030]">10/09/2022</p>
          <p className="pt-[10px] pb-[13px]">
            Notion Tip: Keep track of all the people you meet, what you know
            about them, when to reach out and say hello, and whether they're a
            professional contact. You can expand the table below into a full
            page by clicking .
          </p>
          <button
            onClick={onCreateComment}
            className="fixed bottom-0 right-0 mb-8 mr-8 p-4 rounded-full text-white"
          >
            Create new
          </button>
        </div>
        <CreateComment
          isOpen={isModalOpen}
          onRequestClose={handleCommentCloseModal}
        />
      </TabPanel>

      <TabPanel>
        <div className="flex items-center">
          <div className="mr-[19px] text-center rounded-[8px] border border-[#313131] pl-[20px] pr-[20px]">
            <p className="text-[#F66363] text-[28px]">Mar</p>
            <p className="text-[28px]">26</p>
          </div>
          <div className="pb-[20px]">
            <p className="text-xl pt-[20px]">Gabriele x Elon</p>
            <span>
              Notion Tip: Keep track of all the people you meet, what you know
              about them, when to reach out and say hello, and whether they're a
              professional contact.{" "}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[19px] text-center rounded-[8px] border border-[#313131] pl-[20px] pr-[20px]">
            <p className="text-[#F66363] text-[28px]">Mar</p>
            <p className="text-[28px]">26</p>
          </div>
          <div className="pb-[20px]">
            <p className="text-xl pt-[20px]">Gabriele x Elon</p>
            <span>
              Notion Tip: Keep track of all the people you meet, what you know
              about them, when to reach out and say hello, and whether they're a
              professional contact.{" "}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[19px] text-center rounded-[8px] border border-[#313131] pl-[20px] pr-[20px]">
            <p className="text-[#F66363] text-[28px]">Mar</p>
            <p className="text-[28px]">26</p>
          </div>
          <div className="pb-[20px]">
            <p className="text-xl pt-[20px]">Gabriele x Elon</p>
            <span>
              Notion Tip: Keep track of all the people you meet, what you know
              about them, when to reach out and say hello, and whether they're a
              professional contact.{" "}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[19px] text-center rounded-[8px] border border-[#313131] pl-[20px] pr-[20px]">
            <p className="text-[#F66363] text-[28px]">Mar</p>
            <p className="text-[28px]">26</p>
          </div>
          <div className="pb-[20px]">
            <p className="text-xl pt-[20px]">Gabriele x Elon</p>
            <span>
              Notion Tip: Keep track of all the people you meet, what you know
              about them, when to reach out and say hello, and whether they're a
              professional contact.{" "}
            </span>
          </div>
        </div>
        <button
            onClick={onCreateInteractions}
            className="fixed bottom-0 right-0 mb-8 mr-8 p-4 rounded-full text-white"
          >
            Create new
          </button>
        <CreateInteractions
          isOpen={isInteractionModalOpen}
          onRequestClose={handleInteractionCloseModal}
        />
      </TabPanel>
    </Tabs>
  );
}

export default TabMenu;
