import DisplayBatches from '@/components/batches/DisplayBatches'
import Navigation from '@/components/layout/Navigation'
import TeacherSidebar from '@/components/Sidebar/TeacherSidebar'
import React from 'react'

const MakeAnnouncements = () => {
  return (
    <div>
        <Navigation />
      <div className="flex">
      <TeacherSidebar/>
      <div  className="h-screen flex-1 p-7">
      {/* {Menus.map((Menu, index) => ( */}
        <div className="m-0" >
        Make Announcements
        </div>
        {/* ))} */}
      </div>
        
      </div>
    </div>
  )
}

export default MakeAnnouncements