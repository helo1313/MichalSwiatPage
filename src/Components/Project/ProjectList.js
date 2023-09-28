import projectsData from "../../Data/projects-data.json";

import styles from "./ProjectList.module.scss";

const ProjectList = () => {
  return (
    <div className={styles.projectList}>
      {projectsData.map((project) => (
        <img src={project.map} className={`${styles.map}`} alt="house map" />
      ))}
    </div>
  );
};

export default ProjectList;
