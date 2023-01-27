import Head from "next/head";
import styles from "@/styles/Home.module.css";
import LoginUser from "@/components/Login/LoginUser";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quran E-Learning</title>
        <meta name="description" content="Quran E-Learning App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LoginUser />
      </main>
    </>
  );
}
