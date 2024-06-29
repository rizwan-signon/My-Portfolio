import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";

export default function Navbar() {
  const [showmenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu((showmenu) => !showmenu);
  };
  return (
    <>
      <nav className="navbar ">
        <Link
          to="https://www.linkedin.com/in/rizwan-hameed-281567257/"
          className=" px-4 text-3xl"
        >
          My LinkedIn
        </Link>
        <div onClick={handleClick} className="toggle-btn">
          {showmenu ? <CgCloseR /> : <IoMdMenu />}
        </div>
        {showmenu && (
          <ul className={`list ${showmenu && "hide"}`}>
            <li className="list-items">
              <Link className="link" to="/home">
                Home
              </Link>
            </li>
            <li className="list-items">
              <Link className="link" to="/aboutme">
                About Me
              </Link>
            </li>
            <li className="list-items">
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="list-items">
              <Link className="link" to="/collabs">
                Collaboration
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </>
  );
}
