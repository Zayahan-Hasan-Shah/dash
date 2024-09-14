import React, {useEffect, useState} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { GoBell } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDocsDropdownOpen, setDocsDropdownOpen] = useState(false);
    const [isAlertsDropdownOpen, setAlertsDropdownOpen] = useState(false);
    const [isMessagesDropdownOpen, setMessagesDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [USER, setUSER] = useState({})
    const navigate = useNavigate()
   useEffect(()=>{
    const user = async () => {
        const userInfoString = localStorage.getItem('google-user');
        
        // Check if user data exists in localStorage
        if (userInfoString) {
          try {
            const userData = JSON.parse(userInfoString);
    
            const { name, email, picture } = userData;
            setUSER(userData)
          } catch (error) {
            console.error("Error parsing user data", error);
          }
        } else {
          console.log("No user data found in localStorage");
        }
      };
      
      // Call the async function
      user();
   },[])

   const LogoutFunction = ()=> {
    localStorage.removeItem("google-user")
    navigate('/')
   }


    return (
        <>
            
                <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
                    {/* Sidenav Toggle Button */}
                    <button
                        className="text-gray-600 focus:outline-none pr-2"
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        <IoMenuOutline  />
                    </button>

                    {/* Navbar Brand */}
                    <a href="index.html" className="text-xl font-semibold">
                        SB Admin Pro
                    </a>

                    {/* Navbar Search Input */}
                    <div className="hidden lg:flex  flex-1 mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:ring focus:border-blue-300"
                                placeholder="Search"
                            />
                            <div className="absolute  top-2 right-2 m-1">
                                <CiSearch />
                            </div>
                        </div>
                    </div>

                    {/* Navbar Items */}
                    <ul className="flex items-center space-x-4">
                        {/* Documentation Dropdown */}
                        <li className="relative">
                            <button
                                className="text-gray-600 focus:outline-none"
                                onClick={() => setDocsDropdownOpen(!isDocsDropdownOpen)}
                            >
                                <span className="font-medium">Documentation</span>
                                <i className="feather-chevron-right"></i>
                            </button>
                            {isDocsDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-md overflow-hidden z-20">
                                    <a
                                        href="https://docs.startbootstrap.com/sb-admin-pro"
                                        className="block py-2 px-4 hover:bg-gray-100"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 text-blue-600 p-2 rounded-md mr-3">
                                                <i className="feather-book"></i>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Documentation</span>
                                                <p className="text-sm text-gray-400">Usage instructions</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://docs.startbootstrap.com/sb-admin-pro/components"
                                        className="block py-2 px-4 hover:bg-gray-100"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 text-blue-600 p-2 rounded-md mr-3">
                                                <i className="feather-code"></i>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Components</span>
                                                <p className="text-sm text-gray-400">Code snippets</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://docs.startbootstrap.com/sb-admin-pro/changelog"
                                        className="block py-2 px-4 hover:bg-gray-100"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 text-blue-600 p-2 rounded-md mr-3">
                                                <i className="feather-file-text"></i>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Changelog</span>
                                                <p className="text-sm text-gray-400">Updates and changes</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </li>

                        {/* Alerts Dropdown */}
                        <li className="relative">
                            <button
                                className="text-gray-600 focus:outline-none"
                                onClick={() => setAlertsDropdownOpen(!isAlertsDropdownOpen)}
                            >
                                <GoBell />
                            </button>
                            {isAlertsDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-md z-20">
                                    <div className="py-2 px-4 text-sm text-gray-700">Alerts Center</div>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-100 flex items-center"
                                    >
                                        <div className="bg-yellow-100 text-yellow-600 p-2 rounded-md mr-3">
                                            <i className="feather-activity"></i>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">December 29, 2021</p>
                                            <p className="text-gray-700">
                                                This is an alert message. It's nothing serious, but it requires your attention.
                                            </p>
                                        </div>
                                    </a>
                                    {/* Add more alerts here */}
                                    <a href="#" className="block py-2 px-4 text-blue-600 hover:bg-gray-100">
                                        View All Alerts
                                    </a>
                                </div>
                            )}
                        </li>

                        {/* Messages Dropdown */}
                        <li className="relative">
                            <button
                                className="text-gray-600 focus:outline-none"
                                onClick={() => setMessagesDropdownOpen(!isMessagesDropdownOpen)}
                            >
                                <CiMail />
                            </button>
                            {isMessagesDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-md z-20">
                                    <div className="py-2 px-4 text-sm text-gray-700">Message Center</div>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-100 flex items-center"
                                    >
                                        <img
                                            src=""
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full mr-3"
                                        />
                                        <div>
                                            <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
                                            <p className="text-sm text-gray-500">Thomas Wilcox · 58m</p>
                                        </div>
                                    </a>
                                    {/* Add more messages here */}
                                    <a href="#" className="block py-2 px-4 text-blue-600 hover:bg-gray-100">
                                        Read All Messages
                                    </a>
                                </div>
                            )}
                        </li>

                        {/* User Dropdown */}
                        <li className="relative">
                            <button
                                className="focus:outline-none"
                                onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
                            >
                                <img
                                    src="assets/img/illustrations/profiles/profile-1.png"
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                            </button>
                            {isUserDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-20">
                                    <div className="py-2 px-4 flex items-center">
                                        <img
                                            src="assets/img/illustrations/profiles/profile-1.png"
                                            alt="User"
                                            className="w-8 h-8 rounded-full mr-3"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{USER.name}</p>
                                            <p className="text-sm text-gray-600">{USER.email}</p>
                                        </div>
                                    </div>
                                    <div className="border-t"></div>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
                                    >
                                        Account Settings
                                    </a>
                                    <Link
                                        to="/"
                                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
                                        onClick={LogoutFunction}
                                    >
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>


                {isSidebarOpen ? <Sidebar /> : ""}
        </>
    )
}

export default Navbar