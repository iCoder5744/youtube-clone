"use client";

import { useSidebar } from '@/components/Sidebar/SidebarContext';
import React, { useRef } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const categories = [
  "All", "Music", "Latest", "Recent", "Mawra Hocane", "Masala films",
  "Mixes", "Ajay Devgn", "Electronic circuits", "Akshay Kumar", "Podcasts",
  "Aamir Khan", "Samay Rana", "Abhay Bhasker", "Lion", "Aamir Khan"
];

const videos = [
  {
    thumbnail: "/images/image-1.jpg", // Replace with actual image paths
    title: "Build with Gemini",
    description: "Plug Gemini into your workflow ....",
    uploader: "Google AI for Developers",
    views: "Sponsored"
  },
  {
    thumbnail: "/images/image-2.jpg",
    title: "Dilwale (HD) (1994) Full Hindi Movie",
    description: "Ajay Devgn, Suniel Shetty, Raveena...",
    uploader: "Movies Shows",
    views: "54M views"
  },
  {
    thumbnail: "/images/image-3.jpg",
    title: "दुश्मन मिले सवेरे मगर मतलबी यार न मिले",
    description: "dushman mile savere magar matlabi...",
    uploader: "Shivam Pandey",
    views: "56K views"
  },
  {
    thumbnail: "/images/image-4.jpg",
    title: "Ram Setu (HD) Full Hindi Movie",
    description: "Akshay Kumar, Raveena...",
    uploader: "Goldmines Bollywood",
    views: "54M views"
  },
  {
    thumbnail: "/images/image-5.jpg",
    title: "Chase Full Movie ",
    description: "Jack Fernaldish, lion seni .......",
    uploader: "Block Baster",
    views: "56K views"
  },
  {
    thumbnail: "/images/image-6.jpg",
    title: "Cradle of Faith",
    description: "mackfornia assmina ...",
    uploader: "Block Baster",
    views: "56K views"
  },
  {
    thumbnail: "/images/image-4.jpg",
    title: "Ram Setu (HD) Full Hindi Movie",
    description: "Akshay Kumar, Raveena...",
    uploader: "Goldmines Bollywood",
    views: "54M views"
  },
  {
    thumbnail: "/images/image-5.jpg",
    title: "Chase Full Movie ",
    description: "Jack Fernaldish, lion seni .......",
    uploader: "Block Baster",
    views: "56K views"
  },
  {
    thumbnail: "/images/image-6.jpg",
    title: "Cradle of Faith",
    description: "mackfornia assmina ...",
    uploader: "Block Baster",
    views: "56K views"
  }
];

const Home = () => {
  const { isOpen } = useSidebar();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 3 : clientWidth / 3;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className='relative flex flex-col w-full '>
      {/* Fixed Slider Section */}
      <div
        className={`fixed top-14 h-14 w-ful flex items-center text-center bg-white z-30 transition-all duration-300${
          isOpen ? "lg:ml-[220px]"  : "md:ml-[80px]"
        }`}
      >
        <button onClick={() => scroll("left")} className="px-2 h-10 mx-2 bg-white">
          <ArrowBackIosNewOutlinedIcon className='text-black max-w-5 max-h-5' />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-3 w-full overflow-x-auto"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{` div::-webkit-scrollbar { display: none; } `}</style>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`px-3 py-2 rounded-xl text-sm font-bold cursor-pointer whitespace-nowrap
                ${index === 0 ? "bg-gray-800 text-white" : "bg-gray-100 hover:bg-gray-200 text-black"}`}
            >
              {category}
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="px-2 h-10 mx-2">
          <ArrowForwardIosOutlinedIcon className='text-black w-5 h-5' />
        </button>
      </div>

      {/* Content Section */}
      <div className='w-full min-h-screen mt-14 py-2 px-4 sm:py-4 md:px-4 lg:px-6 flex justify-center transition-all duration-300 z-10'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4'>
          {videos.map((video, index) => (
            <div key={index} className='flex flex-col rounded-xl hover:shadow-md'>
              <div className='relative pb-[56.25%]'>
                <img src={video.thumbnail}
                  title={video.title}
                  className='absolute  w-full h-full rounded-t-xl hover:rounded-none transition-all duration-200'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
              <div className='p-2 flex'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='ml-2'>
                  <h3 className='text-sm font-bold text-black'>{video.title}</h3>
                  <p className='text-xs text-gray-800'>{video.description}</p>
                  <div className='flex flex-col'>
                    <p className='text-xs text-gray-600'>{video.uploader}</p>
                    <p className='text-xs text-gray-500'>{video.views}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
