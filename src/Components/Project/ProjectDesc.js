import styles from "./ProjectDesc.module.scss";

const ProjectDesc = (props) => {
  return (
    <div className={`${styles.project} ${props.isActive ? styles.active : ""}`}>
      <div className={styles.projectDescripton}>
        <p>Project:</p>
        <p>Place:</p>
        <p>Year:</p>
        <p>Author:</p>
        <p>Created during:</p>
        <p>Vizualization:</p>
      </div>{" "}
    </div>
  );
};

export default ProjectDesc;
