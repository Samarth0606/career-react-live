import React from "react";
import {BiSearchAlt2} from 'react-icons/bi'
import {BsStar} from 'react-icons/bs'

const Navbar = () => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
      <div className="mx-auto md:mx-0">
        <img
          src="/twitter-logo.png"
          alt="Twitter Logo"
          width={"40px"}
          className="ml-8"
        />
      </div>

      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Home</h2>
          <BsStar />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <BiSearchAlt2 className="absolute m-3" />
        <input type="text" className="bg-blue-100 rounded-full py-2 px-4" />
      </div>
    </div>
  );
};

export default Navbar;
