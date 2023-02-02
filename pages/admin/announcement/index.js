import AnnouncementForm from "@/components/Announcement/AnnouncementForm";
import Navigation from "@/components/layout/Navigation";
import React from "react";

const index = () => {
  return (
    <div className="bg-slate-300 h-screen">
      <Navigation />
      <AnnouncementForm />
    </div>
  );
};

export default index;
