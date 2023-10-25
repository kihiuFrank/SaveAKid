import styles from "./instructionsComponent.module.css";
import Link from "next/link";
import Image from "next/image";

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

      <div className={styles.landingPage_container}>
        <div className={styles.image_container}>
          <Image
            priority={true}
            placeholder="empty"
            className={styles.img}
            src="/saveAKid.png"
            fill={true}
            alt="Picture"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <p className={styles.paragraph}>
          SaveAKid is a donations platform aiming to provide support for
          children and young people each year in Kenya by creating a space where
          charity organizations and children homes are connected with donors
          from all over the world. <br /> <br />
          This includes support for children and young people at primary school,
          secondary school and for students attending college, university or
          vocational courses. <br />
          <br />
          When you make a donation today, you're not only creating a brighter
          world, you are also helping a child meet some of their greatest needs.
          Support a child in need by making a donation today!
        </p>
      </div>
    </div>
  );
}
