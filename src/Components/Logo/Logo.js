import styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <div className={styles.logo}>
      <p className={props.black ? `${styles.black}` : ""}>ŚWIAT ● ARCHITEKT</p>
    </div>
  );
};

export default Logo;
