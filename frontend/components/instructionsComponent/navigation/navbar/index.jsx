"use client";

import { ConnectKitButton } from "connectkit";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <Link className={styles.logo} href="/">
          <Image width={60} height={60} src="/logo.png" alt="Logo" />
        </Link>

        <Link href={"/"}>
          <div className={styles.my_link}>
            <p>Home</p>
          </div>
        </Link>

        <Link href={"/campaigns"}>
          <div className={styles.my_link}>
            <p>Campaigns</p>
          </div>
        </Link>

        <Link href={"/homes"}>
          <div className={styles.my_link}>
            <p>Explore Homes</p>
          </div>
        </Link>

        <Link href={"/create-campaign"}>
          <div className={styles.my_link}>
            <p>Create Campaign</p>
          </div>
        </Link>

        <Link href={"/register"}>
          <div className={styles.my_link}>
            <p>Register a Home</p>
          </div>
        </Link>
        <ConnectKitButton />
      </nav>
    </div>
  );
}
