import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className='fixed top-0 left-[140px] sm:left-[220px] right-0 flex items-center mt-1 justify-between bg-white z-50'>

      {/* Left Side Content */}
      <div className='flex items-center flex-1 max-w-[670px] ml-2 sm:ml-10 md:ml-24 xl:ml-32'>

        {/* Search Bar and Voice Icon - Hidden on smaller screens */}
        <div className='hidden sm:flex items-center w-full'>
          <div className='flex w-full rounded-full border border-gray-300'>
            <input
              type="text"
              placeholder='Search'
              className='w-full outline-none pl-4 py-2 bg-transparent text-gray-500'
            />
            <SearchRoundedIcon className='w-[40px] md:w-[70px] border-l-2 h-10 py-2 font-light text-gray-400 bg-gray-100 hover:bg-gray-200 transition-all duration-200 border rounded-r-full cursor-pointer' />
          </div>
          <KeyboardVoiceOutlinedIcon className='w-[40px] h-10 ml-3 p-2 text-gray-400 bg-gray-200 hover:bg-gray-100 transition-all duration-200 rounded-full cursor-pointer' />
        </div>

      </div>

      {/* Search Icon and Input - Visible only on smaller screens */}
      <div className='sm:hidden flex items-center justify-center'>
        {isSearchVisible ? (
          <div className='flex items-center w-full transition-all duration-300 ease-in-out transform translate-x-0'>
            <div className='flex w-full  rounded-full border border-gray-300 '>
              <input
                type="text"
                placeholder='Search'
                className='w-full outline-none pl-4 py-1 bg-transparent text-gray-500 transition-all duration-300'
              />
              <CloseIcon
                className='w-[40px] h-10 py-2 font-light text-gray-400 cursor-pointer'
                onClick={toggleSearch} // Close the search input when clicked
              />
            </div>
          </div>
        ) : (
          <SearchRoundedIcon
            className='w-7 h-7 text-gray-400 cursor-pointer hover:text-gray-600'
            onClick={toggleSearch} // Open the search input when clicked
          />
        )}
      </div>

      {/* Right Side (Create Button & Notifications) */}
      <div className="flex items-center space-x-1 md:space-x-3 xl:space-x-6 mx-2 xl:mx-8">

        {/* Hide Create Button on smaller screens */}
        <div className="hidden sm:block">
          <Button
            className="flex flex-row items-center text-center text-[12px] md:text-[14px] text-gray-600 font-semibold rounded-full px-2 py-1 bg-gray-200 hover:bg-gray-300 transition-all duration-200"
          >
            <AddIcon className='text-gray-600 text-[18px] md:text-[20px]' />
            <span className="hidden sm:inline">Create</span>
          </Button>
        </div>

        {/* Hide Notifications Icon on smaller screens */}
        <div className="hidden sm:block">
          <NotificationsNoneIcon className="text-[24px] md:text-[28px] text-gray-500 cursor-pointer hover:text-gray-800" />
        </div>

        {/* Profile Avatar Placeholder - Always Visible */}
        <div className="w-9 h-9 bg-gray-300 rounded-full my-1"></div>
      </div>
    </div>
  );
};

export default Navbar;