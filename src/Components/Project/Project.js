import ProjectDesc from "./ProjectDesc";

import styles from "./Project.module.scss";
import useIsMobile from "../../hooks/use-is-mobile";

const Project = (props) => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.project} id="Project">
      <ProjectDesc isActive={props.descriptionIsActive} data={props.data} />
      <img className={styles.image} src={props.data.image} alt="House" />
      {isMobile && (
        <img
          className={`${styles.map} ${
            props.descriptionIsActive ? styles.black : undefined
          }`}
          src={props.data.map}
          alt="HouseMap"
        />
      )}
    </section>
  );
};

export default Project;
