import Image from "next/image";
import Modal from './modal';
import CreateContact from './createContact'
import { useState, useEffect } from "react";
import { getCompany } from "../api/register"
import { useRouter } from 'next/router';

const CompanyName = ({ companyId }) => {
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const company = await getCompany(companyId);
      setCompanyName(company.name);
    };
    fetchData();
  }, [companyId]);

  return <span>{companyName}</span>;
};

const Table = ({ data, selectedGroup }) => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState('');

  const handleOpenModal = (item) => {
    setSelectedRow(item)
    // localStorage.setItem("selectedRow", JSON.stringify(item))
    // router.push('/contactDetail')
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleAddOpenModal = () => {
    setIsAddModal(true);
  };

  const handleAddCloseModal = () => {
    setIsAddModal(false);
  };

  const statusColor = (status) => {
    if(status.toLowerCase() === 'to contact') {
      return 'bg-[#D688631A] text-[#D68863]'
    } else if(status.toLowerCase() === 'phoned') {
      return 'bg-[#5DB5271A] text-[#5DB527]'
    } else if(status.toLowerCase() === 'meet-up') {
      return 'bg-[#2169D61A] text-[#2169D6]'
    }
    return 'bg-[#D688631A] text-[#D68863]'
  }

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
          <div className="font-medium">{`${data.length} PEOPLE`}</div>
        </nav>
        </div>
        <div className="ml-auto flex items-center">
          <span className="ml-2 text-gray-800 font-medium pr-[10px] inline-flex text-white">
            <div className="m-auto text-[#808080]">Filter by &nbsp;</div><div className="border border-10 border-[#303030] rounded-[8px] p-[4px] pl-[8px] pr-[8px] text-white">Email all </div>
          </span>
        <div onClick={handleAddOpenModal} className="cursor-pointer text-xl text-right flex-1 border border-10 border-[#303030] rounded-[8px] p-[4px] pl-[8px] pr-[8px]">&#43; &nbsp; Contact</div>
        </div>
      </header>
      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={handleCloseModal} 
        selectedRow={selectedRow}/>
      <CreateContact 
        isOpen={isAddModal} 
        onRequestClose={handleAddCloseModal} 
        selectedGroup={selectedGroup}/> 
      {data.length ? <table className="table-fixed w-full border-collapse border border-[#303030]">
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
            <tr key={item.id} className="cursor-pointer" onClick={() => handleOpenModal(item)}>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
              <Image
                  src={`http://localhost:4001/${item.image}`}
                  alt="Sidebar Logo"
                  className="inline-flex rounded-full w-[20px] h-[20px] mr-[5px]"
                  width={20}
                  height={20}
                  priority
                />
                {item.name}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030] whitespace-nowrap overflow-hidden">
                {item.email}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.location}
              </td>
              <td className={`p-[10px] pl-[40px] border border-[#303030]`}>
                <div className={`p-[5px] rounded-md w-min ${statusColor(item.status)}`}>
                {item.status}
                </div>
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.job}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {<CompanyName companyId={item.company_id[0]} />}
              </td>
              <td className="p-[10px] pl-[40px] border border-[#303030]">
                {item.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table> :
       <div className="w-full text-center pt-[40px]">
        No Records Found!
        </div>}
    </>
  );
};

export default Table;
