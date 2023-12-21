import styles from "./styles/footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      LIGBCM - UNQ
      <div>
        Something's wrong?{" "}
        <Link to="mailto:asdoia@adasd.com">Send us an email</Link>
      </div>
      <div>
        <a href="https://github.com" target="_blank">
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Footer;
