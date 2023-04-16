import ReactModal from "react-modal";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TabMenu from "./tabmenu";

ReactModal.setAppElement("#__next");

function useClickOutside(ref, handleClick) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClick();
        }
      }
  
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref, handleClick]);
  }

function Modal({ isOpen, onRequestClose }) {
  const [name, setName] = useState("Tempp");
  const ref = useRef(null);

  function handleClick() {
    console.log("Clicked outside!");
    onRequestClose();
  }

  useClickOutside(ref, handleClick);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted name: ${name}`);
    // onRequestClose();
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted name New: ${name}`);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="p-0"
    >
      <div className="bg-[#000000] w-full h-full p-[20px]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 divide-x w-full">
            <div className="items-center justify-center mx-auto pt-[22px]">
              <div className="grid grid-cols-2 divide-x w-full">
                <div className="flex items-center justify-center">
                  <Image
                    src="/contact_default.svg"
                    alt="Login Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </div>

              <h1 className="text-3xl text-left pt-[11px]">Gabriele Morace</h1>
              <p className="text-left">#stanford &nbsp; #stanford</p>
              <form onSubmit={handleFormSubmit} className="text-left pt-[32px]">
                <div className="pb-[32px]">
                  <label className="pb-[6px] text-[#6A6A6A]" htmlFor="email">
                    How did we meet?
                  </label>
                  <p className="text-left text-xl">
                    We met at an event in Paris introduced by Nico and hit it
                    off immediately
                  </p>
                  {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                </div>
                <div className="grid grid-cols-2 divide-x w-full">
                  <div className=" border-none border-0 ">
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Location
                      </label>
                      <p className="text-left text-xl">San Francisco</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Phone number
                      </label>
                      <p className="text-left text-xl">0034&nbsp;234&nbsp;987&nbsp;234</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Job
                      </label>
                      <p className="text-left text-xl">Graphic Designer</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Connection
                      </label>
                      <p className="text-left text-xl"><b>IE University</b>&nbsp; MBA-2022</p>
                      <p className="text-left text-xl"><b>Stanford University</b>&nbsp; BBA-2020</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                  </div>
                  <div className=" border-none border-0 ">
                  <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Birthday
                      </label>
                      <p className="text-left text-xl">10th September</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <p className="text-left text-xl">jobie.contact@gmail.com</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Connection
                      </label>
                      <p className="text-left text-xl">@nico_rose</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                    <div className="pb-[32px]">
                      <label
                        className="pb-[6px] text-[#6A6A6A]"
                        htmlFor="email"
                      >
                        Company
                      </label>
                      <p className="text-left text-xl"><b>Nike</b>&nbsp; Current</p>
                      <p className="text-left text-xl"><b>Flicker</b>&nbsp; 2018-2020</p>
                      {/* <input
                type="name"
                className="text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
              /> */}
                    </div>
                  </div>
                </div>

                {/* <div>
                  <button
                    onClick={handleSubmit}
                    className="text-xl border border-slate-300 rounded-md p-2 w-full border-none"
                    style={{ "background-color": "#7F56D9" }}
                  >
                    Get Started 1111
                  </button>
                </div> */}
              </form>
            </div>
            <div className="pl-[48px]">
              <TabMenu />
            </div>
          </div>
        </form>
      </div>
    </ReactModal>
  );
}

export default Modal;
