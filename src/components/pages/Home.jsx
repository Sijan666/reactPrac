import AboutHelpCard from "../layouts/AboutHelpCard";
import Banner from "../layouts/Banner";
import GetCerto from "../layouts/GetCerto";
import MobileSecurity from "../layouts/MobileSecurity";
import Sliders from "../layouts/Sliders";
import SpyCerto from "../layouts/SpyCerto";



const Home = () => {
  return (
    <>
      <Banner />
      <Sliders/>
      <MobileSecurity/>
      <GetCerto/>
      <AboutHelpCard/>
      <SpyCerto/>
    </>
  );
};

export default Home;
