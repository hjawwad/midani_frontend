import { useState } from "react";
import Image from "next/image";

const Sidebar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[307px] min-w-[307px] p-[50px] border border-[#303030]">
      <div className="flex w-full pb-[30px]">
        <div className="text-xl flex-1 cursor-pointer" onClick={toggleDropdown}>
          &#9660;&nbsp; <span>Contact</span>
        </div>
        <div className="text-xl text-right flex-1">&#43;</div>
      </div>
      {isOpen && (
        <div>
          <div className="pt-[30px] pb-[30px]"> 
            <div className="flex w-full">
              <div className="text-base ">
                <Image
                  src="/sidebar-icon.svg"
                  alt="Sidebar Logo"
                  className="inline-flex"
                  width={20}
                  height={20}
                  priority
                />
                &nbsp; <span>Graphic Designers</span>
              </div>
              <div className="text-base text-right text-[#808080] flex-1">12</div>
            </div>
          </div>
          <div className="pt-[30px] pb-[30px]">
            <div className="flex w-full">
              <div className="text-base ">
                <Image
                  src="/sidebar-icon.svg"
                  alt="Sidebar Logo"
                  className="inline-flex"
                  width={20}
                  height={20}
                  priority
                />
                &nbsp; <span>Madrid Class</span>
              </div>
              <div className="text-base text-right text-[#808080] flex-1">15</div>
            </div>
          </div>
          <div className="pt-[30px] pb-[30px]">
            <div className="flex w-full">
              <div className="text-base ">
                <Image
                  src="/sidebar-icon.svg"
                  alt="Sidebar Logo"
                  className="inline-flex"
                  width={20}
                  height={20}
                  priority
                />
                &nbsp; <span>AI Experts</span>
              </div>
              <div className="text-base text-right text-[#808080] flex-1">24</div>
            </div>
          </div>
          <div className="pt-[30px] pb-[30px]">
            <div className="flex w-full">
              <div className="text-base ">
                <Image
                  src="/sidebar-icon.svg"
                  alt="Sidebar Logo"
                  className="inline-flex"
                  width={20}
                  height={20}
                  priority
                />
                &nbsp; <span>Crypto Experts</span>
              </div>
              <div className="text-base text-right text-[#808080] flex-1">1</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
