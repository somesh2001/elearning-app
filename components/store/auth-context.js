import React, { useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  setUserType: (type) => {},
  setStudentsData: (data) => {},
  setTeachersData: (data) => {},
  studentsList: [],
  teachersList: [],
  userType: "",
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const addExpirationTime = new Date(expirationTime).getTime();

  const remianingDuration = addExpirationTime - currentTime;

  return remianingDuration;
};

export const AuthContextProvider = (props) => {
  const [studentList, setStudentsList] = useState([]);
  const [teachersList, setTeachersList] = useState([]);

  const [token, setToken] = useState("");
  const [userType, setUserType] = useState("admin");

  let initialToken;
  useEffect(() => {
    // Perform localStorage action
    initialToken = localStorage.getItem("token");
    setToken(initialToken);
  }, []);

  const userIsLoggedIn = !!token;
  const logoutHandler = () => {
    console.log("In auth Logout");
    setToken(null);
    localStorage.removeItem("token");

    // if the timer was saved thenwe are clearing the timer
    if (logoutHandler) {
      clearTimeout(logoutTimer);
    }
    console.log("In auth Logout");
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remianingTime = calculateRemainingTime(expirationTime);

    //this function (logoutHandler) will be called in the given time
    logoutTimer = setTimeout(logoutHandler, remianingTime);
  };

  const setUserRoleType = (type) => {
    setUserType(type);
  };

  const studentsDataHandler = (newUserData) => {
    setStudentsList(newUserData);
  };
  const TeachersDataHandler = (newUserData) => {
    setTeachersList(newUserData);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    setUserRoleType: setUserRoleType,
    setStudentsData: studentsDataHandler,
    setTeachersData: TeachersDataHandler,
    studentsList: studentList,
    teachersList: teachersList,
    userType: userType,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
