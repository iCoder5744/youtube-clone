"use client";

import { useSidebar } from '@/components/Sidebar/SidebarContext';
import React, {useState, useRef, useEffect } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Image from 'next/image';

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
  }
];

// // Shorts Data
const shortsData = [
  { id: 1, title: "Amazing wild elephant food request.#shorts...", views: "35k Views ", thumbnail: "/path/to/thumbnail1.jpg" },
  { id: 2, title: "Lali Bali Bindiya #viralvideo...", views: "37k Views ", thumbnail: "/path/to/thumbnail2.jpg" },
  { id: 3, title: "Truck driver Life mini vlog #truckdriver...", views: "25k Views ", thumbnail: "/path/to/thumbnail3.jpg" },
  { id: 4, title: "King Size Fish Fry...", views: "37k Views ", thumbnail: "/path/to/thumbnail4.jpg" },
  { id: 5, title: "Tamanna bhatiya Kolkata live...", views: "20k Views ", thumbnail: "/path/to/thumbnail5.jpg" },
  // Add more shorts data as needed
];





const Home = () => {
  const { isOpen } = useSidebar();
  const scrollRef = useRef(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const lastClickTime = useRef(0);
  const clickTimeout = useRef(null);

  // Function to scroll on arrow button click
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 3 : clientWidth / 3;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Handle wheel scroll (two finger scrolling)
    const handleWheelScroll = (event) => {
      if (event.deltaX !== 0) {
        // Let the natural horizontal scroll work
        return;
      }

      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    };

    // Handle mouse down for drag scrolling
    const handleMouseDown = (e) => {
      isMouseDown.current = true;
      startX.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;

      // Check for double click
      const clickTime = new Date().getTime();
      const timeDiff = clickTime - lastClickTime.current;

      if (timeDiff < 300) {
        // Double click detected
        const clickX = e.pageX - scrollContainer.getBoundingClientRect().left;
        const containerWidth = scrollContainer.clientWidth;

        if (clickX < containerWidth / 2) {
          scroll("left");
        } else {
          scroll("right");
        }

        // Clear any existing timeout to prevent single click
        if (clickTimeout.current) {
          clearTimeout(clickTimeout.current);
          clickTimeout.current = null;
        }
      } else {
        // Single click - set timeout to ensure we don't interfere with double click
        clickTimeout.current = setTimeout(() => {
          clickTimeout.current = null;
        }, 300);
      }

      lastClickTime.current = clickTime;
    };

    // Handle mouse move for drag scrolling
    const handleMouseMove = (e) => {
      if (!isMouseDown.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 2; // Multiplier for scroll speed
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    // Handle mouse up and mouse leave
    const handleMouseUpOrLeave = () => {
      isMouseDown.current = false;
    };

    // Add all event listeners
    scrollContainer.addEventListener("wheel", handleWheelScroll, { passive: false });
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUpOrLeave);
    scrollContainer.addEventListener("mouseleave", handleMouseUpOrLeave);

    // Handle touch events for mobile
    const handleTouchStart = (e) => {
      isMouseDown.current = true;
      startX.current = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isMouseDown.current) return;
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 2;
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);
    scrollContainer.addEventListener("touchend", handleMouseUpOrLeave);

    // Cleanup
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheelScroll);
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("mouseleave", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleMouseUpOrLeave);

      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
    };
  }, []);


  

  return (
    <div className='relative flex flex-col w-full'>
      {/* Fixed Slider Section */}
      <div
        className={`fixed top-12 h-14 flex items-center text-center bg-white z-30 transition-all duration-300 ${isOpen ? "lg:w-[calc(100%-220px)]" : "md:w-[calc(100%-80px)] w-full"
          }`}
      >

        {/* // left arrow button  */}
        <button
          onClick={() => scroll("left")}
          className="px-2 h-10 mx-2 bg-white hover:bg-gray-100 rounded-full"
        >
          <ArrowBackIosNewOutlinedIcon className='text-black max-w-5 max-h-5' />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-3 w-full overflow-x-auto no-scrollbar"
          style={{ scrollBehavior: "smooth", scrollbarWidth: 'none' }}
        >
          <style jsx>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

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

        {/* right arrow  */}
        <div className=" w-7 h-10 bg-white">
        </div>

      </div>

      {/* Content Section */}
      <div className='w-full min-h-screen mt-12 py-2 sm:py-3 px-2 md:px-4 lg:px-5 bg-white flex flex-col justify-center transition-all duration-300 z-10'>

        {/* popular vedios */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {videos.map((video, index) => (
            <div key={index} className='flex flex-col rounded-xl hover:shadow-md'>
              <div className='relative pb-[56.25%]'>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  title={video.title}
                  className='absolute w-full h-full rounded-t-xl hover:rounded-none transition-all duration-200'
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



        <div className="w-full h-fit my-4  border overflow-hidden">
          {/* Shorts Header */}
          <div className="flex items-center mb-1">
            <Image
              src="/images/youtube-shorts.jpg"
              alt="Shorts"
              width={90}
              height={80}
            />
          </div>

          {/* Shorts Container */}
          <div className="relative w-full h-full overflow-hidden">
            <div className="flex justify-center  gap-4 items-stretch">
              {shortsData.slice(0, 5).map((short) => (
                <div key={short.id} className="flex-shrink-0 grid w-[80%] sm:w-[30%] md:w-[30%] lg:w-[18%]">
                  <div className="relative w-full aspect-[13/16] sm:aspect-[9/16] bg-gray-300 rounded-lg mb-1 overflow-hidden">
                    <Image
                      src={short.thumbnail}
                      alt={short.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 justify-between h-[60px]">
                    <p className="text-sm font-medium text-black  ">{short.title}</p>
                    <span className="text-xs font-thin">{short.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;












