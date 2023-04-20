import { useState } from "react";
import Image from "next/image";
import CreateGroup from "./createGroup";
import { getAllGroups } from '../api/register'

const { API_ENDPOINT } = process.env || 'http://localhost:4001/'
const Sidebar = ({ title, setSelectedGroup, selectedGroup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addGroup, setAddGroup] = useState(false);
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    getAllGroupNames()
  };
  const handleAddGroup = () => {
    setAddGroup(!addGroup)
    getAllGroupNames()
  }
  const isSelected = (current) => {
    if(selectedGroup._id === current._id) {
      return 'bg-[#1A1A1A] rounded'
    }
    return ''
  }
  const getAllGroupNames = async () => {
    setIsLoading(true);

    try {
      const response = await getAllGroups();
      await setData(response.data)
      await setSelectedGroup(response.data[0])
      setSuccessMessage('Successful!');
      setError(null);
    } catch (error) {
      setError('Failed. Please try again later.');
      setSuccessMessage(null);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-[307px] min-w-[307px] p-[50px] pl-[40px] pr-[40px] border border-[#303030]">
      <div className="flex w-full pb-[30px]">
        <div className="text-xl flex-1 cursor-pointer" onClick={toggleDropdown}>
          &#9660;&nbsp; <span>Contact</span>
        </div>
        <div className="text-xl text-right flex-1 cursor-pointer" onClick={handleAddGroup}>&#43;</div>
      </div>
      {isOpen && (
        <div>
          {data && data.length && data.map((item) => (
          <div className={`p-[10px] mt-[20px] mb-[20px] cursor-pointer ${isSelected(item.data)}`} key={item.data.name}> 
            <div className="flex w-full"  onClick={() => setSelectedGroup(item.data)}>
              <div className="text-base ">
                <Image
                  src={`http://localhost:4001/${item.data.icon}`}
                  alt="Sidebar Logo"
                  className="inline-flex rounded-full"
                  width={20}
                  height={20}
                  priority
                />
                &nbsp; <span>{item.data.name}</span>
              </div>
              <div className="text-base text-right text-[#808080] flex-1">{item.count}</div>
            </div>
          </div>
          ))}
        </div>
      )}
      <CreateGroup
          isOpen={addGroup}
          onRequestClose={handleAddGroup}
        />
    </div>
  );
};

export default Sidebar;
