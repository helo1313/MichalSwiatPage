import useIsMobile from "../../hooks/use-is-mobile";

import styles from "./ProjectDesc.module.scss";

const ProjectDesc = (props) => {
  const isMobile = useIsMobile();
  const data = props.data;

  const desktopParagraphs = (
    <div className={styles.projectDescripton}>
      <div className={styles.valuesWrapper}>
        <p>{data.name}</p>
        <p>{data.place}</p>
        <p>{data.year}</p>
        {data.coAuthors !== "" && <p>{data.coAuthors}</p>}
      </div>
      <div className={styles.paragraphsWrapper}>
        <p>Project</p>
        <p>Place</p>
        <p>Year</p>
        {data.coAuthors !== "" && <p>Co-Authors</p>}
      </div>
    </div>
  );

  const mobileParagraphs = (
    <div className={styles.projectDescripton}>
      <p>Project: {data.name}</p>
      <p>Place: {data.place}</p>
      <p>Year: {data.year}</p>
      {data.coAuthors !== "" && <p>Co-Author: {data.coAuthors}</p>}
    </div>
  );

  return (
    <div className={`${styles.project} ${props.isActive ? styles.active : ""}`}>
      {!isMobile && <div className={styles.projectDescriptionFrame} />}
      {isMobile ? mobileParagraphs : desktopParagraphs}
    </div>
  );
};

export default ProjectDesc;
