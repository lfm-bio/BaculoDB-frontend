import styles from "./styles/footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      LIGBCM - UNQ
      <div>
        Something's wrong?
        <Link to="mailto:asdoia@adasd.com">Send us an email</Link>
      </div>
      <div>
        <Link to="https://github.com">Source Code</Link>
      </div>
    </div>
  );
}

export default Footer;
