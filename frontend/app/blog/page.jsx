import React from "react";
import ComingSoon from "../../components/utils/comingSoon/comingsoon";
import styles from "./blog.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <ComingSoon />
    </div>
  );
}
