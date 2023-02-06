import Navigation from "@/components/layout/Navigation";

import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import StudentProgress from "@/components/Teacher/StudentProgress";
import React from "react";

const StudentsProgress = () => {
  return (
    <div>
      <Navigation />
      <div className="flex">
        <TeacherSidebar />
        <div className="h-screen flex-1 p-7 bg-slate-300">
          {/* {Menus.map((Menu, index) => ( */}
          <div className="m-0">
            <StudentProgress />
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default StudentsProgress;
