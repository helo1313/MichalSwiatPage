import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faHome} />
          <p>Gdynia</p>
        </div>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Mikołaj@Swiatarchitekt.pl</p>
        </div>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faPhone} />
          <p>0048 609 860 020</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
