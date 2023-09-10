import useIsMobile from "../../hooks/use-is-mobile";

import House01Map from "../../images/Dookola/Dookola_Map.svg";
import House02Map from "../../images/Lanowa/Lanowa_Map.svg";
import House03Map from "../../images/NaLini/NaLini_Map.svg";

import styles from "./About.module.scss";

const About = (props) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`${styles.container} ${props.isActive ? styles.active : ""}`}
    >
      <div className={styles.contentBox}>
        <ul className={styles.aboutList}>
          <li className={styles.activeItem}>About me</li>
          <li>Idea</li>
          <li>Process</li>
          <li>Contact</li>
        </ul>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      {isMobile && (
        <div className={styles.mapbox}>
          <img
            className={`${styles.map} ${styles.first}`}
            src={House01Map}
            alt="HouseMap"
          />
          <img
            className={`${styles.map} ${styles.secound}`}
            src={House02Map}
            alt="HouseMap"
          />
          <img
            className={`${styles.map} ${styles.third}`}
            src={House03Map}
            alt="HouseMap"
          />
        </div>
      )}
    </div>
  );
};

export default About;
