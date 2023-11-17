import React from "react";
import ComingSoon from "../../components/utils/comingSoon/comingsoon";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <ComingSoon />
    </div>
  );
}