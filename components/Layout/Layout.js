import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children, title = "Next.js Project" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>CTIS 478 - Next.js</footer>
    </div>
  );
};

export default Layout;
