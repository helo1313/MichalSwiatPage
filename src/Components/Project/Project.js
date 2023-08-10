import styles from "./Project.module.scss";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <img className={styles.image} src={props.image} alt="House" />
    </div>
  );
};

export default Project;
