import React, { useState } from "react";
import DynamicLayout from "./DynamicLayout";

export default function Navbar() {
  const [firstDropDown, setFirstDropDown] = useState<boolean>(false);
  const [secondDropDown, setSecondFirstDropDown] = useState<boolean>(false);
  return (
    <div className="bg-white">
      <DynamicLayout border={true}>
        <div className="w-full flex justify-between">
          <div className="left flex font-bold relative">
            <p className="px-4 py-3 font-bold hover:text-blue-700 cursor-pointer">
              <a href={"/"}>Home</a>
            </p>
            <span
              className="relative"
              onMouseEnter={() => {
                setFirstDropDown(true);
              }}
              onMouseLeave={() => {
                setFirstDropDown(false);
              }}
            >
              <p className="px-4 py-3 font-bold cursor-pointer hover:text-blue-700">
                Manager
              </p>
              <div
                className={
                  " w-48 absolute top-full z-10 left-0 bg-white border border-slate-300 border-t-0 " +
                  (firstDropDown ? "block" : "hidden")
                }
              >
                <a href={"/"}>
                  <p className="py-[10px] px-[15px] hover:text-blue-700">
                    Users
                  </p>
                </a>
                <a href={"/"}>
                  <p className="py-[10px] px-[15px] hover:text-blue-700">
                    Groups and Tasks
                  </p>
                </a>
                <a href={"/"}>
                  <p className="py-[10px] px-[15px] hover:text-blue-700">
                    Announcements
                  </p>
                </a>
                <a href={"/"}>
                  <p className="py-[10px] px-[15px] hover:text-blue-700">
                    Periods
                  </p>
                </a>
                <a href={"/"}>
                  <p className="py-[10px] px-[15px] hover:text-blue-700">
                    Mikrotiks
                  </p>
                </a>
              </div>
            </span>
            <span
              className="relative"
              onMouseEnter={() => {
                setSecondFirstDropDown(true);
              }}
              onMouseLeave={() => {
                setSecondFirstDropDown(false);
              }}
            >
              <p className="px-4 py-3 font-bold cursor-pointer hover:text-blue-700">
                View
              </p>
              <div
                className={
                  " w-48 absolute top-full z-10 left-0 bg-white border border-slate-300 border-t-0 " +
                  (secondDropDown ? "block" : "hidden")
                }
              >
                <a href={"/"}>
                  <p className="py-[10px] px-[15px] hover:text-blue-700">
                    Feedbacks
                  </p>
                </a>
                <a href={"/"}>
                  <p className="py-[10px] px-[15px] hover:text-blue-700">
                    Executions
                  </p>
                </a>
              </div>
            </span>
            <p className="px-4 py-3 font-bold hover:text-blue-700 cursor-pointer">
              <a href={"/"}>Mikrotik Manager</a>
            </p>
          </div>

          <div className="right left px-4 py-3 font-bold hover:text-blue-700 cursor-pointer">
            <a href={"/"}>Sign Out</a>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
