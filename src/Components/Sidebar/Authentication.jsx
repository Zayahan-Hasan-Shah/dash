import React, { useState } from 'react'
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";

const Authentication = () => {
    const [AuthenticationCollapsed, setAuthenticationCollapsed] = useState(false);

    const AuthenticationsidetoggleCollapse = () => {
        setAuthenticationCollapsed(!AuthenticationCollapsed);
    };
  return (
    <>
     <div className=' pt-2'>
                <a
                    href="#"
                    className="nav-link flex items-center justify-between text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={AuthenticationsidetoggleCollapse}
                >
                    <div className="flex items-center">

                        <span className={`ml-2 ${AuthenticationCollapsed ? "text-[#0061f2]" : ""} hover:text-[#0061f2]`}>Authentication</span>
                    </div>
                    <div className="sidenav-collapse-arrow">
                        {AuthenticationCollapsed ? <LiaAngleDownSolid /> : <LiaAngleRightSolid />}
                    </div>
                </a>

                <div
                    className={`pt-4  transition-all duration-300 ease-in-out overflow-hidden ${AuthenticationCollapsed ? 'max-h-screen border-l-[0.1rem] border-l-[#d4dae3]' : 'max-h-0'}`}
                >
                    <nav className="flex flex-col space-y-2 pl-4">
                        <a className="nav-link text-gray-700 hover:text-[#0061f2]" href="dashboard-1.html"> Profile</a>
                        <a className="nav-link text-gray-700 hover:text-[#0061f2]" href="dashboard-2.html">Billing</a>
                        <a className="nav-link text-gray-700 hover:text-[#0061f2]" href="dashboard-3.html">Security</a>
                        <a className="nav-link text-gray-700 hover:text-[#0061f2]" href="dashboard-3.html">Notifications</a>
                    </nav>
                </div>
            </div>
    
    </>
  )
}

export default Authentication