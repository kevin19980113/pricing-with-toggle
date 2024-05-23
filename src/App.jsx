import bgTop from "./assets/bg-top.svg";
import bgBottom from "./assets/bg-bottom.svg";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="main-container">
      <img className="bg-top" src={bgTop}></img>
      <img className="bg-bottom" src={bgBottom}></img>
      <Pricing />
    </div>
  );
}

export default App;
