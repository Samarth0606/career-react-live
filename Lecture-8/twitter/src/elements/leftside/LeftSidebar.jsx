import React from "react";
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {HiHashtag} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'



const LeftSidebar = () => {

  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div className="mt-6 flex flex-col space-y-4">
        <Link to="/">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <AiFillHome fontSize="large" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <HiHashtag fontSize="large" />
            <p>Explore</p>
          </div>
        </Link>
        <Link to={'/profile/:id'}>
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <BsFillPersonFill fontSize="large" />
            <p>Profile</p>
          </div>
        </Link>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="font-bold">username</p>
          <p className="font-bold">@username</p>
        </div>
        <div>
          <Link to="signin">
            <button className="bg-red-500 px-4 py-1 my-4 mx-2 text-white rounded-full">
              Logout
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default LeftSidebar;
