import AddUserTeacher from "@/components/Admin/AddUserTeacher";
import Navigation from "@/components/layout/Navigation";
import AuthContext from "@/components/store/auth-context";
import React, { useContext } from "react";

const Admin = () => {
  const authCtx = useContext(AuthContext);
  console.log("LoggedIn: ", authCtx.isLoggedIn);

  return (
    <div>
      <div>
        {authCtx.isLoggedIn && (
          <div>
            <Navigation />
            <div className="text-center">
              <h1>Hello Admin</h1>
            </div>
            <AddUserTeacher />
          </div>
        )}

        {!authCtx.isLoggedIn && <p>Admin Not Logged In</p>}
      </div>
    </div>
  );
};

export default Admin;
