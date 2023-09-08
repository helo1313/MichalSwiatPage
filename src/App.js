import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import useIsMobile from "./hooks/use-is-mobile";

import projectsData from "./Data/projects-data";

import Logo from "./Components/Logo/Logo";
import Introduction from "./Components/Introduction/Introduction";
import Project from "./Components/Project/Project";
import Frame from "./Components/Frame/Frame";
import About from "./Components/About/About";

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

  // const scroll = (direction) => {
  //   let currentY = window.scrollY;
  //   let height = window.innerHeight;

  //   if (direction === 1) {
  //     window.scrollTo({
  //       top: currentY + height,
  //       behavior: "smooth",
  //     });
  //   } else if (direction === -1) {
  //     window.scrollTo({
  //       top: currentY - height,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   let isThrottled = false;

  //   const listenScroll = (event) => {
  //     if (isThrottled) return;
  //     isThrottled = true;

  //     setTimeout(() => {
  //       isThrottled = false;
  //     }, 1000);

  //     const direction = event.deltaY > 0 ? 1 : -1;
  //     scroll(direction);
  //   };

  //   document.addEventListener("wheel", (event) => listenScroll(event), {
  //     passive: false,
  //   });
  //   document.addEventListener("swipeUp", () => scroll(1));
  //   document.addEventListener("swipeDown", () => scroll(-1));
  // }, []);

  return (
    <div className="wrapper" {...handlers} onClick={onPageClicked}>
      {isMobile && <Frame />}
      <Logo black={aboutPageActive} />
      <About isActive={aboutPageActive} />
      {isMobile && <Introduction />}

      {projectsData.map((project) => (
        <Project
          data={project}
          map={House01Map}
          descriptionIsActive={descriptonPageActive}
          showDescriptionPage={showDescriptionPage}
          closeDescriptionPage={closeDescriptionPage}
        ></Project>
      ))}
    </div>
  );
}

export default App;
