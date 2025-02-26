"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from './Sidebar/SidebarContext';

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isCreateDropdownVisible, setIsCreateDropdownVisible] = useState(false); // State for Create dropdown
  const fileInputRef = useRef(null);
  const createDropdownRef = useRef(null); // Ref for Create dropdown

  // Load profile image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (createDropdownRef.current && !createDropdownRef.current.contains(event.target)) {
        setIsCreateDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setProfileImage(imageUrl);
        localStorage.setItem('profileImage', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleCreateDropdown = () => {
    setIsCreateDropdownVisible(!isCreateDropdownVisible);
  };

  return (
    <div className='fixed flex flex-row w-full items-center justify-between mx-auto bg-white z-50'>
      {/* Left Side Content */}
      <div className="flex items-center justify-between px-4 py-4 sm:py-2">
        <div onClick={toggleSidebar} className="w-[58px] hidden sm:block">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="flex items-center justify-start w-[120px] h-full">
          <Link href="/">
            <Image src="/images/logo.png" alt="Website Logo" width={94} height={5} className="overflow-x-hidden" />
          </Link>
        </div>
      </div>

      {/* Middle Content */}
      <div className='flex items-center flex-1 max-w-[670px] ml-2 sm:ml-10 md:ml-24 xl:ml-32'>
        <div className='hidden sm:flex items-center w-full'>
          <div className='flex w-full rounded-full border border-gray-300 bg-white'>
            <input
              type="text"
              placeholder='Search'
              className='w-full outline-none pl-4 py-2 bg-transparent text-gray-500'
            />
            <SearchRoundedIcon className='w-[40px] md:w-[70px] border-l-2 h-10 py-2 font-light text-gray-400 bg-gray-100 hover:bg-gray-200 transition-all duration-200 border rounded-r-full cursor-pointer' />
          </div>
          <KeyboardVoiceOutlinedIcon className='w-[40px] h-10 ml-3 p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-full cursor-pointer' />
        </div>

        {/* ----------------- visible in small screen -------------------   */}
        <div className='sm:hidden w-full flex items-center justify-end mt-1'>
          {isSearchVisible ? (
            <div className='flex items-center w-[100%] transition-all duration-300 ease-in-out'>
              <div className='flex w-full rounded-full border border-gray-300 transition-all duration-300'>
                <input
                  type="text"
                  placeholder='Search'
                  className='w-full outline-none pl-4 py-1 bg-transparent text-gray-500 transition-all duration-300'
                />
                <CloseIcon
                  className='w-[40px] h-10 py-2 border-l font-light text-gray-400 cursor-pointer'
                  onClick={toggleSearch}
                />
              </div>
            </div>
          ) : (
            <SearchRoundedIcon
              className='w-7 h-7 text-gray-400 cursor-pointer'
              onClick={toggleSearch}
            />
          )}
        </div>
      </div>

      {/* Right Side (Create Button & Notifications) */}
      <div className="flex items-center space-x-1 md:space-x-3 xl:space-x-6 mx-4 md:mx-6 xl:mx-8">
        {/* Create Button with Dropdown */}
        <div className="hidden sm:block relative" ref={createDropdownRef}>
          <Button
            style={{ textTransform: 'none' }}
            className="flex flex-row items-center text-center text-[12px] md:text-[14px] text-gray-600 font-semibold rounded-full px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            onClick={toggleCreateDropdown}
          >
            <AddIcon className='text-gray-500 text-[16px] font-extralight md:text-[20px]' />
            <span className="hidden sm:inline">Create</span>
          </Button>

          {/* Dropdown Content */}
          {isCreateDropdownVisible && (
            <div className='absolute sm:w-[154px] md:w-[170px] xl:w-[180px] h-fit mt-2 p-2 gap-y-3 border rounded-md flex flex-col items-center justify-center shadow-lg z-50 -left-1 md:left-0'>
              <div className='w-full px-2 list-none py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                <VideoCameraBackOutlinedIcon className='text-gray-600 w-5 h-5 md:w-6 md:h-6' />
                <li className="text-[14px] md:text-[16px]">Upload Video</li>
              </div>
              <div className='w-full px-2 list-none py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                <SensorsOutlinedIcon className='text-gray-600 w-5 h-5 md:w-6 md:h-6' />
                <li className="text-[14px] md:text-[16px]">Go Live</li>
              </div>
              <div className='w-full px-2 list-none py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                <AddBoxOutlinedIcon className='text-gray-600 w-5 h-5 md:w-6 md:h-6' />
                <li className="text-[14px] md:text-[16px]">Create Post</li>
              </div>
            </div>
          )}
        </div>

        {/* Notifications Icon */}
        <div className="hidden sm:block">
          <NotificationsNoneIcon className="text-[24px] md:text-[28px] text-gray-500 cursor-pointer hover:text-gray-800" />
        </div>

        {/* Profile Image */}
        <div
          className="w-9 h-9 bg-gray-300 rounded-full my-1 cursor-pointer"
          onClick={handleProfileClick}
        >
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default Navbar;