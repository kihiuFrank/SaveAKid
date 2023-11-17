import React from "react";
import ComingSoon from "../../components/utils/comingSoon/comingsoon";
import styles from "./community.module.css";

export default function Community() {
  return (
    <div className={styles.container}>
      <ComingSoon />
    </div>
  );
}
