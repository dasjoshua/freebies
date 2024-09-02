import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="mx-auto px-20 py-10 flex flex-row items-center justify-between">
      {/* TITLE */}
      <h1 className="poppins-bold text-3xl text-amber-400">UTDFreebies</h1>
      {/* PAGES */}
      <div className="flex py-2 gap-8  text-2xl">
        <p>new</p>
        <p>browse</p>
        <p>upload</p>
      </div>

      {/* ICONS */}
      <div className="flex py-2 gap-12">
        <FaRegBell size="30" />
        <CgProfile size="30" />
      </div>
    </div>
  );
}

export default Navbar;
