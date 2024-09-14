import React, { useState } from 'react'
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Account = () => {
    const [AccountCollapsed, setAccountCollapsed] = useState(false);

    const AccounttoggleCollapse = () => {
        setAccountCollapsed(!AccountCollapsed);
    };
    return (
        <>

            <div className=''>
                <a
                    href="#"
                    className="nav-link flex items-center justify-between text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={AccounttoggleCollapse}
                >
                    <div className="flex items-center">

                        <span className={`ml-2 ${AccountCollapsed ? "text-[#0061f2]" : ""}  hover:text-[#0061f2]`}>Accounts</span>
                    </div>
                    <div className="sidenav-collapse-arrow">
                        {AccountCollapsed ? <LiaAngleDownSolid /> : <LiaAngleRightSolid />}
                    </div>
                </a>

                <div
                    className={` pt-4 transition-all duration-300 ease-in-out overflow-hidden ${AccountCollapsed ? 'max-h-screen border-l-[0.1rem] border-l-[#d4dae3]' : 'max-h-0'}`}
                >
                    <nav className="flex flex-col space-y-2 pl-6">
                        <Link className="nav-link text-gray-700 hover:text-[#0061f2]" to="/profile"> Profile</Link>
                        <Link className="nav-link text-gray-700 hover:text-[#0061f2]" to="/billing">Billing</Link>
                        <Link className="nav-link text-gray-700 hover:text-[#0061f2]" to="/security">Security</Link>
                        <Link className="nav-link text-gray-700 hover:text-[#0061f2]" to="/notification">Notifications</Link>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Account