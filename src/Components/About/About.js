import { useState } from "react";

import useIsMobile from "../../hooks/use-is-mobile";

import {
  AboutUsText,
  OfferText,
  IdeaText,
  ProcessText,
} from "../../Data/about-page-data";

import styles from "./About.module.scss";

const About = (props) => {
  const [displayText, setDisplayText] = useState(AboutUsText);
  const [activeElementIndex, setActiveElementIndex] = useState(1);

  const isMobile = useIsMobile();

  const handleInteraction = (NewText, NewIndex) => {
    return () => {
      setDisplayText(NewText);
      setActiveElementIndex(NewIndex);
    };
  };

  return (
    <div
      className={`${styles.container} ${props.isActive ? styles.active : ""}`}
    >
      <div className={styles.contentBox}>
        <ul className={styles.aboutList}>
          <li
            className={activeElementIndex === 1 ? styles.activeItem : ""}
            onMouseOver={
              !isMobile ? handleInteraction(AboutUsText, 1) : undefined
            }
            onClick={isMobile ? handleInteraction(AboutUsText, 1) : undefined}
          >
            O nas
          </li>
          <li
            className={activeElementIndex === 2 ? styles.activeItem : ""}
            onMouseOver={!isMobile ? handleInteraction(IdeaText, 2) : undefined}
            onClick={isMobile ? handleInteraction(IdeaText, 2) : undefined}
          >
            Idea
          </li>
          <li
            className={activeElementIndex === 3 ? styles.activeItem : ""}
            onMouseOver={
              !isMobile ? handleInteraction(ProcessText, 3) : undefined
            }
            onClick={isMobile ? handleInteraction(ProcessText, 3) : undefined}
          >
            Proces
          </li>
          <li
            className={activeElementIndex === 4 ? styles.activeItem : ""}
            onMouseOver={
              !isMobile ? handleInteraction(OfferText, 4) : undefined
            }
            onClick={isMobile ? handleInteraction(OfferText, 4) : undefined}
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
