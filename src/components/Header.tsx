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
    <header className="flex w-full h-16 bg-white px-4 justify-between items-center">
      <div>
        <img src={logoMobile} alt="mobile logo" />
        <h1>No Board</h1>
        <img src={dropdown} alt="dropdown" />
        <button>
          <img src={addTask} alt="add task" />
        </button>
        <img src={verticalElipsis} alt="edit board" />
      </div>
    </header>
  );
};

export default Header;
