"use client";

import { ConnectKitButton } from "connectkit";
import styles from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.mainLink} href="/">
        SaveAKid
      </Link>

      <Link href={"/dashboard"}>
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
  );
}
