import AddStudentTeacher from "@/components/Student/AddStudentTeacher";
import React, { useContext } from "react";
import AuthContext from "@/components/store/auth-context";
import DisplayStudents from "@/components/Student/DisplayStudents";

const index = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      {isLoggedIn && <AddStudentTeacher />}
      {isLoggedIn && <DisplayStudents />}
    </>
  );
};

export default index;
