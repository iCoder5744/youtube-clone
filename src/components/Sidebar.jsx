"use client"; // ✅ Client Component

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import {
    Home as HomeIcon,
    ShopTwoOutlined as ShopTwoOutlinedIcon,
    SubscriptionsOutlined as SubscriptionsOutlinedIcon,
    HistoryOutlined as HistoryOutlinedIcon,
    PlaylistPlayOutlined as PlaylistPlayOutlinedIcon,
    OndemandVideoOutlined as OndemandVideoOutlinedIcon,
    WatchLaterOutlined as WatchLaterOutlinedIcon,
    ThumbUpOutlined as ThumbUpOutlinedIcon,
    WhatshotOutlined as WhatshotOutlinedIcon,
    ShoppingBagOutlined as ShoppingBagOutlinedIcon,
    LibraryMusicOutlined as LibraryMusicOutlinedIcon,
    MovieOutlined as MovieOutlinedIcon,
    SensorsOutlined as SensorsOutlinedIcon,
    SportsEsportsOutlined as SportsEsportsOutlinedIcon,
    NewspaperOutlined as NewspaperOutlinedIcon,
    SportsFootballOutlined as SportsFootballOutlinedIcon,
    SchoolOutlined as SchoolOutlinedIcon,
    CheckroomOutlined as CheckroomOutlinedIcon,
    PodcastsOutlined as PodcastsOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    FlagOutlined as FlagOutlinedIcon,
    HelpOutlineOutlined as HelpOutlineOutlinedIcon,
    FeedbackOutlined as FeedbackOutlinedIcon,
    FitScreen,
} from "@mui/icons-material";



const menuItems1 = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/shorts", icon: ShopTwoOutlinedIcon, label: "Shorts" },
    { href: "/subscriptions", icon: SubscriptionsOutlinedIcon, label: "Subscriptions" },
];

const profileItem = [
    { href: "/profile", label: "You", icon: ChevronRightOutlinedIcon }
];
const menuItems2 = [
    { href: "/history", icon: HistoryOutlinedIcon, label: "History" },
    { href: "/playlists", icon: PlaylistPlayOutlinedIcon, label: "Playlists" },
    { href: "/your-videos", icon: OndemandVideoOutlinedIcon, label: "Your Videos" },
    { href: "/watch-later", icon: WatchLaterOutlinedIcon, label: "Watch Later" },
    { href: "/liked-videos", icon: ThumbUpOutlinedIcon, label: "Liked Videos" },
];

const exploreItems = [
    { href: "/trending", icon: WhatshotOutlinedIcon, label: "Trending" },
    { href: "/shopping", icon: ShoppingBagOutlinedIcon, label: "Shopping" },
    { href: "/music", icon: LibraryMusicOutlinedIcon, label: "Music" },
    { href: "/movies", icon: MovieOutlinedIcon, label: "Movies" },
    { href: "/live", icon: SensorsOutlinedIcon, label: "Live" },
    { href: "/gaming", icon: SportsEsportsOutlinedIcon, label: "Gaming" },
    { href: "/news", icon: NewspaperOutlinedIcon, label: "News" },
    { href: "/sports", icon: SportsFootballOutlinedIcon, label: "Sports" },
    { href: "/courses", icon: SchoolOutlinedIcon, label: "Courses" },
    { href: "/fashion-beauty", icon: CheckroomOutlinedIcon, label: "Fashion & Beauty" },
    { href: "/podcasts", icon: PodcastsOutlinedIcon, label: "Podcasts" },
];

const settingsItems = [
    { href: "/settings", icon: SettingsOutlinedIcon, label: "Settings" },
    { href: "/report-history", icon: FlagOutlinedIcon, label: "Report History" },
    { href: "/help", icon: HelpOutlineOutlinedIcon, label: "Help" },
    { href: "/send-feedback", icon: FeedbackOutlinedIcon, label: "Send Feedback" },
];


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const pathname = usePathname(); // Get current route

    return (
        <div className="flex flex-col">
            <div className="fixed flex items-center justify-between  w-[150px] sm:w-[220px] bg-white px-4 py-4 sm:py-2 shadow-sm overflow-hidden">
                <div className="w-[58px] hidden sm:block">
                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className="w-[140px] h-5">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Website Logo" width={94} height={5}  className="overflow-x-hidden"/>
                    </Link>
                </div>
            </div>

            <div className={`hidden sm:block mt-14 bg-gray-50 transition-all duration-300 h-[calc(100vh - 14)] outset-shadow-xs ${isOpen ? "w-[220px]" : "w-0"} overflow-hidden hover:overflow-y-auto `}>

                <ul className="flex flex-col border-b border-gray-300 space-y-1 list-none mx-2 pt-2 pb-4">
                    {menuItems1.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}
                            className={`flex text-start items-center px-4 rounded-xl transition-all duration-200 
                            ${(pathname === href || (pathname === "/" && href === "/home")) ? "bg-gray-100" : "hover:bg-gray-200"}`}>
                            <Icon className="w-6 h-6" />
                            <li className="w-full pl-6 py-2 text-sm font-normal">{label}</li>
                        </Link>
                    ))}
                </ul>

                <ul className="flex flex-col list-none mx-2 pt-4">
                    {profileItem.map(({ href, label, icon: Icon }) => (
                        <Link key={href} href={href}
                            className={`flex justify-start items-center px-4 py-2 rounded-xl transition-all duration-200 
                            ${pathname === href ? "bg-gray-100" : "hover:bg-gray-200"}`}>
                            <li className="w-10 text-md font-semibold">{label}</li>
                            <Icon className="w-5 h-5" />
                        </Link>
                    ))}
                </ul>


                <ul className="flex flex-col border-b border-gray-300 space-y-1 list-none mx-2 pt-2 pb-4">
                    {menuItems2.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}
                            className={`flex text-start items-center px-4 rounded-xl transition-all duration-200 
                            ${pathname === href ? "bg-gray-100" : "hover:bg-gray-200"}`}>
                            <Icon className="w-6 h-6" />
                            <li className="w-full pl-6 py-2 text-sm font-normal">{label}</li>
                        </Link>
                    ))}
                </ul>

                <ul className="flex flex-col border-b border-gray-300 space-y-1 list-none mx-2 pt-2 pb-4">
                    <h1 className="w-full pl-4 py-2 text-md font-semibold">Explore</h1>
                    {exploreItems.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}
                            className={`flex text-start items-center pl-4 rounded-xl transition-all duration-200 
                            ${pathname === href ? "bg-gray-100" : "hover:bg-gray-200"}`}>
                            <Icon className="w-6 h-6" />
                            <li className=" w-full pl-6 py-2 text-sm font-normal">{label}</li>
                        </Link>
                    ))}
                </ul>

                <ul className="flex flex-col space-y-1 list-none mx-2 pt-2 mb-6">
                    {settingsItems.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}
                            className={` flex text-start items-center rounded-xl transition-all duration-200 px-4 
                            ${pathname === href ? "bg-gray-100" : "hover:bg-gray-200"}`}>
                            <Icon className="w-6 h-6" />
                            <li className="w-full pl-6 py-2 text-sm">{label}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar
