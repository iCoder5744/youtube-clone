"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { IconButton, Button } from "@mui/material";
import {
  SearchRounded as SearchRoundedIcon,
  KeyboardVoiceOutlined as KeyboardVoiceOutlinedIcon,
  Add as AddIcon,
  NotificationsNone as NotificationsNoneIcon,
  SensorsOutlined as SensorsOutlinedIcon,
  VideoCameraBackOutlined as VideoCameraBackOutlinedIcon,
  AddBoxOutlined as AddBoxOutlinedIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
  Google as GoogleIcon,
  SwitchAccountOutlined as SwitchAccountOutlinedIcon,
  ExitToApp as ExitToAppIcon,
  SubscriptionsOutlined as SubscriptionsOutlinedIcon,
  MonetizationOnOutlined as MonetizationOnOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  FeedbackOutlined as FeedbackOutlinedIcon,
} from '@mui/icons-material';
import { useSidebar } from './Sidebar/SidebarContext';

const Navbar = ({
  profileData = {
    name: "Shivam Yadav",
    username: "@ShivamICoder",
    profileImage: null, // Default to null, can be overridden
  },
  createDropdownOptions = [
    {
      icon: <VideoCameraBackOutlinedIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} />,
      label: "Upload Video",
      href: "/upload-video",
    },
    {
      icon: <SensorsOutlinedIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} />,
      label: "Go Live",
      href: "/go-live",
    },
    {
      icon: <AddBoxOutlinedIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} />,
      label: "Create Post",
      href: "/create-post",
    },
  ],
  profileDropdownOptions = {
    account: [
      {
        icon: <GoogleIcon className='w-6 h-6 font-normal' />,
        label: "Google Account",
        href: "/account",
      },
      {
        icon: <SwitchAccountOutlinedIcon className='w-6 h-6' />,
        label: "Switch account",
        href: "/switch-account",
      },
      {
        icon: <ExitToAppIcon className='w-6 h-6' />,
        label: "Sign out",
        href: "/sign-out",
      },
    ],
    youtubeFeatures: [
      {
        icon: <SubscriptionsOutlinedIcon className='w-6 h-6' />,
        label: "YouTube Studio",
        href: "/youtube-studio",
      },
      {
        icon: <MonetizationOnOutlinedIcon className='w-6 h-6' />,
        label: "Purchases and Memberships",
        href: "/membership",
      },
    ],
    settings: [
      {
        icon: <SettingsOutlinedIcon className='w-6 h-6' />,
        label: "Settings",
        href: "/settings",
      },
    ],
    helpAndFeedback: [
      {
        icon: <HelpOutlineOutlinedIcon className='w-6 h-6' />,
        label: "Help",
        href: "/help",
      },
      {
        icon: <FeedbackOutlinedIcon className='w-6 h-6' />,
        label: "Send Feedback",
        href: "/feedback",
      },
    ],
  },
}) => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCreateDropdownVisible, setIsCreateDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const createDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) profileData.profileImage = savedImage;
  }, [profileData]);

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleCreateDropdown = () => setIsCreateDropdownVisible(!isCreateDropdownVisible);
  const toggleProfileDropdown = () => setIsProfileDropdownVisible(!isProfileDropdownVisible);

  return (
    <div className='fixed flex flex-row w-full items-center justify-between mx-auto bg-white z-50'>
      {/* Left Side Content */}
      <div className="flex items-center justify-between px-4 py-4 sm:py-2">
        <div onClick={toggleSidebar} className="w-[58px] hidden sm:block">
          <IconButton>
            <MenuIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }} />
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
              style={{ fontSize: '24px', minWidth: '60px', minHeight: '40px' }}
              className='border-l-2 h-10 py-2 font-light text-gray-400 bg-gray-100 hover:bg-gray-200 transition-all duration-200 border rounded-r-full cursor-pointer'
            />
          </div>
          <KeyboardVoiceOutlinedIcon
            style={{ fontSize: '24px', minWidth: '40px', minHeight: '40px' }}
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
                  style={{ fontSize: '24px', minWidth: '40px', minHeight: '40px' }}
                  className='h-10 py-2 border-l font-light text-gray-400 cursor-pointer'
                  onClick={toggleSearch}
                />
              </div>
            </div>
          ) : (
            <SearchRoundedIcon
              style={{ fontSize: '24px', minWidth: '28px', minHeight: '28px' }}
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
            style={{ textTransform: 'none', minWidth: '90px', minHeight: '40px', color: 'black' }}
            className="flex flex-row items-center text-center text-[12px] md:text-[14px] text-gray-600 font-medium rounded-full px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            onClick={toggleCreateDropdown}
          >
            <AddIcon style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px', color: 'gray' }} />
            <span className="hidden sm:inline">Create</span>
          </Button>

          {/* Dropdown Content */}
          {isCreateDropdownVisible && (
            <div className='absolute sm:w-[160px] md:w-[170px] xl:w-[180px] h-fit mt-2 p-2 gap-y-3 border rounded-md flex flex-col items-center justify-center shadow-md z-50 left-0'>
              {createDropdownOptions.map((option, index) => (
                <Link key={index} href={option.href} className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                  {option.icon}
                  <label className="text-[14px] md:text-[16px]">{option.label}</label>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Notifications Icon */}
        <div className="hidden sm:block">
          <NotificationsNoneIcon
            style={{ fontSize: '24px', minWidth: '24px', minHeight: '24px' }}
            className="text-gray-500 cursor-pointer hover:text-gray-800"
          />
        </div>

        {/* Profile Image */}
        <div className="relative" ref={profileDropdownRef}>
          <div
            className="w-9 h-9 bg-gray-300 rounded-full my-1 cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            {profileData.profileImage && (
              <img
                src={profileData.profileImage}
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
                    {profileData.profileImage && (
                      <img
                        src={profileData.profileImage}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <div className='w-[80%] h-full p-2 flex flex-col'>
                  <div className='flex flex-col'>
                    <label>{profileData.name}</label>
                    <label>{profileData.username}</label>
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
                  {profileDropdownOptions.account.map((option, index) => (
                    <Link key={index} href={option.href} className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                      {option.icon}
                      <label className="text-[14px] md:text-[15px]">{option.label}</label>
                    </Link>
                  ))}
                </ul>

                {/* YouTube Features Section */}
                <ul className='w-full flex flex-col gap-y-2 border-b px-2 py-3'>
                  {profileDropdownOptions.youtubeFeatures.map((option, index) => (
                    <Link key={index} href={option.href} className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                      {option.icon}
                      <label className="text-[14px] md:text-[15px]">{option.label}</label>
                    </Link>
                  ))}
                </ul>

                {/* Settings Section */}
                <ul className='w-full flex flex-col gap-y-2 border-b px-2 py-4'>
                  {profileDropdownOptions.settings.map((option, index) => (
                    <Link key={index} href={option.href} className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                      {option.icon}
                      <label className="text-[14px] md:text-[15px]">{option.label}</label>
                    </Link>
                  ))}
                </ul>

                {/* Help and Feedback Section */}
                <ul className='w-full flex flex-col gap-y-2 px-2 py-4'>
                  {profileDropdownOptions.helpAndFeedback.map((option, index) => (
                    <Link key={index} href={option.href} className='w-full px-2 py-2 gap-x-4 flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer'>
                      {option.icon}
                      <label className="text-[14px] md:text-[15px]">{option.label}</label>
                    </Link>
                  ))}
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