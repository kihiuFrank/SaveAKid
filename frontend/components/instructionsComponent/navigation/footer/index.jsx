import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <img
          id="badge-button"
          style={{ width: "240px", height: "53px" }}
          src="https://maralliance.org/wp-content/uploads/2022/03/stripe-badge-transparent.png"
          alt="Alchemy Supercharged"
        />
      </div>
      <div className={styles.icons_container}>
        <div>
          <a href="https://github.com/kihiuFrank/SaveAKid" target={"_blank"}>
            Leave a star on Github
          </a>
        </div>
        <div>
          <a href="https://twitter.com/frankline_kihiu" target={"_blank"}>
            Follow us on Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
