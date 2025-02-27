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
import GoogleIcon from '@mui/icons-material/Google';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined'; import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { useSidebar } from './Sidebar/SidebarContext';

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isCreateDropdownVisible, setIsCreateDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const createDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (createDropdownRef.current && !createDropdownRef.current.contains(event.target)) {
        setIsCreateDropdownVisible(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownVisible(false);
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

  const toggleCreateDropdown = () => {
    setIsCreateDropdownVisible(!isCreateDropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  return (
    <div className='fixed flex flex-row w-full items-center justify-between mx-auto bg-white z-50'>
      {/* Left Side Content */}
      <div className="flex items-center justify-between px-4 py-4 sm:py-2">
        <div onClick={toggleSidebar} className="w-[58px] hidden sm:block">
          <IconButton>
            <MenuIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} /> {/* Force size */}
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
            <SearchRoundedIcon
              style={{ fontSize: '24px', minWidth: '60px', minHeight: '40px' }} // Force size
              className='border-l-2 h-10 py-2 font-light text-gray-400 bg-gray-100 hover:bg-gray-200 transition-all duration-200 border rounded-r-full cursor-pointer'
            />
          </div>
          <KeyboardVoiceOutlinedIcon
            style={{ fontSize: '24px', minWidth: '40px', minHeight: '40px' }} // Force size
            className='ml-3 p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-full cursor-pointer'
          />
        </div>

        {/* Visible in small screen */}
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
                  style={{ fontSize: '24px', minWidth: '40px', minHeight: '40px' }} // Force size
                  className='h-10 py-2 border-l font-light text-gray-400 cursor-pointer'
                  onClick={toggleSearch}
                />
              </div>
            </div>
          ) : (
            <SearchRoundedIcon
              style={{ fontSize: '24px', minWidth: '28px', minHeight: '28px' }} // Force size
              className='text-gray-400 cursor-pointer'
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
            style={{ textTransform: 'none', minWidth: '90px', minHeight: '40px', color: 'black' }} // Force size
            className="flex flex-row items-center text-center text-[12px] md:text-[14px] text-gray-600 font-medium rounded-full px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            onClick={toggleCreateDropdown}
          >
            <AddIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px', color: 'gray' }} /> {/* Force size */}
            <span className="hidden sm:inline">Create</span>
          </Button>

          {/* Dropdown Content */}
          {isCreateDropdownVisible && (
            <div className='absolute sm:w-[160px] md:w-[170px] xl:w-[180px] h-fit mt-2 p-2 gap-y-3 border rounded-md flex flex-col items-center justify-center shadow-md z-50 left-0'>
              <Link href="/upload-video" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                <VideoCameraBackOutlinedIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} /> {/* Force size */}
                <label className="text-[14px] md:text-[16px]">Upload Video</label>
              </Link>
              <Link href="/go-live" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                <SensorsOutlinedIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} /> {/* Force size */}
                <label className="text-[14px] md:text-[16px]">Go Live</label>
              </Link>
              <Link href="/create-post" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                <AddBoxOutlinedIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} /> {/* Force size */}
                <label className="text-[14px] md:text-[16px]">Create Post</label>
              </Link>
            </div>
          )}
        </div>

        {/* Notifications Icon */}
        <div className="hidden sm:block">
          <NotificationsNoneIcon
            style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} // Force size
            className="text-gray-500 cursor-pointer hover:text-gray-800"
          />
        </div>

        {/* Profile Image */}
        <div className="relative" ref={profileDropdownRef}>
          <div
            className="w-9 h-9 bg-gray-300 rounded-full my-1 cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </div>

          {isProfileDropdownVisible && (
            <div className='absolute w-[260px] md:w-[280px] h-fit mt-2 gap-y-1 border rounded-md flex flex-col items-start bg-white shadow-md z-50 right-0 md:right-10 top-8 md:top-0 max-h-[650px] overflow-hidden'>
              {/* User Profile Section (Sticky) */}
              <div className='sticky top-0 z-40 w-full h-[120px] border-b px-2 py-2 flex items-start justify-start gap-x-1 bg-white'>
                <div className='w-[16%] h-full py-2'>
                  <div className='w-[40px] h-[40px] rounded-full bg-gray-200'>
                    {profileImage && (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <div className='w-[80%] h-full p-2 flex flex-col'>
                  <div className='flex flex-col'>
                    <label>Shivam Yadav</label>
                    <label>@ShivamICoder</label>
                  </div>
                  <Link href="/view-channel" className='mt-4 text-sm font-semibold text-blue-500'>
                    <span>View Your Channel</span>
                  </Link>
                </div>
              </div>

              {/* User Settings Section (Scrollable) */}
              <div className='z-30 w-full overflow-hidden hover:overflow-y-auto'>
                {/* Account Settings Section */}
                <ul className='w-full flex flex-col gap-y-2 border-b px-2 py-3'>
                  <Link href="/account" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <GoogleIcon className='w-6 h-6 font-normal' />
                    <label className="text-[14px] md:text-[15px]">Google Account</label>
                  </Link>
                  <Link href="/switch-account" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <SwitchAccountOutlinedIcon className='w-6 h-6' />
                    <label className="text-[14px] md:text-[15px]">Switch account</label>
                  </Link>
                  <Link href="/sign-out" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <ExitToAppIcon className='w-6 h-6' />
                    <label className="text-[14px] md:text-[15px]">Sign out</label>
                  </Link>
                </ul>

                {/* YouTube Features Section */}
                <ul className='w-full flex flex-col gap-y-2 border-b px-2 py-3'>
                  <Link href="/youtube-studio" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <SubscriptionsOutlinedIcon className='w-6 h-6' />
                    <label className="text-[14px] md:text-[15px]">YouTube Studio</label>
                  </Link>
                  <Link href="/membership" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <MonetizationOnOutlinedIcon className='w-6 h-6' />
                    <label className="text-[14px] md:text-[15px]">Purchases and Memberships</label>
                  </Link>
                </ul>

                {/* Settings Section */}
                <ul className='w-full flex flex-col gap-y-2 border-b px-2 py-4'>
                  <Link href="/settings" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <SettingsOutlinedIcon className='w-6 h-6' />
                    <label className="text-[14px] md:text-[15px]">Settings</label>
                  </Link>
                </ul>

                {/* Help and Feedback Section */}
                <ul className='w-full flex flex-col gap-y-2 px-2 py-4'>
                  <Link href="/help" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <HelpOutlineOutlinedIcon className='w-6 h-6' />
                    <label className="text-[14px] md:text-[15px]">Help</label>
                  </Link>
                  <Link href="/feedback" className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                    <FeedbackOutlinedIcon className='w-6 h-6' />
                    <label className="text-[14px] md:text-[15px]">Send Feedback</label>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;