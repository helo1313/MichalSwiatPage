import useIsMobile from "../../hooks/use-is-mobile";

import styles from "./ProjectDesc.module.scss";

const ProjectDesc = (props) => {
  const isMobile = useIsMobile();
  const data = props.data;
  console.log(data);

  return (
    <div className={`${styles.project} ${props.isActive ? styles.active : ""}`}>
      {!isMobile && <div className={styles.projectDescriptionFrame} />}
      <div className={styles.projectDescripton}>
        <p>Project: {data.name}</p>
        <p>Place:</p>
        <p>Year:</p>
        <p>Author:</p>
        <p>Created during:</p>
        <p>Vizualization:</p>
      </div>
    </div>
  );
};

export default ProjectDesc;
