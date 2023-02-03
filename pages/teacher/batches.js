import Navigation from "@/components/layout/Navigation";
import React from "react";
// import Batches from '@/components/batches/Batches'
import DisplayBatches from "@/components/batches/DisplayBatches";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";

const batches = () => {
  return (
    <div>
      <Navigation />
      <div className="flex">
      <TeacherSidebar/>
      <div  className="h-screen flex-1 p-7">
      {/* {Menus.map((Menu, index) => ( */}
        <div className="m-0" >
        <DisplayBatches />
        </div>
        {/* ))} */}
      </div>
        
      </div>
    </div>
  );
};

export default batches;
