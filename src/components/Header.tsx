import React, { useEffect, useState } from "react";
import logoMobile from "../assets/logo-mobile.svg";
import dropdown from "../assets/icon-chevron-down.svg";
import verticalElipsis from "../assets/icon-vertical-ellipsis.svg";
import addTask from "../assets/icon-add-task-mobile.svg";

type Props = object;

const Header = (props: Props) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <header className="flex fixed w-full h-16 bg-white px-4 justify-between items-center">
      <div className="flex gap-4 items-center">
        <img className="w-6 h-6" src={logoMobile} alt="mobile logo" />
        <div className="flex gap-2 items-center cursor-pointer">
          <h1 className="text-[18px] font-bold">No Board</h1>
          <img className="w-3 h-2" src={dropdown} alt="dropdown" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-12 h-8 rounded-[24px] bg-[#635FC7] flex justify-center items-center cursor-pointer">
          <img src={addTask} alt="add task" />
        </button>
        <img
          className="h-4 cursor-pointer"
          src={verticalElipsis}
          alt="edit board"
        />
      </div>
    </header>
  );
};

export default Header;
