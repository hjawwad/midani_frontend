import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListComments from "./listComments";
import ListInteractions from "./listInteractions";

function TabMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedRow, setSelectedRow] = useState({});

  useEffect(() => {
    setSelectedRow(JSON.parse(localStorage.getItem("selectedRow")));
  }, []);

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Tabs selectedIndex={selectedIndex} onSelect={handleTabClick}>
      <TabList>
        <Tab style={{ color: "#0353CC" }}>Comments</Tab>
        <Tab>Interactions</Tab>
        <Tab>Reminders</Tab>
      </TabList>
      <h1 className="border border-[#3A3A3A]"></h1>

      <TabPanel>
        <ListComments />
      </TabPanel>

      <TabPanel>
        <ListInteractions />
      </TabPanel>
    </Tabs>
  );
}

export default TabMenu;
