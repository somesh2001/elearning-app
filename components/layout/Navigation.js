import styles from "./Navigation.module.css";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";

function Navigation() {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const logoutHandler = (e) => {
    console.log("LoggOut");
    authCtx.logout();
    router.replace("/");
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <ul>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
