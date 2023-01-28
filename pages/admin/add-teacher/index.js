import AddStudentTeacher from "@/components/Student/AddStudentTeacher";
import React, { useContext } from "react";
import AuthContext from "@/components/store/auth-context";
import DisplayTeacher from "@/components/Teacher/DisplayTeacher";

const index = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      {isLoggedIn && <AddStudentTeacher />}
      {isLoggedIn && <DisplayTeacher />}
    </>
  );
};

export default index;
