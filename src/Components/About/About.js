import { useState } from "react";

import useIsMobile from "../../hooks/use-is-mobile";

import {
  AboutUsText,
  OfferText,
  IdeaText,
  ProcessText,
} from "../../Data/about-page-data";

import data from "../../Data/projects-data.json";

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
            onClick={
              isMobile
                ? () => {
                    changeDisplayText(AboutUsText);
                    setActiveElementIndex(1);
                  }
                : () => {}
            }
          >
            O nas
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
            onClick={
              isMobile
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
            onClick={
              isMobile
                ? () => {
                    changeDisplayText(ProcessText);
                    setActiveElementIndex(3);
                  }
                : () => {}
            }
          >
            Proces
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
            onClick={
              isMobile
                ? () => {
                    changeDisplayText(OfferText);
                    setActiveElementIndex(4);
                  }
                : () => {}
            }
          >
            Oferta
          </li>
        </ul>
        <p className={styles.aboutText}>{displayText}</p>
      </div>
    </div>
  );
};

export default About;
