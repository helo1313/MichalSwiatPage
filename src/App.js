import Logo from "./Components/Logo/Logo";
import Introduction from "./Components/Introduction/Introduction";
import Project from "./Components/Project/Project";
import Frame from "./Components/Frame/Frame";

import House01 from "./images/Cechowa.png";
import House02 from "./images/Lanowa.png";

function App() {
  return (
    <div className="wrapper">
      <Frame />
      <Logo />
      <Introduction />
      <Project image={House01}></Project>
      <Project image={House02}></Project>
      <Project image={House01}></Project>
      <Project image={House02}></Project>
      <Project image={House01}></Project>
      <Project image={House02}></Project>
      <Project image={House01}></Project>
      <Project image={House02}></Project>
      <Project image={House01}></Project>
    </div>
  );
}

export default App;
