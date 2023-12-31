import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import useIsMobile from "./hooks/use-is-mobile";

import projectsData from "./Data/projects-data";

import Logo from "./Components/Logo/Logo";
import Introduction from "./Components/Introduction/Introduction";
import Project from "./Components/Project/Project";
import About from "./Components/About/About";
import ProjectList from "./Components/Project/ProjectList";

function App() {
  const [aboutPageActive, setAboutPageActive] = useState(false);
  const [descriptonPageActive, setDescriptonPageActive] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

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
    if (!descriptonPageActive) {
      setAboutPageActive(true);
    }
  };

  const closeAboutPage = () => {
    if (!descriptonPageActive) {
      setAboutPageActive(false);
    }
  };

  const showDescriptionPage = () => {
    if (!aboutPageActive) {
      setDescriptonPageActive(true);
    }
  };

  const closeDescriptionPage = () => {
    if (!aboutPageActive) {
      setDescriptonPageActive(false);
    }
  };

  const onPageClicked = () => {
    if (aboutPageActive) {
      closeAboutPage();
    } else {
      showAboutPage();
    }
  };

  const projects = projectsData.map((project, index) => (
    <Project
      key={project.id}
      data={project}
      descriptionIsActive={
        isMobile
          ? descriptonPageActive
          : descriptonPageActive && index === activeSection
      }
      showDescriptionPage={showDescriptionPage}
      closeDescriptionPage={closeDescriptionPage}
    ></Project>
  ));

  const HandleScroll = (event) => {
    const currentScroll = window.scrollY;

    var closestIndex = 0;
    var closestElementDistance = Number.MAX_VALUE;

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      const distance = Math.abs(section.offsetTop - currentScroll);

      if (distance > closestElementDistance) {
        return;
      }

      closestElementDistance = distance;
      closestIndex = index;
    });

    if (activeSection !== closestIndex) {
      setActiveSection(closestIndex);
    }
  };

  document.addEventListener("wheel", HandleScroll, {
    passive: false,
  });

  return (
    <div
      className="wrapper"
      {...handlers}
      onClick={!isMobile ? onPageClicked : undefined}
    >
      <Logo black={aboutPageActive} />
      <About isActive={aboutPageActive} />
      {isMobile && <Introduction />}

      {projects}
      {!isMobile && (
        <ProjectList
          isDescriptionActive={descriptonPageActive}
          activeIndex={activeSection}
          onHover={showDescriptionPage}
          onUnhover={closeDescriptionPage}
        />
      )}
    </div>
  );
}

export default App;
