import HighSpeed from "../HighSpeed";
import HeaderPage from "../HeaderPage";
import CreativitiySection from "../CreativitiySection";
import VideoSection from "../VideoSection";
import EngineeredByspaceX from "../EngineeredByspaceX";
import DayTrial from "../DayTrial";
import FooterSection from "../FooterSection";
import NavBar from "../Layouts/NavBar";

const App = () => {
  return (
    <>
      <HeaderPage />
        <HighSpeed />
        <CreativitiySection />
        <VideoSection/>
        <EngineeredByspaceX />
        <DayTrial />
      <FooterSection/>
    </>
  );
};

export default App;
