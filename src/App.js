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
  return (
    <div className="wrapper">
      <Frame />
      <Logo />
      <Introduction />
      <Project image={House01} map={House01Map}></Project>
      <Project image={House02} map={House02Map}></Project>
      <Project image={House03} map={House03Map}></Project>
      <About />
    </div>
  );
}

export default App;
