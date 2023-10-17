import styles from "./instructionsComponent.module.css";
import Link from "next/link";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            SaveAKid<span> Donations Platform</span>
          </h1>
          <h3>
            The ultimate donations platform for supporting children in
            orphanages and children's homes.
          </h3>
        </div>
      </header>

      <div className={styles.buttons_container}>
        <Link href={"/register"}>
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Register a Home</p>
          </div>
        </Link>

        <Link href={"/homes"}>
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Explore Homes</p>
          </div>
        </Link>

        <Link href={"/dashboard"}>
          <div className={styles.button}>
            {/* <img
              src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
              width={"20px"}
              height={"20px"}
            /> */}
            <p>Show Current Campaigns</p>
          </div>
        </Link>

        <Link href={"/create-campaign"}>
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Create Campaign</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
