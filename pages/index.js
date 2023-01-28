import Head from "next/head";
import styles from "@/styles/Home.module.css";
import LoginUser from "@/components/Login/LoginUser";
import AuthContext, {
  AuthContextProvider,
} from "@/components/store/auth-context";
import { useContext } from "react";
import Admin from "./admin";
import StudentAccount from "./studentaccount";

export default function Home() {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  const typeAdmin = authCtx.userType === "admin" ? true : false;
  console.log("admin; ", typeAdmin);

  return (
    <>
      <Head>
        <title>Quran E-Learning</title>
        <meta name="description" content="Quran E-Learning App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!loggedIn && <LoginUser />}
        {loggedIn && typeAdmin && <Admin />}
        {!typeAdmin && !loggedIn && <StudentAccount />}
      </main>
    </>
  );
}
