import React, { useState } from 'react'
import Account from './Account';

const Sidebar = () => {

  const [pagesCollapsed, setPagesCollapsed] = useState(false)



  const pagestoggleCollapse = () => {
    setPagesCollapsed(!pagesCollapsed);
  };

  return (
    <>
      <nav className="flex background-[#bf2e6a] z-[1038] border-r-">
        <div className='basis-[240px] shrink-0 z-[1038] transition-transform duration-[0.15s] ease-in-out'>
          {/* <div className='heading pt-[1.75rem] pb-[1rem] pr-[0.75rem] pl-[0.75rem] uppercase tracking-[0.05rem] text-[0.7rem] text-[#a7aeb8] font-bold'>
            core
          </div> */}

          <div className='pt-6'>
          <Account />
          </div>


        </div>
      </nav>
    </>
  )
}

export default Sidebar