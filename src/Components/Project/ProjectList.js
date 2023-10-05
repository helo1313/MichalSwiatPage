import projectsData from "../../Data/projects-data.json";

import styles from "./ProjectList.module.scss";

const ProjectList = (props) => {
  return (
    <div
      className={styles.projectList}
      onMouseOver={props.onHover}
      onMouseOut={props.onUnhover}
    >
      {projectsData.map((project, index) => (
        <img
          key={project.id}
          src={project.map}
          className={`
          ${styles.map} 
          ${index === props.activeIndex ? styles.highlighted : undefined}
          ${props.isDescriptionActive ? styles.black : undefined}`}
          alt="house map"
        />
      ))}
    </div>
  );
};

export default ProjectList;
