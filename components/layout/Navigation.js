import styles from "./Navigation.module.css";
import Link from "next/link";

function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Logout</Link>
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
