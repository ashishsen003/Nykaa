import React from "react";
import analytics from "../assets/clipboard-tick.svg";
import dashboard from "../assets/element-3.svg";
import logout from "../assets/setting-2.svg";

const Sidebar = () => {
  return (
    <div className=" bg-white py-16 px-8  ">
      <p className="text-blue-800 text-2xl font-medium font-['Poppins']">
        Nyka Dashboard
      </p>

      <div className="py-10 px-4 pb-7 flex-col justify-start items-start gap-96 inline-flex">
        <div className="flex-col justify-start items-start gap-10 flex">
          <div className="h-6 relative">
            <div>
              <img src={dashboard} alt="" />
            </div>
            <div className="left-[39px] top-0 absolute text-blue-600 text-base font-normal font-['Poppins'] tracking-tight">
              Dashboard
            </div>
            <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
              <div className="w-6 h-6 relative"></div>
            </div>
          </div>
          <div className="opacity-60 h-6 relative">
            <div>
              <img src={analytics} alt="" />
            </div>
            <div className="left-[40px] top-0 absolute text-black text-base font-normal font-['Poppins'] tracking-tight">
              Analytics
            </div>
            <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
              <div className="w-6 h-6 relative"></div>
            </div>
          </div>
          <div className="opacity-60 h-6 relative">
            <div>
              <img src={logout} alt="" />
            </div>
            <div className="left-[40px] top-0 absolute text-neutral-900 text-base font-normal font-['Poppins'] tracking-tight">
              Logout
            </div>
            <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
              <div className="w-6 h-6 relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
