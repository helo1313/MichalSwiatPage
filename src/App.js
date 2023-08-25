import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import projectsData from "./Data/Projects.json";

import Logo from "./Components/Logo/Logo";
import Introduction from "./Components/Introduction/Introduction";
import Project from "./Components/Project/Project";
import Frame from "./Components/Frame/Frame";
import About from "./Components/About/About";

import House01 from "./images/Dookola/Dookola.png";
import House02 from "./images/Lanowa/Lanowa.png";
import House03 from "./images/NaLini/NaLini.png";

import House01Map from "./images/Dookola/Dookola_Map.svg";
import House02Map from "./images/Lanowa/Lanowa_Map.svg";
import House03Map from "./images/NaLini/NaLini_Map.svg";

function App() {
  const [aboutPageActive, setAboutPageActive] = useState(false);
  const [descriptonPageActive, setDescriptonPageActive] = useState(false);

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

  return (
    <div className="wrapper" {...handlers}>
      <Frame />
      <Logo />
      <About isActive={aboutPageActive} />
      <Introduction />

      {projectsData.map((project) => (
        <Project
          data={project}
          image={House01}
          map={House01Map}
          descriptionIsActive={descriptonPageActive}
        ></Project>
      ))}
    </div>
  );
}

export default App;
