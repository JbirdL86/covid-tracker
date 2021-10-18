import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { MdCoronavirus } from 'react-icons/md';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';

const NavBar = () => (
  <header>
    <nav className="px-4 text-white intense-magenta d-flex justify-content-between">
      <Link to="/" className="text-decoration-none text-white fw-bold d-flex align-items-center justify-content-center">
        <FaAngleLeft />
        <span>Main</span>
      </Link>
      <h3 className="m-0 d-flex align-items-center justify-content-center">
        <MdCoronavirus />
        <span className="ms-2">Virus News</span>
      </h3>
      <span>
        <FaMicrophone />
        <span className="ms-4">
          <IoMdSettings />
        </span>
      </span>
    </nav>
  </header>
);
export default NavBar;
