import { useState } from "react";

import useIsMobile from "../../hooks/use-is-mobile";

import {
  AboutUsText,
  OfferText,
  IdeaText,
  ProcessText,
} from "../../Data/about-page-data";

import House01Map from "../../images/Dookola/Dookola_Map.svg";
import House02Map from "../../images/Lanowa/Lanowa_Map.svg";
import House03Map from "../../images/NaLini/NaLini_Map.svg";

import styles from "./About.module.scss";

const About = (props) => {
  const [displayText, setDisplayText] = useState(AboutUsText);
  const [activeElementIndex, setActiveElementIndex] = useState(1);

  const isMobile = useIsMobile();

  const changeDisplayText = (text) => setDisplayText(text);

  return (
    <div
      className={`${styles.container} ${props.isActive ? styles.active : ""}`}
    >
      <div className={styles.contentBox}>
        <ul className={styles.aboutList}>
          <li
            className={activeElementIndex === 1 ? styles.activeItem : ""}
            onMouseOver={
              !isMobile
                ? () => {
                    changeDisplayText(AboutUsText);
                    setActiveElementIndex(1);
                  }
                : () => {}
            }
          >
            About me
          </li>
          <li
            className={activeElementIndex === 2 ? styles.activeItem : ""}
            onMouseOver={
              !isMobile
                ? () => {
                    changeDisplayText(IdeaText);
                    setActiveElementIndex(2);
                  }
                : () => {}
            }
          >
            Idea
          </li>
          <li
            className={activeElementIndex === 3 ? styles.activeItem : ""}
            onMouseOver={
              !isMobile
                ? () => {
                    changeDisplayText(ProcessText);
                    setActiveElementIndex(3);
                  }
                : () => {}
            }
          >
            Process
          </li>
          <li
            className={activeElementIndex === 4 ? styles.activeItem : ""}
            onMouseOver={
              !isMobile
                ? () => {
                    changeDisplayText(OfferText);
                    setActiveElementIndex(4);
                  }
                : () => {}
            }
          >
            Offer
          </li>
        </ul>
        <p className={styles.aboutText}>{displayText}</p>
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
