import AddUserTeacher from "@/components/Admin/AddUserTeacher";
import Card from "@/components/layout/Card";
import Navigation from "@/components/layout/Navigation";
import Link from "next/link";
import React from "react";

const NewUser = () => {
  return (
    <div>
      <Navigation />
      <div className="text-center">
        <h1>Hello Admin</h1>
      </div>
      <AddUserTeacher />
    </div>
  );
};

export default NewUser;
