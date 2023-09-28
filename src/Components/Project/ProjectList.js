import projectsData from "../../Data/projects-data.json";

import styles from "./ProjectList.module.scss";

const ProjectList = (props) => {
  return (
    <div className={styles.projectList}>
      {projectsData.map((project, index) => (
        <img
          src={project.map}
          className={`${styles.map} ${
            index === props.activeIndex ? styles.highlighted : undefined
          }`}
          alt="house map"
        />
      ))}
    </div>
  );
};

export default ProjectList;
