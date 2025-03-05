"use client"; // ✅ Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useSidebar } from "./SidebarContext";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
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
} from "@mui/icons-material";
import { useEffect, useRef } from "react";

const menuItems1 = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/shorts", icon: ShopTwoOutlinedIcon, label: "Shorts" },
    { href: "/subscriptions", icon: SubscriptionsOutlinedIcon, label: "Subscriptions" },
];

const profileItem = [
    { href: "/profile", label: "You", icon: ChevronRightOutlinedIcon }
];

// Icons to show when sidebar is hidden (Large screens)
const mainIcon = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/shorts", icon: ShopTwoOutlinedIcon, label: "Shorts" },
    { href: "/subscriptions", icon: SubscriptionsOutlinedIcon, label: "Subscriptions" },
    { href: "/profile", icon: AccountCircleOutlinedIcon, label: "You" }
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
    const { isOpen, closeSidebar } = useSidebar(); // Add closeSidebar
    const pathname = usePathname(); // Get current route
    const sidebarRef = useRef(null);

    // Close Siderbar When Clicking OurtSide 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSidebar(); // close the sidebar
            }
        };

        // Add Event listner if sidebar is open 
        if(isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener("mousedown" , handleClickOutside);
        };
    }, [isOpen, closeSidebar]);

    return (
        <>
            {/* Sidebar - Large screens */}
            <div
                className={`fixed left-0 mt-14 max-lg:hidden bg-gray-50 h-screen transition-all duration-300 
                ${isOpen ? "w-[220px]" : "w-0"} `}
            >
                {/* Sidebar Content */}
                {isOpen && (
                    <div className="h-full overflow-hidden hover:overflow-y-auto pb-8 pl-1">
                        {[menuItems1, menuItems2, exploreItems, settingsItems].map((section, index) => (
                            <ul key={index} className="flex flex-col border-b border-gray-300 space-y-1 list-none mx-2 pt-3 pb-4">
                                {section.map(({ href, icon: Icon, label }) => (
                                    <Link key={href} href={href} className={`flex text-start items-center px-4 rounded-xl transition-all duration-200 ${pathname === href ? "bg-gray-100" : "hover:bg-gray-200"}`}>
                                        <Icon className="w-6 h-6" />
                                        <li className="w-full pl-6 py-2 text-sm font-normal">{label}</li>
                                    </Link>
                                ))}
                            </ul>
                        ))}
                    </div>
                )}
            </div>

            {/* Main Icons - Large screens when sidebar is hidden */}
            {!isOpen && (
                <div className="fixed left-0 mt-14 hidden lg:block bg-gray-50 transition-all duration-500">
                    <ul className="flex flex-col list-none space-y-6 pt-3 px-2">
                        {mainIcon.map(({ href, label, icon: Icon }) => (
                            <Link key={href} href={href} className="flex flex-col items-center text-center p-1  hover:bg-gray-100 rounded-xl transition-all duration-200">
                                <Icon className="w-6 h-6 font-extralight" />
                                <li className="text-[10px] font-light">{label}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}

            {/* Overlay sidebar for medium screens (sm to lg) */}
            {isOpen && (
                <div className="fixed left-0 top-0 w-full h-full z-40 bg-black bg-opacity-50 hidden sm:block lg:hidden ">
                    <div ref={sidebarRef} className="fixed left-0 mt-12 sm:mt-14 w-[220px] bg-gray-50 h-screen transition-all duration-300 z-50">
                        <div className="h-full overflow-hidden hover:overflow-y-auto pb-8 pl-1">
                            {[menuItems1, menuItems2, exploreItems, settingsItems].map((section, index) => (
                                <ul key={index} className="flex flex-col border-b border-gray-300 space-y-1 list-none mx-2 pt-3 pb-4">
                                    {section.map(({ href, icon: Icon, label }) => (
                                        <Link key={href} href={href} className={`flex text-start items-center px-4 rounded-xl transition-all duration-200 ${pathname === href ? "bg-gray-100" : "hover:bg-gray-200"}`}>
                                            <Icon className="w-6 h-6" />
                                            <li className="w-full pl-6 py-2 text-sm font-normal">{label}</li>
                                        </Link>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Icons - Medium screens (`md`) - Show only when sidebar is closed */}
            <div className={`fixed left-0 mt-14 hidden  md:block lg:hidden bg-gray-50 transition-all duration-500 `}>
                <ul className="flex flex-col list-none space-y-6 pt-3">
                    {mainIcon.map(({ href, label, icon: Icon }) => (
                        <Link key={href} href={href} className="flex flex-col items-center text-center px-2 py-1.5 hover:bg-gray-100 rounded-xl transition-all duration-200">
                            <Icon className="w-6 h-6 font-extralight" />
                            <li className="text-[10px] font-light">{label}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Main Icons - Small screens (`sm`) */}
            <div className={`fixed bottom-0 left-0 right-0 z-20 bg-gray-50 sm:hidden `}>
                <ul className="flex justify-around list-none py-1">
                    {mainIcon.map(({ href, label, icon: Icon }) => (
                        <Link key={href} href={href} className="flex flex-col items-center px-2 py-2 w-[100px] hover:bg-gray-100 rounded-xl transition-all duration-200">
                            <Icon className="w-6 h-6 font-extralight" />
                            <li className="text-xs font-light">{label}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;