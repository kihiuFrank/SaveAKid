"use client";

import { ConnectKitButton } from "connectkit";
import styles from "./Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.my_link} href="/">
        SaveAKid
      </Link>
      <ConnectKitButton />
    </nav>
  );
}
