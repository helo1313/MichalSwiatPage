import { useState } from "react";

import ProjectDesc from "./ProjectDesc";

import styles from "./Project.module.scss";
import useIsMobile from "../../hooks/use-is-mobile";

const Project = (props) => {
  const isMobile = useIsMobile();
  const [descriptonActive, setDescriptonActive] = useState(false);

  const showDescription = () => {
    setDescriptonActive(true);
    props.showDescriptionPage();
  };

  const hideDescription = () => {
    setDescriptonActive(false);
    props.closeDescriptionPage();
  };

  return (
    <div className={styles.project}>
      <ProjectDesc
        isActive={isMobile ? props.descriptionIsActive : descriptonActive}
        map={props.map}
        data={props.data}
      />
      <img className={styles.image} src={props.data.image} alt="House" />
      <img
        className={styles.map}
        src={props.map}
        alt="HouseMap"
        onMouseOver={showDescription}
        onMouseOut={hideDescription}
      />
    </div>
  );
};

export default Project;
