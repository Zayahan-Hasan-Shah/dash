import React, { useState } from 'react'
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import UserManagement from './UserManagement';
import PostsManagement from './PostsManagement';

const Management = () => {
  

    const [ManagementCollapsed, setManagementCollapsed] = useState(false);

    const ManagementtoggleCollapse = () => {
        setManagementCollapsed(!ManagementCollapsed);
    };
    return (
    <>
    <div className='pl-4'>
                <a
                    href="#"
                    className="nav-link flex items-center justify-between text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={ManagementtoggleCollapse}
                >
                    <div className="flex items-center">
                        <GrProjects />
                        <span className={`ml-2 ${ManagementCollapsed ? "text-[#0061f2]" : ""} font-semibold hover:text-[#0061f2]`}>Management</span>
                    </div>
                    <div className="sidenav-collapse-arrow">
                        {ManagementCollapsed ? <LiaAngleDownSolid /> : <LiaAngleRightSolid />}
                    </div>
                </a>

                <div
                    className={`pt-4  transition-all duration-300 ease-in-out overflow-hidden ${ManagementCollapsed ? 'max-h-screen border-l-[0.1rem] border-l-[#d4dae3]' : 'max-h-0'}`}
                >
                    <nav className="flex flex-col gap-0 pl-2">
                        <UserManagement />
                        <PostsManagement className="pt-2" />
                    </nav>
                </div>
            </div>
    </>
  )
}

export default Management