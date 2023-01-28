import Sidebar from "@/components/sidebar/SideBar";
import AuthContext from "@/components/store/auth-context";
import React, { useContext } from "react";

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.isLoggedIn && (
        <div>
          <Sidebar />
        </div>
      )}
    </>
  );
};
export default Home;
