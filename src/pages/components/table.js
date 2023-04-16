import Image from "next/image";
import Modal from './modal';
import { useState } from "react";

const Table = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4  pl-[50px] mt-[25px]">
        <div className="border border-10 border-[#303030] p-[8px] inline-flex rounded-[8px]">
        <div className="flex-shrink-0 inline-flex">
          <Image
            src="/list-icon.svg"
            alt="List Icon"
            width={24}
            height={24}
            priority
          /><div className="m-auto">&nbsp; List</div>
        </div>
        <nav className="ml-6 flex space-x-4 bg-[#292929] rounded-[8px] p-[4px]">
          <div className="font-medium">60 PEOPLE</div>
        </nav>
        </div>
        <div className="ml-auto flex items-center">
          <span className="ml-2 text-gray-800 font-medium pr-[10px] inline-flex text-white">
            <div className="m-auto text-[#808080]">Filter by &nbsp;</div><div className="border border-10 border-[#303030] rounded-[8px] p-[4px] pl-[8px] pr-[8px] text-white">Email all </div>
          </span>
        <div onClick={handleOpenModal} className="cursor-pointer text-xl text-right flex-1 border border-10 border-[#303030] rounded-[8px] p-[4px] pl-[8px] pr-[8px]">&#43; &nbsp; Contact</div>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <table className="table-fixed w-full border-collapse border border-[#303030]">
        <thead>
          <tr>
            <th className="text-left p-[10px] pl-[40px] border border-[#303030] text-[#808080]">
              PEOPLE
            </th>
            <th className="text-left p-[10px] pl-[40px] border border-[#303030] text-[#808080]">
              EMAIL
            </th>
            <th className="text-left p-[10px] pl-[40px] border border-[#303030] text-[#808080]">
              LOCATION
            </th>
            <th className="text-left p-[10px] pl-[40px] border border-[#303030] text-[#808080]">
              STATUS LAST 3 MONTHS
            </th>
            <th className="text-left p-[10px] pl-[40px] border border-[#303030] text-[#808080]">
              JOB
            </th>
            <th className="text-left p-[10px] pl-[40px] border border-[#303030] text-[#808080]">
              COMPANY
            </th>
            <th className="text-left p-[10px] pl-[40px] border border-[#303030] text-[#808080]">
              PHONE
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.people}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.email}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.location}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.status}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.job}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.company}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
