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
          {/* <Image width={60} height={60} src="/logo.png" alt="Logo" /> */}
          <div className={styles.logoName}>
            <p>SaveAKid</p>
          </div>
        </Link>

        <div className={styles.link_class}>
          <Link href={"/campaigns"}>
            <div className={styles.my_link}>
              <p>Dashboard</p>
            </div>
          </Link>

          <Link href={"/create-campaign"}>
            <div className={styles.my_link}>
              <p>Campaign</p>
            </div>
          </Link>

          <Link href={"/profile"}>
            <div className={styles.my_link}>
              <p>Profile</p>
            </div>
          </Link>
        </div>
        <ConnectKitButton />
      </nav>
    </div>
  );
}
