import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <p>Gdynia</p>
        </div>
        <div className={styles.contact}>
          <p>Mikołaj@Swiatarchitekt.pl</p>
        </div>
        <div className={styles.contact}>
          <p>0048 609 860 020</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
