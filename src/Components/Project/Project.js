import ProjectDesc from "./ProjectDesc";

import styles from "./Project.module.scss";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <ProjectDesc
        isActive={props.descriptionIsActive}
        map={props.map}
        data={props.data}
      />
      <img className={styles.image} src={props.image} alt="House" />
      <img className={styles.map} src={props.map} alt="HouseMap" />
    </div>
  );
};

export default Project;
