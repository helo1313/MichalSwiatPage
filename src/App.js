import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import useIsMobile from "./hooks/use-is-mobile";

import projectsData from "./Data/projects-data";

import Logo from "./Components/Logo/Logo";
import Introduction from "./Components/Introduction/Introduction";
import Project from "./Components/Project/Project";
import Frame from "./Components/Frame/Frame";
import About from "./Components/About/About";

import House01 from "./images/Dookola/Dookola.png";

import House01Map from "./images/Dookola/Dookola_Map.svg";

function App() {
  const [aboutPageActive, setAboutPageActive] = useState(false);
  const [descriptonPageActive, setDescriptonPageActive] = useState(false);

  const isMobile = useIsMobile();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (descriptonPageActive) {
        closeDescriptionPage();
      } else if (!aboutPageActive) {
        showAboutPage();
      }
    },
    onSwipedLeft: () => {
      if (aboutPageActive) {
        closeAboutPage();
      } else if (!descriptonPageActive) {
        showDescriptionPage();
      }
    },
  });

  const showAboutPage = () => {
    setAboutPageActive(true);
  };

  const closeAboutPage = () => {
    setAboutPageActive(false);
  };

  const showDescriptionPage = () => {
    setDescriptonPageActive(true);
  };

  const closeDescriptionPage = () => {
    setDescriptonPageActive(false);
  };

  const onPageClicked = () => {
    if (aboutPageActive) {
      closeAboutPage();
    } else {
      showAboutPage();
    }
  };

  return (
    <div className="wrapper" {...handlers} onClick={onPageClicked}>
      <Frame />
      <Logo black={aboutPageActive} />
      <About isActive={aboutPageActive} />
      {isMobile && <Introduction />}

      {projectsData.map((project) => (
        <Project
          data={project}
          map={House01Map}
          descriptionIsActive={descriptonPageActive}
        ></Project>
      ))}
    </div>
  );
}

export default App;
